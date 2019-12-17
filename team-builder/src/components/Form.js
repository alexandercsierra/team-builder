import React from 'react';


function Form(props) {
    const {setTeam, team} = props;

    function newMember (e){
        setTeam([
            ...team,
            {[e.target.name]: e.target.value}
        ])
    }

  return (
    <div>
      <form>
        <input onChange={newMember} type="text" placeholder="name"></input>
        <input onChange={newMember} type="email" placeholder="email"></input>
        <input onChange={newMember} type="text" placeholder="role"></input>
      </form>
    </div>
  );
}

export default Form;
