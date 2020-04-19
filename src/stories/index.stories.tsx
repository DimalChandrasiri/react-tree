import React from 'react';
import { TreeView } from '../components';
import { TreeNode } from '../models';

export default { title: 'Tree View' };

const story1: TreeNode[] = [{
    name: 'level 1 - Node 1',
    isExpanded: false,
    isChecked: false,
    isChildrenLoading: false,
    children: [{
        name: 'level 2 - Node 1',
        isExpanded: false,
        isChecked: true,
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

export const childrenCollapsed = () => <TreeView data={ story1 } />;

const story2: TreeNode[] = [{
    name: 'level 1 - Node 1',
    isExpanded: true,
    isChecked: false,
    isChildrenLoading: false,
    children: [{
        name: 'level 2 - Node 1',
        isExpanded: false,
        isChecked: true,
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

export const childrenExpanded = () => <TreeView data={ story2 } />;
