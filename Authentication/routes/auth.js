const router = require('express').Router();
const User = require('../model/User');
const { registerValidation, loginValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res) =>{
    //Validate data before making a user
    const { error } = registerValidation(req.body);
    if(error){
       return res.status(400).send(error.details[0].message);
    }

    //Check if the user is already in the DB
    const emailExists = await User.findOne({email: req.body.email});
    if(emailExists){
        return res.status(400).send('Email already exists');
    }

    //Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const savedUser = await user.save();
        res.send(savedUser);
        //res.send({user: user._id}); -> return only the user ID, instead of all the info, even tho the password is hashed, would be even more secure to not even show it
    }catch(err){
        res.status(400).send(err);
    }
});

//LOGIN
router.post('/login', async (req,res) => {
    //Validate data before making a user
    const { error } = loginValidation(req.body);
    if(error){
       return res.status(400).send(error.details[0].message);
    }   
    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).send('Email is not found.');
    }
    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass){
        return res.status(400).send('Invalid password.');
    }
    
    //Create a assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;