import React from 'react';
import './App.css';
import Avatar from './components/Avatar'

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson"
};

function App() {
  return (
    <div className="App">
    <Avatar image='https://via.placeholder.com/150' firstName='Frédéric' lastName='Paurisse' />
    <Avatar image='https://via.placeholder.com/150' firstName='Adrien' lastName='Nombalier' />
    <Avatar {...bart} />
    </div>
  );
}

export default App;
