import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const [logIn, setlogIn] = useState() 
// useEffect(() => {


//   return () => {
   
//   }
// },[])
 function login (){
  axios.get('https://ecomm-backend-xcsj.onrender.com/ecomm/api/v1/auth/signup');
} 



function SignIn() {
  return (
    <>
    <form>
     <input placeholder='email'></input>
     <input placeholder='password'></input>
    <button>Submmit</button>
    </form>
    </>
  )
}

export default SignIn
