'use strict';


/**
 * The Tree object
 */
function Tree(val, left, right) {
	this.value = val;
	this.left = left;
	this.right = right;
	this.parent = null;
	this.printed = false;
};

function printTree(root) {
	let node = root,
	printout = [];

	while(node) {
		if(node.printed) {
			// We've done what we had to with this node. 
			// Go up to its parent.
			node = node.parent;
			continue;
		}

		if(node.left && !node.left.printed) {
			node = node.left;
			continue;
		} 

		// No left sub-tree, or we've already been there. 
		// Print this node's value.
		printout.push(node.value);
		node.printed = true;
		
		if(node.right && !node.right.printed) {
			node = node.right;
		} else {
			// No right sub-tree, we're at the end of the line for this sub-tree.
			// Go up to the parent.
			node = node.parent;
		}
	}

	console.log(printout.join(","));
};



var lleaf = new Tree(3),
rleaf = new Tree(5),
lsubTree = new Tree(4, lleaf, rleaf);
rleaf.parent = lsubTree;
lleaf.parent = lsubTree;

lleaf = new Tree(7);
rleaf = new Tree(9);
var rsubTree = new Tree(8, lleaf, rleaf);
rleaf.parent = rsubTree;
lleaf.parent = rsubTree;

var root = new Tree(6, lsubTree, rsubTree);
rsubTree.parent = root;
lsubTree.parent = root;


console.log(root);
printTree(root);

