import React from 'react';
import Counter from './counter/Counter';
import Search from './search/Search';
import GenreToggle from './toggle/GenreToggle';
import ClassCounter from './classcounter/ClassCounter';

// 1. React.createElement
const myFullName = React.createElement('h1', {}, 'Khakim Bakhramov');

function App() {
  return (
    <div className="App">
      {myFullName}
      <Counter />  
      <ClassCounter />
      <Search /> 
      <GenreToggle />
    </div>
  );
}

export default App;
