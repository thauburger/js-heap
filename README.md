js-heap
=======

js-heap is a flexible, value-agnostic heap implementation for Javascript. It provides a simple heap interface, and allows users to define custom comparison functions for heap sorting.

## Installation

```
npm install js-heap
```

## Usage

To get started, `require` **js-heap**, and create a new Heap instance:

```
var Heap = require('js-heap');

var h = new Heap(function(a,b) {
  return a - b;
});
```

The comparison function behaves like a `sort` function you would pass into a standard [Javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

The default comparison function is the one shown above - which organizes a heap such that the highest numeric priority is at the top.

A node in the heap can be whatever you'd like:

```
// Example node
var node = {
  priority: 1,
  value: 'ABCD',
}

h.push(node);
```

You can create a custom sort function to compare arbitrary nodes:

```
var h = new Heap(function(a, b) {
  return a.priority - b.priority;
});
```

##.push(node)

Pushes a new node onto the heap. A "node" value can be a primitive value or an arbitrary Javascript option. Pushed nodes are sorted based on the provided sort function.

```
h.push(1);
h.push(2);
...
```
