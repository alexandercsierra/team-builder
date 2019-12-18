import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form'
import Member from './components/Member'

function App() {
  const [memberToEdit, setMemberToEdit] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [team, setTeam] = useState([])
  const [newMember, setNewMember] = useState({
    name:"",
    email: "",
    role:"",
})

  // console.log(team);
  return (
    <div className="App">      

      <Form setTeam={setTeam} team={team} newMember={newMember} setNewMember={setNewMember} memberToEdit={memberToEdit} isEdit={isEdit} setIsEdit={setIsEdit}/>

      <Member newMember={newMember} team={team} membertoEdit={memberToEdit} setMemberToEdit={setMemberToEdit} isEdit = {isEdit} setIsEdit={setIsEdit}/>
    </div>
  );
}

export default App;
