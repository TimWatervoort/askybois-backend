// Format data for patch requests
const formatPatchData = (existingEntry, newData) => {
  const resourceKeys = Object.keys(existingEntry);
  const newEntry = {}
  resourceKeys.forEach(key => {
    newEntry[key] = newData[key] ? newData[key] : existingEntry[key];
  });
  return newEntry;
};

module.exports = {
  formatPatchData
};
