import React from 'react';
import './App.css';
import Avatar from './components/Avatar'

const bart = {
  image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
  firstName: "Bart",
  lastName: "Simpson",
  star:true
};

function App() {
  return (
    <div className="App">
    <Avatar 
      image=''
      firstName='Frédéric'
      lastName='Paurisse'
    />
    <Avatar 
      image='' 
      firstName='Adrien' 
      lastName='Nombalier' 
    />
    <Avatar {...bart} />
    </div>
  );
}

export default App;
