import React from 'react';

function App() {
  const randomName = () => {
    const names = [
      'Alice',
      'Bob',
      'Charlie',
      'Diana',
      'Evan',
      'Fiona',
      'George',
      'Hannah',
      'Ian',
      'Julia',
    ];

    let name = names[Math.floor(Math.random() * 10)];

    return name;
  };
  return <h1>hello {randomName()}</h1>;
}

export default App;
