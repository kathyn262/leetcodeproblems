/*
429. N-ary Tree Level Order Traversal

Given an n-ary tree, return the level order 
traversal of its nodes' values.

Nary-Tree input serialization is represented 
in their level order traversal, each group 
of children is separated by the null value 
(See examples).

Example 1:
Input: root = [1,null,3,2,4,null,5,6]
Output: [[1],[3,2,4],[5,6]]

Example 2:
Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]
 
Constraints:
* The height of the n-ary tree is less than or equal to 1000
* The total number of nodes is between [0, 104]
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];

  // bfs, queue, fifo
  let queue = [root];
  let nextQueue = [];
  let res = [];
  let currLevel = [];

  while (queue.length) {
    let curr = queue.shift();

    currLevel.push(curr.val);

    for (let child in curr.children) {
      nextQueue.push(curr.children[child]);
    }

    if (queue.length === 0) {
      res.push([...currLevel]);
      currLevel = [];
      queue = [...nextQueue];
      nextQueue = [];
    }
  }

  return res;
};