function trimmer(payload) {
  for (let key in payload) {
    if (typeof payload[key] === 'object' && payload[key] !== null) {
      payload[key] = trimmer(payload[key]);
    } else if (typeof payload[key] === 'string') {
      payload[key] = payload[key].trim();
    }
  }

  return payload;
}

module.exports = trimmer;
