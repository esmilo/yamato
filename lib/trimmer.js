module.exports = function t(p) {
  for (let key in p) {
    if (typeof p[key] === 'object' && p[key] !== null) {
      p[key] = t(p[key]);
    } else if (typeof p[key] === 'string') {
      p[key] = p[key].trim();
    }
  }

  return p;
};
