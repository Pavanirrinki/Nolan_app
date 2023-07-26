const express = require('express');
const {OAuth2Client} = require('google-auth-library');
const cors = require('cors');
const User = require("../models/Usermodel")
const router = express.Router();
const multer = require("multer")
const Script = require("../models/Scriptmodel")
router.use(cors());
router.use(express.json());

const oAuth2Client = new OAuth2Client(
  "1005354199254-j6mrg9mngeshgrtet6ihpkffaqnv2qso.apps.googleusercontent.com",
  "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",
  'postmessage',
);


router.post('/auth/google', async (req, res) => {
  const { tokens } = await oAuth2Client.getToken(req.body.code); // exchange code for tokens
  const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokens.access_token}`);
    const data = await response.json();
  res.status(200).json(data)
});

// router.post('/auth/google/refresh-token', async (req, res) => {
//   const user = new UserRefreshClient(
//     clientId,
//     clientSecret,
//     req.body.refreshToken,
//   );
//   const { credentials } = await user.refreshAccessToken(); // optain new tokens
//   res.json(credentials);
// })


router.post('/signup',async(req,res)=>{
    const {email,password} = req.body;
    try{
     const existingemail = await User.findOne({email:email})
     if (existingemail == null){
        const user = new User({
            email,
            password
        })
        user.save()
      
        res.status(200).json(user)
    }else{
        res.status(200).json(existingemail)
    }
        
    }catch(error){
        res.status(500).json(error.message)
    }
})


const ds=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,"uploads/")
  },
  filename:(req,file,cb)=>{

      cb(null,Date.now()+file.originalname)

  }
});


const upload =multer({
  storage:ds
});


router.post("/post_script", upload.single('file'), async(req,res)=>{
  console.log(req.body)
 
  const {Title,plot,screenplaytitle,Genere,File} = req.body;
  try{
      const script = new Script({Title,plot,screenplaytitle,Genere,File})
      script.save()
      res.status(200).json("Blog Successfully created")
  }catch(error){
    res.status(500).json(error.message)
  }
})




module.exports = router;