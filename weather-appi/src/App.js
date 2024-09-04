import React from 'react';
import './App.css';
import Filter from './filter';

function App() {
  const items = ["item 1", "item 2", "item 3", "Another item1", "Another item2"]
  return (
    <div>
    {/* <WeatherAppi/> */}
    <Filter  items={items}/>
    </div>
  );
}

export default App;
