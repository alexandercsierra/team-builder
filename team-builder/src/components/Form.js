import React, {useState} from 'react';


function Form(props) {
    const {setTeam, team} = props;
    const [newMember, setNewMember] = useState({
        name:"",
        email: "",
        role:"",
    })

    function makeNewMember (e){
      setNewMember({
          ...newMember,
          [e.target.name]: e.target.value
      })
    }

    function onSubmit(e){
        e.preventDefault();
        setTeam(oldTeam => [...oldTeam, newMember]);
    }


    console.log(newMember);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={makeNewMember} name='name' type="text" placeholder="name"></input>
        <input onChange={makeNewMember} name='email' type="email" placeholder="email"></input>
        <input onChange={makeNewMember} name='role' type="text" placeholder="role"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form;
