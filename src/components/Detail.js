import React, { useState } from 'react';

const items = [
  { name: 'Item 1', description: 'This is item 1' },
  { name: 'Item 2', description: 'This is item 2' },
  { name: 'Item 3', description: 'This is item 3' },
  { name: 'Item 4', description: 'This is item 4' },
  { name: 'Item 5', description: 'This is item 5' },
];

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="card-grid">
        {filteredItems.map((item) => (
          <div className="card" key={item.name}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
