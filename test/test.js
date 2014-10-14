/**
 * test.js
 * js-heap test suite
 */

var test = require('tape');
var Heap = require('../heap.js');

var h = new Heap(function(a, b) {
  return a - b;
});

/**
 * Heap initialization - Highest Priority on Top (default)
 */

test('Empty heap', function(t) {
  t.equal(h.length, 0, 'length is 0');
  t.equal(h.pop(), null, 'pop returns null');
  t.end();
});

test('Length property', function(t) {
  t.equal(h.length, 0, 'length is 0');
  h.length = 1;
  t.equal(h.length, 0, 'length is still 0, cannot be changed externally');
  t.end();
});

/**
 * Heap functionality
 */

var values = [1, 2, 3, 5, 10];
var target = [10, 5, 2, 1, 3];

test('Push One', function(t) {
  var v = values[0];
  t.equal(h.length, 0, 'length is 0');
  h.push(v);
  t.equal(h.length, 1, 'length is 1');
  t.equal(h.peek(), v, 'pushed value is 1');
  t.end();
});

test('Push Multiple', function(t) {
  var vl = values.length;
  for (var i = 1; i < vl; i++) {
    h.push(values[i]);
  }
  t.equal(h.length, vl, 'length is ' + vl);
  t.equal(h.peek(), target[0], 'top is ' + target[0]);
  t.equal(JSON.stringify(h._array), JSON.stringify(target), 'correct sort order, highest first');
  t.end();
});

test('Peek', function(t) {
  t.equal(h.peek(), target[0], 'peek is ' + target[0]);
  t.end();
});

test('Pop', function(t) {
  t.equal(h.pop(), target[0], 'pop is ' + target[0]);
  t.end();
});

test('Pop Multiple', function(t) {
  var dq = [];
  while (h.length > 0) {
    dq.push(h.pop());
  }
  var descending = true;
  for (var i = 0; i < dq.length - 1; i++) {
    if (dq[i+1] > dq[i]) {
      descending = false;
      break;
    }
  }
  t.equal(descending, true, 'rest of heap popped in descending order: ' + dq);
  t.equal(h.length, 0, 'heap is now empty');
  t.equal(h.pop(), null, 'pop returns null');
  t.end();
});

/**
 * Heap - Lowest Priority on Top
 */

var h2 = new Heap(function(a, b) {
  return b - a;
});

test('Ascending order heap', function(t) {
  for (var i = 0; i < values.length; i++) {
    h2.push(values[i]);
  }
  t.equal(h2.peek(), values[0], 'peek is ' + values[0]);
  var dq = [];
  while(h2.length > 0) {
    dq.push(h2.pop());
  }
  var ascending = true;
  for (var i = 0; i < dq.length - 1; i++) {
    if (dq[i+1] < dq[i]) {
      ascending = false;
    }
  }
  t.equal(ascending, true, 'heap is popped in ascending order: ' + dq);
  t.equal(h2.length, 0, 'heap is now empty');
  t.equal(h2.pop(), null, 'pop returns null');
  t.end();
});
