import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'

function App() {

  const [team, setTeam] = useState([])

  return (
    <div className="App">
      {console.log(team)}
      <Form setTeam={setTeam} team={team}/>
    </div>
  );
}

export default App;
