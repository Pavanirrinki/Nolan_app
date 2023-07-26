import React,{useState} from 'react'
import Header from './Header'
import Createscript from './Createscript';
import { GiArtificialHive } from 'react-icons/gi';
import {AiOutlineInstagram}  from 'react-icons/ai';
import {AiFillTwitterCircle}  from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
import { Link } from 'react-router-dom';
function Dashboard() {
    const [activeButton,setActiveButton] = useState(null)
    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
      };
  return (
    <div>
      <div className='Dashboard_wallpaper'>
<Header />

<div className='content-wrapper'>
  <div className='d-flex flex-column align-items-center'>
    <h1 className='text-white' style={{ marginTop: "100px",fontWeight:"bold",fontSize:"60px"}}>Your Latest Scripts</h1>
    <Link to='/pricing'>
    <button className='bg-danger text-white' style={{ fontWeight: "bold", padding: "15px", border: "none", borderRadius: "15px" }}>Upgrade your Plan</button>
    </Link>
    <div style={{marginTop:"50px"}} className='d-flex'>
  <div className={activeButton == 1 ? "button button_click":"button"}  onClick={() => handleButtonClick(1)} >
    <Createscript data='Create Script' className='text-white' style={{padding:"0px",marginTop:"0px"}}/></div>
  <div className={activeButton == 2 ? "button button_click":"button"}    onClick={() => handleButtonClick(2)}>My Scripts</div>
  <div className={activeButton == 3 ? "button button_click":"button"}   onClick={() => handleButtonClick(3)}>Demos</div>
</div>

  </div>
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
    </div>
  )
}

export default Dashboard
