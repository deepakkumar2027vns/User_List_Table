export const sortData = (data, { key, direction }) => {
  return [...data].sort((a, b) => {
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });
};

export const filterData = (data, searchTerm) => {
  if (!searchTerm) return data;
  
  const term = searchTerm.toLowerCase();
  return data.filter(
    item =>
      item.name.toLowerCase().includes(term) ||
      item.email.toLowerCase().includes(term)
  );
};

export const paginateData = (data, currentPage, rowsPerPage) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  return data.slice(startIndex, startIndex + rowsPerPage);
};