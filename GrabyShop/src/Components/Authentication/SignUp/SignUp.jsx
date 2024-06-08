import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

function SignUp() {
   const [error, setError] = useState({
    name:false,
    userName:false,
    email:false,
    password:false
   }
)
  const [data, setdata] = useState(null)

   const [userData, setUserData] = useState({
    name:"",
    userName:"",
    email:"",
    password:"",
    confirmPassword:"",

   }) 
   const setData=(e) =>{
    let key = e.target.name;
    let value =e.target.value;
    setError({...error,[key]:false})

    setUserData({...userData,[key]:value})
   // console.log("========================>", userData);
   }
  
   const handleSubmit =async(e) =>{
    e.preventDefault();                                       
   if(userData.password.length <8 || !userData.password.includes(/^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/))
  //  {
  //   setError({...error,"password":true})
  //   return
  //  }
   if(userData.confirmPassword !== userData.password){
    setError({...error,"confirmPassword":true})
    return
   }

   try {
    const res = await axios.post('https://ecomm-backend-xcsj.onrender.com/ecomm/api/v1/auth/signup', {
      name:userData.name,
      userId:userData.userName,
      email:userData.email,
      password:userData.password
     })
     setdata(res)
     console.log("================>",res)
   } 
   catch (error) {
    console.log("Error is =================>",error);
   }
   
 
}
console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box>
        <Box>
        <TextField
        error={error.name}
          id="standard-error-helper-text"
          label="Name"
          name="name"
          value = {userData.name}
          onChange ={setData}
          variant="standard"
        />
        </Box>

        <Box>
        <TextField
          id="standard-error-helper-text"
          label="Username"
          name="userName"
          value = {userData.userName}
          onChange ={setData}
          variant="standard"
        />
        </Box>

         <Box>
        <TextField
          id="standard-error-helper-text"
          label="Email"
          name="email"
          value = {userData.email}
          onChange ={setData}
          variant="standard"
        />
        </Box>

        <Box>
        <TextField
          id="standard-error-helper-text"
          label="Password"
          name="password"
          value = {userData.password}
          onChange ={setData}
          variant="standard"
        />
        </Box>

        <Box>
        <TextField
          id="standard-error-helper-text"
          label="Confirm Password"
          name="confirmPassword"
          value = {userData.confirmPassword}
          onChange ={setData}
          variant="standard"
        />
        </Box>
        <Button variant="contained" type='submit'>SignUp</Button>
        </Box>
      </form>
    </>
  )
}

export default SignUp



