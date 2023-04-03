import { UmbWorkspaceContext } from '../../../shared/components/workspace/workspace-context/workspace-context';
import { UmbRelationTypeRepository } from '../repository/relation-type.repository';
import { UmbEntityWorkspaceContextInterface } from '@umbraco-cms/backoffice/workspace';
import type { RelationTypeBaseModel, RelationTypeResponseModel } from '@umbraco-cms/backoffice/backend-api';

import { ObjectState } from '@umbraco-cms/backoffice/observable-api';
import { UmbControllerHostElement } from '@umbraco-cms/backoffice/controller';

export class UmbRelationTypeWorkspaceContext
	extends UmbWorkspaceContext<UmbRelationTypeRepository, RelationTypeResponseModel>
	implements UmbEntityWorkspaceContextInterface<RelationTypeResponseModel | undefined>
{
	#data = new ObjectState<RelationTypeResponseModel | undefined>(undefined);
	data = this.#data.asObservable();
	name = this.#data.getObservablePart((data) => data?.name);
	id = this.#data.getObservablePart((data) => data?.id);

	constructor(host: UmbControllerHostElement) {
		super(host, new UmbRelationTypeRepository(host));
	}

	async load(id: string) {
		const { data } = await this.repository.requestByKey(id);

		if (data) {
			this.setIsNew(false);
			this.#data.update(data);
		}
	}

	async createScaffold(parentId: string | null) {
		const { data } = await this.repository.createScaffold(parentId);
		if (!data) return;
		this.setIsNew(true);
		this.#data.next(data);
	}

	getData() {
		return this.#data.getValue();
	}

	getEntityKey() {
		return this.getData()?.id || '';
	}

	getEntityType() {
		return 'relation-type';
	}

	setName(name: string) {
		this.#data.update({ name });
	}

	async save() {
		if (!this.#data.value) return;
		if (this.isNew) {
			await this.repository.create(this.#data.value);
		} else {
			await this.repository.save(this.#data.value);
		}
		// If it went well, then its not new anymore?.

		this.setIsNew(false);
	}

	update<K extends idof RelationTypeBaseModel>(id: K, value: RelationTypeBaseModel[K]) {
		console.log('update', id, value);

		this.#data.next({ ...this.#data.value, [id]: value });
	}

	async delete(id: string) {
		await this.repository.delete(id);
	}

	public destroy(): void {
		this.#data.complete();
	}
}
