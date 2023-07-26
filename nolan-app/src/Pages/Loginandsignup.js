import React, { useState } from 'react'
import logo from "../assests/logo.webp"
import Navbar from 'react-bootstrap/Navbar';
import { useGoogleLogin} from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function Loginandsignup() {
    const navigate = useNavigate()
    const [emailshow, setEmailshow] = useState(false)
    const [passwordshow, setPasswordshow] = useState(false)
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const emailshowed = (e) => {
        e.preventDefault()
       setEmailshow(!emailshow)
    }
    const handlepasswordshowed = (e) => {
        e.preventDefault()
        console.log(email)
        if(email.length >=1){
        setPasswordshow(true)
        }
        if(email && confirmpassword && password){
            if(password == confirmpassword){
                axios.post('http://localhost:4679/signup',{email,password}).
                then(res=>{localStorage.setItem("nolanuserdata",JSON.stringify(res.data))
                           navigate('/')
                    }).catch(error=>alert(error.message))
            }

        }
    }
    
        const login = useGoogleLogin({
            onSuccess: async ({ code }) => {
                const tokens = await axios.post('http://localhost:4679/auth/google', { 
                  code,
                });
            
                // console.log(tokens.data);
                const data ={
                    email:tokens.data.email,
                    name:tokens.data.name,
                    profilepic:tokens.data.picture
                }
                localStorage.setItem("googledata",JSON.stringify(data))
              },
              flow: 'auth-code',
          });
    return (
        <div>
            <div className='login-backgroung'>
                <Navbar.Brand href="#home"><img src={logo} className='m-0' /></Navbar.Brand>
                <h1 className='text-white text-center' style={{ fontWeight: "bold", marginTop: "20px" }}>Log In</h1>
                <p className='text-white text-center' style={{ fontSize: "30px" }}>Log in to unlock the full Nolan Experience.</p>
                {!emailshow ?
                    <div className='d-flex justify-content-center'>
                        <div style={{ width: "600px", backgroundColor: "black", border: 'none', borderRadius: '30px', opacity: "0.7" }} >
                            <div className='d-flex justify-content-center'>
                                {/* <button style={{
                                    width: "40%", marginTop: "30px", fontWeight: 'bold', padding: "15px",
                                    border: "none", borderRadius: "15px", backgroundColor: 'red', color: "white"
                                }} className='bg-danger text-white'>Continue with Google</button> */}
                     

    <button style={{
                                    width: "40%", marginTop: "30px", fontWeight: 'bold', padding: "15px",
                                    border: "none", borderRadius: "15px", backgroundColor: 'red', color: "white"
                                }} className='bg-danger text-white' onClick={()=>login()}>Continue with Google</button> 



                            </div>
                            <div className='d-flex justify-content-center'>
                                <button style={{
                                    width: "40%", marginTop: "30px", fontWeight: 'bold', padding: "15px",
                                    border: "none", borderRadius: "15px", zIndex: "1"
                                }} className='bg-danger text-white'>Continue with Facebook</button>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <button style={{
                                    width: "40%", marginTop: "30px", fontWeight: 'bold', opacity: "1", padding: "15px",
                                    border: "none", borderRadius: "15px", marginBottom: '30px'
                                }} className='bg-danger text-white' onClick={emailshowed} >Continue with Email</button>
                            </div>
                            <p className='text-white text-center'>Forgot password?</p>
                        </div>
                    </div> :

                    <div className='d-flex justify-content-center'>
                        <div style={{ width: "600px", backgroundColor: "black", border: 'none', borderRadius: '30px', opacity: "0.7", height: "300px" }} >
                            <div className={!passwordshow ? 'd-flex justify-content-center margin_top' : 'd-flex justify-content-center mt-5'}>
                                <input type='email' placeholder='enter your email' style={{ width: "70%", padding: "10px", borderRadius: "20px" }} value={email}  onChange={(e)=>setEmail(e.target.value)} />
                            </div>
                            {passwordshow &&
                                <div>
                                    <div className='d-flex justify-content-center' style={{ marginTop: "20px" }}>
                                        <input type='password' placeholder='enter your password' style={{ width: "70%", padding: "10px", borderRadius: "20px" }}  value={password}  onChange={(e)=>setPassword(e.target.value)}/>
                                    </div>
                                    <div className='d-flex justify-content-center' style={{ marginTop: "20px" }}>
                                        <input type='password' placeholder='confirm your email' style={{ width: "70%", padding: "10px", borderRadius: "20px" }}  value={confirmpassword}  onChange={(e)=>setConfirmpassword(e.target.value)}/>
                                    </div>
                                </div>}
                            <div className='d-flex justify-content-center'>
                                <button className='bg-danger text-white' style={{
                                    padding: "10px 30px",
                                    marginTop: "20px", fontWeight: "bold", borderRadius: "30px"
                                }} onClick={handlepasswordshowed}>{!passwordshow ? "Continue" : "Register"}</button>
                            </div>
                        </div>
                    </div>}

            </div>
        </div>
    )
}

export default Loginandsignup
