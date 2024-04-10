import type { UmbRepositoryErrorResponse } from '../types.js';
import type { UmbMoveToRequestArgs } from './types.js';
import type { UmbApi } from '@umbraco-cms/backoffice/extension-api';

export interface UmbMoveToRepository extends UmbApi {
	requestMove(args: UmbMoveToRequestArgs): Promise<UmbRepositoryErrorResponse>;
}
