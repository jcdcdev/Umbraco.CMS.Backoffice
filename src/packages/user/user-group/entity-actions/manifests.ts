import { UMB_USER_GROUP_DETAIL_REPOSITORY_ALIAS, UMB_USER_GROUP_ITEM_REPOSITORY_ALIAS } from '../repository/index.js';
import { UMB_USER_GROUP_ENTITY_TYPE } from '../index.js';
import type { ManifestTypes } from '@umbraco-cms/backoffice/extension-registry';

const entityActions: Array<ManifestTypes> = [
	{
		type: 'entityAction',
		kind: 'delete',
		alias: 'Umb.EntityAction.UserGroup.Delete',
		name: 'Delete User Group Entity Action',
		forEntityTypes: [UMB_USER_GROUP_ENTITY_TYPE],
		meta: {
			detailRepositoryAlias: UMB_USER_GROUP_DETAIL_REPOSITORY_ALIAS,
			itemRepositoryAlias: UMB_USER_GROUP_ITEM_REPOSITORY_ALIAS,
		},
	},
];

export const manifests: Array<ManifestTypes> = [...entityActions];
