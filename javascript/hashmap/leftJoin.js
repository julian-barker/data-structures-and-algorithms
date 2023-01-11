
function leftJoin(map1, map2) {
  const results = [];
  const keys = map1.keys();

  if(keys.length === 0) {
    return results;
  }

  for(let key of keys) {
    const value = map1.get(key);
    const value2 = map2.get(key) || null;
    results.push([key, value, value2]);
  }

  return results;
}


module.exports = leftJoin;
