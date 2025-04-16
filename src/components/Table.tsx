import { useState } from 'react';
import { sortData, filterData, paginateData } from '../utils/helpers';
import useUsers from '../hooks/useUsers';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from './Pagination';

const Table = ({ searchTerm }) => {
  const { users, loading, error } = useUsers();
  const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const filteredData = filterData(users, searchTerm);
  const sortedData = sortData(filteredData, sortConfig);
  const paginatedData = paginateData(sortedData, currentPage, rowsPerPage);
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <div>
          <span className="text-sm text-gray-600">
            Showing {filteredData.length === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1}-
            {Math.min(currentPage * rowsPerPage, filteredData.length)} of {filteredData.length} entries
          </span>
        </div>
        <div className="flex items-center">
          <label htmlFor="rowsPerPage" className="mr-2 text-sm text-gray-600">Rows per page:</label>
          <select
            id="rowsPerPage"
            className="border border-gray-300 rounded-md p-1 text-sm"
            value={rowsPerPage}
            onChange={handleRowsPerPageChange}
          >
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="p-8 text-center text-gray-500">No matching records found</div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHeader sortConfig={sortConfig} handleSort={handleSort} />
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedData.map((user) => (
                  <TableRow key={user.id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
    </div>
  );
};

export default Table;