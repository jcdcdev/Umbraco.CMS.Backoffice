import type { UmbMediaEntityType } from '../../entity.js';
import type { UmbEntityModel } from '@umbraco-cms/backoffice/entity';

export interface UmbMediaCardItemModel {
	name: string;
	unique: string;
	entityType: UmbMediaEntityType;
	url?: string;
	extension?: string;
}

export interface UmbMediaPathModel extends UmbEntityModel {
	name: string;
}