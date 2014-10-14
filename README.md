js-heap
=======

js-heap is a flexible, value-agnostic heap for Javascript. It provides a simple interface and allows users to define custom comparison functions for heap sorting.

## Installation

```javscript
npm install js-heap
```

## Usage

To get started, `require` **js-heap**, and create a new Heap instance:

```javascript
var Heap = require('js-heap');

var h = new Heap(function(a,b) {
  return a - b;
});
```

The comparison function behaves like a [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) function you would pass into a standard [Javascript Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

The default comparison function is the one shown above - the heap is organized so that the highest numeric priority is at the top.

## Heap Values

A node in the heap can be whatever you'd like:

```javascript
// Example node
var node = {
  priority: 1,
  value: 'ABCD',
}

h.push(node);
```

You can create a custom sort function to compare arbitrary nodes:

```javascript
var h = new Heap(function(a, b) {
  return a.priority - b.priority;
});
```

##.push(node)
Pushes a new node onto the heap. A "node" value can be a primitive or an arbitrary Javascript object. Pushed nodes are sorted based on the provided sort function.

```javascript
h.push(1);
h.push(2);
...
```

##.pop()
Removes and returns the top node in the heap. If the heap is empty, `null` is returned.

```javascript
// Returns 2
h.pop();

// Returns 1
h.pop();

// Returns null
h.pop();
...
```

##.peek()
Returns the top node in the heap. The node remains on top of the heap.

```javascript
h.push(1);

// Returns 1
h.peek();

// Still returns 1
h.peek();
...
```

##.isEmpty()
Returns `true` if the heap is empty. 

##.length
A read-only length property representing the number of nodes in the heap.
