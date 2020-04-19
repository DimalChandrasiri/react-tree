import React, { ReactElement, FunctionComponent } from 'react';
import { TreeNode } from 'models/general';

interface TreeViewProps {
    data: TreeNode[];
    commonNodeClass?: string[]
}

export const TreeView: FunctionComponent<TreeViewProps> = (props: TreeViewProps): ReactElement => {

    const {
        data
    } = props;

    const renderCheckBox = (node: TreeNode): ReactElement => {
        return (
            <input
                type="checkbox"
                className="invisible"
                onClick={ () => {
                    console.log("checkbox-handler");
                } }
                checked={ node.isChecked }
            />
        )
    }

    const renderNodes = (children: TreeNode[]): ReactElement[] => {
        const childElements: ReactElement[] = [];
        children.forEach((node: TreeNode) => {
            childElements.push(renderNode(node));
        })
        return childElements;
    }

    const renderNode = (node: TreeNode) => {
        return (
            <div className="tree-node">
                { renderCheckBox(node) }
                <span>{ node.name }</span>
                { node.isExpanded && node.children && node.children.length !== 0 && 
                    renderNodes(node.children)
                }
            </div>
        )
    }

    return (
        <div className="react-tree-view">
            { renderNodes(data) }
        </div>
    )
}