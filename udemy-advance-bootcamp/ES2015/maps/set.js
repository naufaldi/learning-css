var s = new Set;
var s2 = new Set([1,3,4,5,62,26,]);

s.add(10);
s.add(10);
s.add(20);

s.size; //2
s.has(10);
s.delete(20);
s.size;