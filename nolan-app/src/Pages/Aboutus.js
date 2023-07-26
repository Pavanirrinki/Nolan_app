import React from 'react'
import Header from './Header'
import logo from "../assests/logo.webp";
import { GiArtificialHive } from 'react-icons/gi';
import {AiOutlineInstagram}  from 'react-icons/ai';
import {AiFillTwitterCircle}  from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import Createscript from './Createscript';
function Aboutus() {
  return (
   

   
   <>
   <div> 
<div class="wallpaper">
  <Header />
       <div style={{ marginLeft: '50px', marginTop: "15%" }}>
              <img src={logo} className='logo' />
              <h1 style={{ fontWeight: "bold", color: "white", fontSize: "70px" }}>About Us</h1>
                    <div className='aboutus-container'>
              <div style={{
                 marginTop: "50px", border: 'none',  padding: "40px", backgroundColor: " #171a1f",
             borderRadius: "20px"
              }} className='custom-width'>
                  <GiArtificialHive style={{ fontSize: "30px", fontWeight: "bold", color: "gray", marginTop: "-15px", marginRight: "20px" }} />
               <span className='text-white' style={{ fontSize: "30px", fontWeight: "bold" }}>
                      About Us</span>
                 <h3 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px" }}>Our Mission</h3>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>Welcome to NolanAi, the AI-driven scriptwriting software for screenwriters at any level. Our mission is to guide and empower you in crafting captivating screenplays while preserving your unique voice.</p>
                   <h3 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}> What is NolanAI?</h3>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>NolanAi is the ultimate AI-driven script writing software that can help screenwriters of all levels. It's designed to guide and assist you in bringing your stories to the screenplay industry format, without stealing your creativity.</p>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>If you're new to the industry, NolanAi can be your co-pilot, helping you through the emotional and exhausting process of screenwriting.</p>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>With its powerful algorithms and intuitive interface, it can offer suggestions and guidance on character development, plot points, and dialogue, helping you turn your ideas into polished screenplays.</p>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>For experienced scriptwriters, NolanAi can bring new ideas and inspiration to your writing. It can suggest fresh angles, plot twists, and character arcs, helping you take your craft to the next level. And throughout the writing process, you're always in control.</p>
                  <h6 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>NolanAi is here to help, not to take over.</h6>
                  <h3 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>For Novice Screenwriters:</h3>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "900px", opacity: "0.8" }}>If you're new to the industry, NolanAi is your trusted co-pilot on the exhilarating screenwriting journey. We understand the emotional and exhaustive nature of the process, which is why NolanAI is here to provide valuable suggestions and guidance. Our powerful algorithms and intuitive interface help you master character development, plot points, and dialogue while getting a grip on screenplay formatting.</p>
                  <h3 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>For Seasoned Scriptwriters:</h3>
                  <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>Even experienced scriptwriters need a creative spark. NolanAI acts as your catalyst, offering fresh ideas and innovative perspectives to elevate your writing. Discover new angles, plot twists, and character arcs that enhance your storytelling. NolanAI complements your expertise by working alongside you, amplifying your skills. Check out our advanced plans for professionals like you here: Check premium plan</p>
                 <h3 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>Control and Creativity:</h3>
                 <p style={{ color: "white", marginBottom: '20px', fontSize: "20px", fontWeight: "300px", opacity: "0.8" }}>We believe in empowering screenwriters, not taking over. With NolanAi, you're always in control. Our AI-powered features seamlessly integrate into your workflow, providing intelligent suggestions and streamlining your creative process. Our user-friendly interface allows you to effortlessly shape and refine your scripts, bringing your stories to life efficiently and effectively.</p>
                <h4 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>Experience the transformative impact of NolanAi and unleash your screenwriting potential today.</h4>
                  <h6 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>Drop us an email: <a href='hello@nolanai.app'>hello@nolanai.app</a></h6>
                 <h6 style={{ color: "white", marginBottom: '20px', marginLeft: "0px", marginTop: "10px", fontWeight: "bold" }}>For support: <a href='hello@nolanai.app'>support@nolanai.app</a></h6>
              </div>
            
      
          </div>
          
         </div>
         <div className='d-flex justify-content-center m-2 mb-0'>
              <button className='bg-danger text-white' style={{ fontWeight: "bold", padding: "10px 15px 5px 15px", border: "none", borderRadius: "15px" }}><Createscript data="Try NolanAI"/></button>
           </div>
          <div className='background-color2'>
              <div className='footer'>
                  <p className='text-white'> © Nolan 2023
                     <p style={{ marginTop: "0px", opacity: "0.5" }}>Privacy Policy|Terms of Service</p>
                  </p>
                 <div>
                    <p className='text-white'> Follow us:
                         <AiOutlineInstagram style={{ color: "white", marginLeft: "15px" }} />
                         <AiFillTwitterCircle style={{ color: "white", marginLeft: "5px" }} />
                          <AiOutlineYoutube style={{ color: "white", marginLeft: "5px" }} /></p>
                  </div>
                 <p className='text-white'> hello@nolanai.app</p>

             </div>
         </div>
  </div>

 
  <div class="wallpaper2" style={{height:"430%"}}></div>
  </div></>
    
  )
}

export default Aboutus
