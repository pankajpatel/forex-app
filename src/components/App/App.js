import React from 'react';
import './App.css';

import { SearchBar } from '../SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <main className="contents">
        <SearchBar />
        <div className="rates">

        </div>
      </main>
    </div>
  );
}

export default App;
