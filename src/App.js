import React from 'react';
import Counter from './counter/Counter';
import Search from './search/Search';
import GenreToggle from './toggle/GenreToggle';

// 1. React.createElement
const myFullName = React.createElement('h1', {}, 'Khakim Bakhramov');

// 2. React.Component
class Greeting extends React.Component {
    render() {
        return <h3>Hello React</h3>
    }
}

// 3. React.PureComponent
class PureGreeting extends React.PureComponent {
    render() {
        return <h3>Hello React (Pure Component)</h3>
    }
}

// 4. Functional component
function FunctionalGreeting() {
  return (
    <h3>Hello React (Functional Component)</h3>
  );
}

// App Component
function App() {
  return (
    <div className="App">
      <Greeting />
      <PureGreeting />
      <FunctionalGreeting />  
      <Counter />  
      <Search /> 
      <GenreToggle />
    </div>
  );
}

export default App;
