import React, { FunctionComponent, ReactElement } from 'react';
import { TreeView } from './components';
import { TreeNode } from 'models/general';

export const App: FunctionComponent = (): ReactElement => {

	const treeData: TreeNode[] = [{
		name: 'level 1 - Node 1',
		isExpanded: false,
		isChecked: false,
		isChildrenLoading: false,
		children: [{
			name: 'level 2 - Node 1',
			isExpanded: false,
			isChecked: false,
			isChildrenLoading: false,
		},{
			name: 'level 2 - Node 2',
			isExpanded: false,
			isChecked: false,
			isChildrenLoading: false,
			children: [{
				name: 'level 3 - Node 1',
				isExpanded: false,
				isChecked: false,
				isChildrenLoading: false,
			}]
		},{
			name: 'level 2 - Node 3',
			isExpanded: false,
			isChecked: false,
			isChildrenLoading: false,
		}]
	},{
		name: 'level 1 - Node 2',
		isExpanded: false,
		isChecked: false,
		isChildrenLoading: false,
	}]

	return (
		<TreeView data={ treeData } />
	);
}
