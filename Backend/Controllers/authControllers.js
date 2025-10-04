const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const { readDB, writeDB } = require('../Util/db');
require('dotenv').config();


//Configuration de Nodmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.GENERATE_PASS
  }
});

// Configuration de la âge d'inscription
const register = async(req,res) =>{
    const { email , password } =req.body
      if (!email || !password) return res.status(400).json({ message: 'Champs manquants' });

      const Controllerdb = readDB()

      //Faire un find sur notre json

       const userExistant = Controllerdb.users.find(u => u.email === email);
  if (userExistant) return res.status(400).json({ message: 'Email déjà utilisé' });


  const hashedPassword = await bcrypt.hash(password, 10)
  Controllerdb.users.push({email, password : hashedPassword});
  writeDB(Controllerdb);


//Configurationd'envoi de mail
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Inscription réussie',
    text: `Bonjour ${email}, votre inscription a été validée !`
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log('Email envoyé : ' + info.response);
  });

  res.status(201).json({ message: 'Utilisateur créé avec succès' });
};

//COnfiguration de la co
const login = async (req,res) =>{
    const { email, password }=req.body

    const Controllerdb = readDB()
    const user = Controllerdb.users.find(u => u.email === email)
    if (!user) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    
    const token = jwt.sign({email : user.email}, process.env.SECRET, { expiresIn: '1h' })

    res.json({token})
}

module.exports = { register, login };

