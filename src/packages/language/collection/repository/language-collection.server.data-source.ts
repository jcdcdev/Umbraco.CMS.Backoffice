import type { UmbLanguageCollectionFilterModel } from '../types.js';
import type { UmbLanguageDetailModel } from '../../types.js';
import { UMB_LANGUAGE_ENTITY_TYPE } from '../../entity.js';
import type { UmbCollectionDataSource } from '@umbraco-cms/backoffice/repository';
import { LanguageResource } from '@umbraco-cms/backoffice/external/backend-api';
import type { UmbControllerHost } from '@umbraco-cms/backoffice/controller-api';
import { tryExecuteAndNotify } from '@umbraco-cms/backoffice/resources';

/**
 * A data source that fetches the language collection data from the server.
 * @export
 * @class UmbLanguageCollectionServerDataSource
 * @implements {UmbCollectionDataSource}
 */
export class UmbLanguageCollectionServerDataSource implements UmbCollectionDataSource<UmbLanguageDetailModel> {
	#host: UmbControllerHost;

	/**
	 * Creates an instance of UmbLanguageCollectionServerDataSource.
	 * @param {UmbControllerHost} host
	 * @memberof UmbLanguageCollectionServerDataSource
	 */
	constructor(host: UmbControllerHost) {
		this.#host = host;
	}

	/**
	 * Gets the language collection filtered by the given filter.
	 * @param {UmbLanguageCollectionFilterModel} filter
	 * @return {*}
	 * @memberof UmbLanguageCollectionServerDataSource
	 */
	async getCollection(filter: UmbLanguageCollectionFilterModel) {
		const { data, error } = await tryExecuteAndNotify(this.#host, LanguageResource.getLanguage(filter));

		if (data) {
			const items = data.items.map((item) => {
				const model: UmbLanguageDetailModel = {
					unique: item.isoCode,
					name: item.name,
					entityType: UMB_LANGUAGE_ENTITY_TYPE,
					isDefault: item.isDefault,
					isMandatory: item.isMandatory,
					fallbackIsoCode: item.fallbackIsoCode || null,
				};

				return model;
			});

			return { data: { items, total: data.total } };
		}

		return { error };
	}
}
