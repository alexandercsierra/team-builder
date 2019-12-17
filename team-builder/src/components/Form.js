import React, {useState} from 'react';
import styled from 'styled-components'


const FormContainer = styled.div`
    // margin-top: 4%;
    width: 30%;
    margin: 4% auto;
`;

const Form2 = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

function Form(props) {
    const {setTeam, team, newMember, setNewMember} = props;
    

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
    <FormContainer>
        <h1>Enter New Team Member Information</h1>
        <Form2 onSubmit={onSubmit}>
            <label>Name: <input onChange={makeNewMember} name='name' type="text" placeholder="name"></input></label>
            <label>Email: <input onChange={makeNewMember} name='email' type="email" placeholder="email"></input></label>
            <label>Role: <input onChange={makeNewMember} name='role' type="text" placeholder="role"></input></label>
            
            <button>Submit</button>
        </Form2>
    </FormContainer>
  );
}

export default Form;
