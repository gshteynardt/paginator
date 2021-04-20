import React, { useState } from 'react';

import './App.css';
import Paginator from './components/Pagination';
import usePagination from './hooks/usePaginator';

const COUNT = 50;

function App() {
  const [value, setValue] = useState(1);
  const handleClickOnPrevPage = () => setValue(value === 1 ? 1 : value - 1);
  const handleClickOnNextPage = () => setValue(value === COUNT ? COUNT : value + 1);

  const items = usePagination({
    count: COUNT,
    boundaryCount: 2,
    siblingCount: 1,
    defaultPage: 1,
    page: value,
  });

  return (
    <div className="App">
      <Paginator
        items={items}
        onBack={handleClickOnPrevPage}
        onNext={handleClickOnNextPage}
        onClick={setValue}
        page={value}
      />
    </div>
  );
}

export default App;
