import React,{useState} from 'react'
import { GiArtificialHive } from 'react-icons/gi';
import Header from './Header';
import {TiTick} from 'react-icons/ti';
import {RxCross2} from 'react-icons/rx';

import {AiOutlineInstagram}  from 'react-icons/ai';
import {AiFillTwitterCircle}  from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
function Pricing() {
    const [activeButton,setActiveButton] = useState(null)
    const handleButtonClick = (buttonIndex) => {
        setActiveButton(buttonIndex);
      };
    
   
  return (
  <div>
<div className='wallpaper-pricing'>
<Header />
<h1 className='text-white' style={{marginTop:"10%"}}>Plans and Pricing</h1>
<div class="button-container">
  <button className={activeButton == 1 ? "button button_click":"button"}  onClick={() => handleButtonClick(1)}>Monthly</button>
  <button className={activeButton == 2 ? "button button_click":"button"}    onClick={() => handleButtonClick(2)}>Every 3Months</button>
  <button className={activeButton == 3 ? "button button_click":"button"}   onClick={() => handleButtonClick(3)}>Annually</button>
</div>
<div className='container-fluid-md'>
  <div className='row'>
<div className='col-12 col-md-3' >
      <div  className='pricing-cards'>
       
  
        <span className='text-white' style={{fontSize:"24px",fontWeight:"bold"}}>Free-Forever</span><hr style={{border:"1px solid white",width:"100%"}}/>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>Get started with our free plan and enjoy essential features without any cost. Perfect for individuals</p>
<h1 className='text-center' style={{color:'#E6D0B8'}}>$0</h1>
<div className='d-flex justify-content-center'>
      <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px",marginBottom:"10px"}}>Subscribe</button>
      </div>
      <p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
Unlimited Screenplays</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",color:"#E6C6A0"}}>
    Create as many screenplays as you want without limitation</p>
    <p className='text-white' style={{marginBottom:"15px",fontWeight:"500px",marginLeft:"5px"}}>
      <TiTick className='text-success m-0' /> 
      Automatic Cloud sync and Backup</p>
      <p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      History</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Access previous versions of your scripts</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>Last 3 days</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      PDF and Final Draft export</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",color:"#E6C6A0"}}>
Watermarked</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      Brainstorming</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Brainstorm with Nolan: Ask Questions on Screenplay Writing.</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>100 request per month</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
     Co Pilot/AI requests</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Ask AI change accent, continue dialogue, change ton of text</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>30 request per month</p> 
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      AI Image Generations</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Draw Scenes and Characters</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>5 request per month</p>     
<p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
      <RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/> 
      Screenplay Title <p style={{marginLeft:"20px"}}>Generations</p></p>
      <p className='text-white' style={{marginBottom:"0px",opacity:"0.7",fontWeight:"500px"}}>
      <RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Script Smart</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",opacity:"0.7",fontSize:"13px",color:"#E6C6A0"}}>
Automatically format text into a screenplay format</p>

<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px",opacity:"0.7"}}>
<RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
     Create Scene</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",opacity:"0.7",color:"#E6C6A0"}}>
Import your scene's beat sheet and let Nolan generate the initial draft of your scene.</p>

<p className='text-white' style={{marginBottom:"0px",opacity:"0.7",fontWeight:"500px"}}>
<RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Break Smart</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",opacity:"0.7",fontSize:"13px",color:"#E6C6A0"}}>
Screenplay Breakdown</p>

<p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
<RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Writers Room</p>
      <p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
      <RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Plot Hole Detection</p>


    <div className='d-flex justify-content-center'>
      <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px"}}>Subscribe</button>
      </div>
      </div>
      </div>
      <div className='col-12 col-md-3' >
      <div className='pricing-cards'>
       
  
        <span className='text-white' style={{fontSize:"24px",fontWeight:"bold"}}>Basic</span><hr style={{border:"1px solid white",width:"100%"}}/>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>Upgrade to our Basic plan for a budget-friendly option that unlocks additional functionalities.</p>
<h1 className='text-center' style={{color:'#E6D0B8'}}>{activeButton ==1 ? '$6.9':""}</h1>
<h1 className='text-center' style={{color:'#E6D0B8'}}>{activeButton ==2 ? '$17.9':""}</h1>
<h1 className='text-center' style={{color:'#E6D0B8'}}>{activeButton ==3 ? '$71.9':""}</h1>
<p className='text-center' style={{color:'#E6D0B8',fontSize:"12px"}}>Billed every 3 months</p>
<h3 className='text-center' style={{color:'white',textDecoration:"line-through"}}>{activeButton ==3 ? '$83.9':""}</h3>
<h3 className='text-center' style={{color:'white',textDecoration:"line-through"}}>{activeButton ==2 ? '$20.9':""}</h3>
<div className='d-flex justify-content-center'>
      <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px",marginBottom:"10px"}}>Subscribe</button>
      </div>
      <p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
Unlimited Screenplays</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",color:"#E6C6A0"}}>
    Create as many screenplays as you want without limitation</p>
    <p className='text-white' style={{marginBottom:"15px",fontWeight:"500px",marginLeft:"5px"}}>
      <TiTick className='text-success m-0' /> 
      Automatic Cloud sync and Backup</p>
      <p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      History</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Access previous versions of your scripts</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>Last 3 days</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      PDF and Final Draft export</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",color:"#E6C6A0"}}>
Watermarked</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      Brainstorming</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Brainstorm with Nolan: Ask Questions on Screenplay Writing.</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>100 request per month</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
     Co Pilot/AI requests</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Ask AI change accent, continue dialogue, change ton of text</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>30 request per month</p> 
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      AI Image Generations</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Draw Scenes and Characters</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>5 request per month</p>     
<p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
      <RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/> 
      Screenplay Title <p style={{marginLeft:"20px"}}>Generations</p></p>
      <p className='text-white' style={{marginBottom:"0px",opacity:"0.7",fontWeight:"500px"}}>
      <RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Script Smart</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",opacity:"0.7",fontSize:"13px",color:"#E6C6A0"}}>
Automatically format text into a screenplay format</p>

<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px",opacity:"0.7"}}>
<RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
     Create Scene</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",opacity:"0.7",color:"#E6C6A0"}}>
Import your scene's beat sheet and let Nolan generate the initial draft of your scene.</p>

<p className='text-white' style={{marginBottom:"0px",opacity:"0.7",fontWeight:"500px"}}>
<RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Break Smart</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",opacity:"0.7",fontSize:"13px",color:"#E6C6A0"}}>
Screenplay Breakdown</p>

<p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
<RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Writers Room</p>
      <p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
      <RxCross2 className='text-white m-0' style={{opacity:"0.7"}}/>
      Plot Hole Detection</p>


    <div className='d-flex justify-content-center'>
      <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px"}}>Subscribe</button>
      </div>
      </div>
      </div>
      <div className='col-12 col-md-3' >
      <div className='pricing-cards' style={{opacity:"0.5"}}>
       
  
        <span className='text-white' style={{fontSize:"24px",fontWeight:"bold"}}>Pro</span><hr style={{border:"1px solid white",width:"100%"}}/>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>Experience the ultimate power and versatility of our pro plan,
Gain access to advanced features,priority support</p>
<h1 className='text-center' style={{color:'#E6D0B8'}}>$0</h1>
<div className='d-flex justify-content-center'>
      <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px",marginBottom:"10px"}}>Subscribe</button>
      </div>
      <p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
Unlimited Screenplays</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",color:"#E6C6A0"}}>
    Create as many screenplays as you want without limitation</p>
    <p className='text-white' style={{marginBottom:"15px",fontWeight:"500px",marginLeft:"5px"}}>
      <TiTick className='text-success m-0' /> 
      Automatic Cloud sync and Backup</p>
      <p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      History</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Access previous versions of your scripts</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>Last 3 days</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      PDF and Final Draft export</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",color:"#E6C6A0"}}>
Watermarked</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      Brainstorming</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Brainstorm with Nolan: Ask Questions on Screenplay Writing.</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>100 request per month</p>
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
     Co Pilot/AI requests</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Ask AI change accent, continue dialogue, change ton of text</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>30 request per month</p> 
<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      AI Image Generations</p>
<p  style={{marginLeft:"13px",marginBottom:"0px",fontSize:"13px",color:"#E6C6A0"}}>
Draw Scenes and Characters</p>
<p style={{color:"#E2871E",marginLeft:"13px",fontSize:"12px",fontWeight:"bolder",marginBottom:"15px"}}>5 request per month</p>     
<p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
<TiTick className='text-success m-0' /> 
      Screenplay Title <p style={{marginLeft:"20px"}}>Generations</p></p>
      <p className='text-white' style={{marginBottom:"0px",opacity:"0.7",fontWeight:"500px"}}>
      <TiTick className='text-success m-0' /> 
      Script Smart</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",opacity:"0.7",fontSize:"13px",color:"#E6C6A0"}}>
Automatically format text into a screenplay format</p>

<p className='text-white' style={{marginBottom:"0px",fontWeight:"500px",opacity:"0.7"}}>
<TiTick className='text-success m-0' /> 
     Create Scene</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",fontSize:"13px",opacity:"0.7",color:"#E6C6A0"}}>
Import your scene's beat sheet and let Nolan generate the initial draft of your scene.</p>

<p className='text-white' style={{marginBottom:"0px",opacity:"0.7",fontWeight:"500px"}}>
<TiTick className='text-success m-0' /> 
      Break Smart</p>
<p  style={{marginLeft:"13px",marginBottom:"15px",opacity:"0.7",fontSize:"13px",color:"#E6C6A0"}}>
Screenplay Breakdown</p>

<p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
<TiTick className='text-success m-0' /> 
      Writers Room</p>
      <p className='text-white' style={{marginBottom:"15px",opacity:"0.7",fontWeight:"500px",marginLeft:"5px"}}>
      <TiTick className='text-success m-0' /> 
      Plot Hole Detection</p>


    <div className='d-flex justify-content-center'>
      <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px"}}>Subscribe</button>
      </div>
      <h4 className='text-white text-center' style={{fontWeight:"bold"}}>Coming Soon</h4>
      </div>
      </div>
      <div className='col-12 col-md-3' >
      <div className='pricing-cards'>
       
  
       <span className='text-white' style={{fontSize:"24px",fontWeight:"bold"}}>Enterprise</span><hr style={{border:"1px solid white",width:"100%"}}/>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>All features unlimited in Pro plan and custom solutions</p>




   <div className='d-flex justify-content-center'>
     <button style={{backgroundColor:"white",padding:"5px 15px",border:"none",borderRadius:"9px"}}>Contact Us</button>
     </div>
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
<div className='wallpaper3'></div>
  </div>
 
  )
}

export default Pricing
