/** 
 * let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
] 

// an exclude array made of key value pair
const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'type', v: 'tv'}, 
  ...
] 

function excludeItems(items, excludes) { 
  excludes.forEach( pair => { 
    items = items.filter(item => item[pair.k] === item[pair.v])
  })
 
  return items
} 

1. What does this function excludeItems do?
2. Is this function working as expected ?
3. What is the time complexity of this function?
4. How would you optimize it ?
*/

function excludeItems(items, excludes) {
  let map = new Map();
  let exclude_keys = new Set();

  excludes.forEach(({ k, v }) => {
    exclude_keys.add(k);
    if (!map.has(k)) {
      map.set(k, new Set());
    }
    map.get(k).add(v);
  });

  return items.filter((item) => {
    return [...exclude_keys].every((ex_key) => {
      return !map.get(ex_key).has(item[ex_key]);
    });
  });
}
