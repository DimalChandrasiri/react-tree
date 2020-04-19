import { ReactElement } from 'react';

export interface TreeNode {
    name: string,
    isExpanded: boolean,
    isChecked: boolean,
    isChildrenLoading: boolean,

    children?: TreeNode[];
    customClass?: string[];
    customCheckBox?: ReactElement;
}