import { UMB_SETTINGS_SECTION_PATH } from '@umbraco-cms/backoffice/settings';
import type { UmbDocumentTypeEntityTypeUnion } from './entity.js';
import { UmbPathPattern } from '@umbraco-cms/backoffice/router';

export const UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_TEMPLATE = 'template';
export const UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_ELEMENT = 'element';

export type UmbCreateDocumentTypeWorkspacePresetTemplateType =
	typeof UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_TEMPLATE;
export type UmbCreateDocumentTypeWorkspacePresetElementType = // line break thanks!
	typeof UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PRESET_ELEMENT;

export type UmbCreateDocumentTypeWorkspacePresetType =
	| UmbCreateDocumentTypeWorkspacePresetTemplateType
	| UmbCreateDocumentTypeWorkspacePresetElementType;

export const UMB_CREATE_DOCUMENT_TYPE_WORKSPACE_PATH_PATTERN = new UmbPathPattern<{
	entityType: UmbDocumentTypeEntityTypeUnion;
	parentUnique?: string | null;
	presetAlias?: UmbCreateDocumentTypeWorkspacePresetType | null;
}>('create/:entityType/:parentUnique/:presetAlias', UMB_SETTINGS_SECTION_PATH);

export const UMB_EDIT_DOCUMENT_TYPE_WORKSPACE_PATH_PATTERN = new UmbPathPattern<{ id: string }>('edit/:id');
