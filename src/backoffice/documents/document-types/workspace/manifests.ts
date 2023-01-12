import type { ManifestWorkspace, ManifestWorkspaceAction, ManifestWorkspaceView } from '@umbraco-cms/models';

const workspace: ManifestWorkspace = {
	type: 'workspace',
	alias: 'Umb.Workspace.DocumentType',
	name: 'Document Type Workspace',
	loader: () => import('./document-type-workspace.element'),
	meta: {
		entityType: 'document-type',
	},
};

const workspaceViews: Array<ManifestWorkspaceView> = [
	{
		type: 'workspaceView',
		alias: 'Umb.WorkspaceView.DocumentType.Design',
		name: 'Document Type Workspace Design View',
		loader: () => import('./views/design/workspace-view-document-type-design.element'),
		weight: 100,
		meta: {
			workspaces: ['Umb.Workspace.DocumentType'],
			label: 'Design',
			pathname: 'design',
			icon: 'edit',
		},
	},
];

const workspaceActions: Array<ManifestWorkspaceAction> = [
	{
		type: 'workspaceAction',
		alias: 'Umb.WorkspaceAction.DocumentType.Save',
		name: 'Save Document Type Workspace Action',
		loader: () => import('../../../shared/components/workspace/actions/save/workspace-action-node-save.element'),
		meta: {
			workspaces: ['Umb.Workspace.DocumentType'],
			look: 'primary',
			color: 'positive',
		},
	},
];

export const manifests = [workspace, ...workspaceViews, ...workspaceActions];