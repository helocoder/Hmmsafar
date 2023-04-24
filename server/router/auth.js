const express = require('express');
const router = express.Router();
require('../db/conn')
const User = require("../db/models/userSchema")

router.get('/about',(req,res)=>{
    res.send("Hello world from auth server");
})



// router.post('/userinfo', async(req, res) => {
//     //     const from = req.body.from
//     //     const to = req.body.to
//     // const date = req.body.date

//     // from = "patna"
//     // to="rajgir"
//     // date="10-03-2024"



//     const { from, to, date} = req.body;
//     if(!from || !to || !date)
//     {
//         return res.status(422).json({error:"Please Fill the field properly"})
//     }

//     //check if From,to,date exist in database matched exist or not//
//     User.findOne({from:from , to:to ,date:date}).then((userExist)=>{
//           if(userExist)
//           {
//             return res.status(422).json({error:"same from found in database"})
//           }

//           //user is created
//           const user = new User({from,to,date});

//           user.save().then(()=>{
//             res.status(201).json({message:"user data saved sucessfully"});
//           }).catch((err)=> res.status(500).json({error:"failed to register"}))
//     }).catch(err => {console.log(err);})

    
//         const formData = new User({
//           boarding:from,
//           dest:to,
//           day:date
//         })
    
//         try {
//             await formData.save();
//             res.send("inserted data..")
//         } catch(err) {
//             console.log(err)
//         }
//   });





module.exports = router;