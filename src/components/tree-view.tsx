import React, { ReactElement, FunctionComponent } from 'react';
import { TreeNode } from 'models/general';

interface TreeViewProps {
    data: TreeNode[];
}

export const TreeView: FunctionComponent<TreeViewProps> = (props: TreeViewProps): ReactElement => {

    const {
        data
    } = props;

    /**
     * Util method to render parent node.
     * 
     * @param children - Array of Tree Node object.
     */
    const renderNodes = (children: TreeNode[]): ReactElement[] => {
        const childElements: ReactElement[] = [];
        children.forEach((node: TreeNode) => {
            childElements.push(renderNode(node));
        })
        return childElements;
    }

    /**
     * Util method to render checkbox.
     * 
     * @param node - Tree node object.
     */
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

    /**
     * Util method to render single node. 
     * 
     * @param node - Tree node object.
     */
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