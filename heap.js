/**
 * heap.js
 * JS heap implementation
 */

var Heap = function(sort) {
  this._array = [];
  this._sort = sort;

  Object.defineProperty(this, 'length', {
    enumerable: true,
    get: function() { return this._array.length },
  });

  if (typeof this._sort !== 'function') {
    this._sort = function(a, b) {
      return a - b;
    }
  }
};

Heap.prototype.push = function(node) {
  node = node || {};
  this._array.push(node);
  this._bubble();
};

Heap.prototype.pop = function() {
  if (this.isEmpty()) {
    return null;
  }
  var top = this.peek();
  var last = this._array.pop();
  if (this.length > 0) {
    this._array[0] = last;
    this._sink();
  }
  return top;
};

Heap.prototype.peek = function() {
  return this._array[0];
};

Heap.prototype.isEmpty = function() {
  return this.length === 0;
};

Heap.prototype._compare = function(i, j) {
  return this._sort(this._array[i], this._array[j]) > 0;
};

Heap.prototype._bubble = function() {
  var i = this.length - 1;
  var j = this._parent(i);

  while (j !== null && this._compare(i, j)) {
    this._swap(i, j);
    i = j;
    j = this._parent(i);
  }
};

Heap.prototype._sink = function() {
  var i = 0;
  var lc = this._left(i);
  var rc = this._right(i);
  var next;

  while (lc !== null) {
    next = lc;
    if (rc !== null && this._compare(rc, lc)) {
      next = rc;
    }
    if (this._compare(next, i)) {
      this._swap(i, next);
      i = next;
      lc = this._left(i);
      rc = this._right(i);
    } else {
      return;
    }
  }
};

Heap.prototype.print = function() {
  var s = '';
  var nodes = 1;
  var values = 0;
  for (var i = 0; i < this.length; i++) {
    s += ' ' + this._array[i].toString();
    values++;
    if (values === nodes) {
      nodes = nodes << 1;
      values = 0;
      s += '\n';
    }
  }
  console.log('\n' + s + '\n');
};

Heap.prototype._parent = function(i) {
  var pi = (i - 1)/2 >> 0;
  return pi >= 0 ? pi : null;
};

Heap.prototype._left = function(i) {
  var li = i*2 + 1;
  return li < this.length ? li : null;
};

Heap.prototype._right = function(i) {
  var ri = i*2 + 2;
  return ri < this.length ? ri : null;
};

Heap.prototype._swap = function(i, j) {
  var a = this._array;
  var v = a[i];
  a[i] = a[j];
  a[j] = v;
};

if (typeof module !== 'undefined') {
  module.exports = Heap;
}
