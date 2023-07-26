
import logo from "../assests/logo.webp";
import hero from "../assests/hero_1.webp"
import intro from "../assests/intro.webp"
import Header from "./Header";
import { GiArtificialHive } from 'react-icons/gi';
import {AiOutlineInstagram}  from 'react-icons/ai';
import {AiFillTwitterCircle}  from 'react-icons/ai';
import {AiOutlineYoutube} from 'react-icons/ai';
function Home() {
  const googledata = JSON.parse(localStorage.getItem("googledata"))
  const nolanuserdata = JSON.parse(localStorage.getItem("nolanuserdata"))
  console.log(googledata)
  console.log(nolanuserdata)
  return (
    <div >

    <div className='wallpaper'>
  
    <Header />

      <div style={{ marginLeft: '50px' }}  >
        <img src={logo} className='logo' />
        <h1 className='text-white'>Free Script Writing Software</h1>
        <p className='text-white' style={{ fontSize: "30px" }}>Unleash creativity with AI Copilot - craft<br /> compelling screenplays</p>
        <button className='bg-danger  border-0 text-white' style={{ borderRadius: "10px", padding: '18px 35px', fontWeight: "bold", marginRight: "20px" }}>Start Writing</button>
        {!googledata || !nolanuserdata &&
        <button style={{ borderRadius: "10px", fontWeight: "bold", background: "none", border: '1px solid white', padding: '18px 35px', color: "white" }}>Log In</button>}
      </div>
   
   
 <div className='container-fluid '>
  <div className='row'>

      <div style={{marginTop:"60px",border:'none',width:"295px",padding:"40px",backgroundColor:"black",borderRadius:"20px",marginLeft:'20px'}}>
        <GiArtificialHive style={{fontSize:"30px",fontWeight:"bold",color:"gray",marginTop:"-15px",marginRight:"20px"}}/>
        
        <span className='text-white' style={{fontSize:"30px",fontWeight:"bold"}}>
        AI-Copilot</span>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>Enhance your screenwriting experience with GPT-powered 
editing features and AI-generated imagery</p>
      </div>
      <div style={{marginTop:"60px",border:'none',width:"295px",padding:"40px",backgroundColor:"black",borderRadius:"20px",marginLeft:"20px"}}>
        <GiArtificialHive style={{fontSize:"30px",fontWeight:"bold",color:"gray",marginTop:"-15px",marginRight:"20px"}}/>
        
        <span className='text-white' style={{fontSize:"30px",fontWeight:"bold"}}>
        AI-Copilot</span>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>Enhance your screenwriting experience with GPT-powered 
editing features and AI-generated imagery</p>
      </div>
      <div style={{marginTop:"60px",border:'none',width:"295px",padding:"40px",backgroundColor:"black",borderRadius:"20px",marginLeft:"20px"}}>
        <GiArtificialHive style={{fontSize:"30px",fontWeight:"bold",color:"gray",marginTop:"-15px",marginRight:"20px"}}/>
        
        <span className='text-white' style={{fontSize:"30px",fontWeight:"bold"}}>
        AI-Copilot</span>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"20px"}}>Enhance your screenwriting experience with GPT-powered 
editing features and AI-generated imagery</p>
      </div>
      <div style={{marginTop:"60px",border:'none',width:"295px",padding:"40px",backgroundColor:"black",borderRadius:"20px",marginLeft:'20px'}}>
        <GiArtificialHive style={{fontSize:"30px",fontWeight:"bold",color:"gray",marginTop:"-15px",marginRight:"20px"}}/>
       
        <span className='text-white' style={{fontSize:"30px",fontWeight:"bold"}}>
        AI-Copilot</span>
<p className='text-white' style={{wordBreak:"break-word",marginLeft:"18px"}}>Enhance your screenwriting experience with GPT-powered 
editing features and AI-generated imagery</p>
      </div>
      </div>
</div>

<div className='background-color'> 
   <div className='container'>
 
    <div className='row'>
      <div className='col-md-6 col-12'>
<h4 className='text-white' style={{marginTop:"50px"}}>What is Nolan?</h4>
<h1 className='text-white' style={{fontWeight:"bold"}}>Lights,camera,Action</h1>
<p className='text-white' sstyle={{wordBreak:"break-word"}}>NolanAI is the ultimate tool for any screenwriter looking to improve their 
craft. With its AI-powered features and user-friendly interface, it can help
 you bring your stories to life in the most efficient and effective way possible, while respecting your unique creative voice.</p>
 <div className='d-flex justify-content-center'>
 <button className='bg-danger text-white' style={{fontWeight:"bold",padding:"20px 25px",border:"none",borderRadius:"15px"}}>Explore Our Premium Plan</button>
 </div>
 </div>
    <div className='text-white col-md-6 col-12' style={{marginTop:"50px"}}>
  <video width="500" height="300" controls autoplay muted>
    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

    </div>
   </div>
      </div> 
      {/* more than mobile devices */}
      <div className ='d-none d-xl-block'>
      <div className='background-color1'> 
   <div className='container' >
 
    <div className='row'>
      <div className='col-md-6 col-12'>
<img src={intro} style={{height:"350px",width:"450px",marginTop:"130px"}}/>
 </div>
    <div className='text-white col-md-6 col-12' >
<p style={{marginTop:"70px",fontSize:"40px",fontWeight:"lighter"}}>Features</p>
<h2>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h2>
<p style={{marginTop:"30px"}}>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, 
  revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>
</div>

    </div>
   </div>
      </div> 
      <div className='background-color1'> 
   <div className='container' >
 
    <div className='row'>
   
<div className='text-white col-md-6 col-12' >

<h2 style={{marginTop:"130px"}}>TRACK EVERY EDIT WITH EASE</h2>
<p style={{marginTop:"30px"}}>A per-row script history list is a feature in scriptwriting software that 
allows writers to track changes made to their scripts on a row-by-row basis. With this feature, writers can see a 
complete history of edits made to each line of dialogue, stage direction, or action in their script. This makes it
 easy to compare different versions of a script and to identify where changes have been made. The per-row script 
 history list is an essential tool for writers 
who want to keep track of their progress and ensure that their scripts are always up-to-date.</p>
</div>
<div className='col-md-6 col-12'>
<img src={intro} style={{height:"350px",width:"450px",marginTop:"130px"}}/>
 </div>
   

    </div>
   </div>
      </div> 
      <div className='background-color1'> 
   <div className='container' >
 
    <div className='row'>
      <div className='col-md-6 col-12'>
<img src={intro} style={{height:"350px",width:"450px",marginTop:"130px"}}/>
 </div>
    <div className='text-white col-md-6 col-12' >

<h2 style={{marginTop:"130px"}}>ASK NOLAN FOR SUGGESTION</h2>
<p style={{marginTop:"30px"}}>To help you create high-quality story, Nolan offers a powerful editing feature. With "Ask Nolan",
 you can easily enhance the quality of your text by highlighting the selected text, correcting any spelling and grammar errors, 
 and adjusting the tone of the paragraph as necessary. 
This feature provides you with the flexibility to customize your text and make it more engaging and effective.</p>
</div>

    </div>
   </div>
      </div> 
      <div className='background-color1'> 
   <div className='container' >
 
    <div className='row'>
   
<div className='text-white col-md-6 col-12' >

<h2 style={{marginTop:"130px"}}>CHANGE YOUR CHARACTER ACCENT</h2>
<p style={{marginTop:"30px"}}>Personalize your character and make it truly unique. 
"Change Accent" allows you to change your character's accent, making it sound more distinct and authentic. 
Whether you want to add a touch of personality to your character or create a character that stands out, this 
feature provides you with the flexibility to customize your character's accent to match 
your preferences. With this feature, you can create a character that truly represents you and brings your story to life.</p>
</div>
<div className='col-md-6 col-12'>
<img src={intro} style={{height:"350px",width:"450px",marginTop:"130px"}}/>
 </div>
   

    </div>
   </div>
      </div>  
      <div className='background-color1'> 
   <div className='container' >
 
    <div className='row'>
      <div className='col-md-6 col-12'>
<img src={intro} style={{height:"350px",width:"450px",marginTop:"130px"}}/>
 </div>
    <div className='text-white col-md-6 col-12' >

<h2 style={{marginTop:"130px"}}>SCRIPT SMART</h2>
<p style={{marginTop:"30px"}}>Script Smart uses advanced algorithms to automatically 
format your text into a screenplay format. With Script Smart, you can save time and focus on writing by letting
 the software handle the formatting for you. This feature also provides suggestions and corrections to help ensure 
that your screenplay adheres to industry standards and is formatted correctly.</p>
</div>

    </div>
   </div>
      </div> 
      </div>
{/* mobile devices */}
<div className ='d-xl-none d-md-block'>
 <div className='background-color1'>
  <div style={{display:"flex",justifyContent:"center"}}>
<img src={intro} style={{height:"350px",width:"90%",marginTop:"130px"}}/>
</div>
    <div className='text-white text-center' style={{marginTop:"20px"}}>

<h2>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h2>
<p style={{marginTop:"30px"}}>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, 
  revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>
</div>



  <div style={{display:"flex",justifyContent:"center"}}>
<img src={intro} style={{height:"350px",width:"90%",marginTop:"130px"}}/>
</div>
    <div className='text-white text-center' style={{marginTop:"20px"}}>

<h2>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h2>
<p style={{marginTop:"30px"}}>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, 
  revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>
</div>

 
  <div style={{display:"flex",justifyContent:"center"}}>
<img src={intro} style={{height:"350px",width:"90%",marginTop:"130px"}}/>
</div>
    <div className='text-white text-center' style={{marginTop:"20px"}}>

<h2>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h2>
<p style={{marginTop:"30px"}}>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, 
  revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>

</div>

  <div style={{display:"flex",justifyContent:"center"}}>
<img src={intro} style={{height:"350px",width:"90%",marginTop:"130px"}}/>
</div>
    <div className='text-white text-center' style={{marginTop:"20px"}}>

<h2>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h2>
<p style={{marginTop:"30px"}}>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, 
  revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>
</div>

 
  <div style={{display:"flex",justifyContent:"center"}}>
<img src={intro} style={{height:"350px",width:"90%",marginTop:"130px"}}/>
</div>
    <div className='text-white text-center' style={{marginTop:"20px"}}>

<h2>THE INDUSTRY STANDARD SCRIPT WRITING SOFTWARE</h2>
<p style={{marginTop:"30px"}}>Nolan provides a user-friendly interface, advanced formatting options, and helpful features such as character and scene breakdowns, 
  revision tracking, and collaboration tools. With its powerful tools and intuitive design.</p>

</div>
</div>
</div>
 <div className='background-color2'>
       <div className='footer'>
        <p className='text-white'> © Nolan 2023 
<p style={{marginTop:"0px",opacity:"0.5"}}>Privacy Policy|Terms of Service</p>
</p>
<div>
<p className='text-white'> Follow us:
<AiOutlineInstagram style={{color:"white",marginLeft:"15px"}}/>
<AiFillTwitterCircle style={{color:"white",marginLeft:"5px"}}/>
<AiOutlineYoutube style={{color:"white",marginLeft:"5px"}}/></p>
</div>
<p className='text-white'> hello@nolanai.app</p>

</div>      
</div>
</div> 
<div class="wallpaper2"></div>     

      </div>   
   
  );
}

export default Home;