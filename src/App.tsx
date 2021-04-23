import React, { useState } from 'react';

import './App.css';
import Paginator from './components/Pagination';
import usePagination from './hooks/usePaginator';

const COUNT = 50;

function App() {
  const [value, setValue] = useState(1);
  const items = usePagination({
    count: COUNT,
    boundaryCount: 1,
    siblingCount: 1,
    defaultPage: 1,
    page: value,
    onClick: setValue,
  });

  return (
    <div className="App">
      <Paginator items={items}/>
    </div>
  );
}

export default App;
