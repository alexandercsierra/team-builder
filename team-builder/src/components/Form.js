import React, {useState, useEffect} from 'react';
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
    const {setTeam, team, newMember, setNewMember, memberToEdit, isEdit, setIsEdit} = props;
    

    function makeNewMember (e){
      setNewMember({
          ...newMember,
          [e.target.name]: e.target.value
      })
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        // setTeam(oldTeam => [...oldTeam, newMember]);
        if (isEdit){
            //search through team array
            // console.log(memberToEdit);
            let newArr = [...team];
            let person = newArr.find(person => person.email === memberToEdit.email && person.name === memberToEdit.name && person.role === memberToEdit.role);
            let index = newArr.indexOf(person);
            console.log(index);
            newArr[index] = newMember;
            setTeam(newArr);
            console.log("This is newArr", newArr);
            console.log("setNewMember", setNewMember);
            console.log(team);

            //find team member equal to memberToEdit
            //replace old team member with memberToEdit
            console.log("editing");
            setIsEdit(false);
        } else {
        setTeam([...team, newMember]);
        // console.log(team);
        setNewMember({
            name: "",
            email: "",
            role: "",
        })}
    }

    useEffect(()=>{
        //if memberToEdit changes,
        //update newMember to equal memberToEdit?
        setNewMember(memberToEdit)
    }, [memberToEdit])


    // console.log(newMember);
  return (
    <FormContainer>
        <h1>Enter New Team Member Information</h1>
        <Form2 onSubmit={onSubmit}>
            <label>Name: 
                <input onChange={makeNewMember}  value = {newMember.name} name="name" type="text" placeholder="name"/>
            </label>
            <label>Email: 
                <input onChange={makeNewMember}  value = {newMember.email} name="email" type="email" placeholder="email"/>
            </label>
            <label>Role: 
                <input onChange={makeNewMember}  value = {newMember.role} name="role" type="text" placeholder="role"/>
            </label>
            
            <button>Submit</button>
        </Form2>
    </FormContainer>
  );
}

export default Form;
