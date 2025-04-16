interface User {
    id: number;
    name: string;
    email: string;
    role: string;
    status: 'Active' | 'Inactive';
  }
  
  interface TableRowProps {
    user: User;
  }
  
  const TableRow = ({ user }: TableRowProps) => {
    const statusClass = user.status === 'Active' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-red-100 text-red-800';
  
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
          {user.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.role}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusClass}`}>
            {user.status}
          </span>
        </td>
      </tr>
    );
  };
  
  export default TableRow;