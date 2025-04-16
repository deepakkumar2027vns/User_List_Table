import { useState } from 'react';
import Table from './components/Table';
import SearchInput from './components/SearchInput';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 bg-red-100 text-center text-gray-800 border border-gray-5">User List Table</h1>
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table searchTerm={searchTerm} />
    </div>
  );
}

export default App;
