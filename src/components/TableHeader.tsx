import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';

const TableHeader = ({ sortConfig, handleSort }) => {
  const headers = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
    { key: 'status', label: 'Status' }
  ];

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="ml-1 opacity-30" />;
    return sortConfig.direction === 'asc' 
      ? <FaSortUp className="ml-1" /> 
      : <FaSortDown className="ml-1" />;
  };

  return (
    <thead className="bg-gray-50">
      <tr>
        {headers.map((header) => (
          <th
            key={header.key}
            className={`px-6 py-3 text-left text-xs font-medium text-gray-800 uppercase tracking-wider cursor-pointer ${
              ['name', 'email', 'role'].includes(header.key) ? 'hover:bg-gray-100' : ''
            }`}
            onClick={() => ['name', 'email', 'role'].includes(header.key) && handleSort(header.key)}
          >
            <div className="flex items-center">
              {header.label}
              {['name', 'email', 'role'].includes(header.key) && getSortIcon(header.key)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;