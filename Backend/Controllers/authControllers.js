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


  
  //  Générer un code OTP à 6 chiffres
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // expire dans 5 min
  
  const hashedPassword = await bcrypt.hash(password, 10)
  Controllerdb.users.push({
    email, 
    password: hashedPassword,
    isVerified: false,
    otp,
    otpExpires
  });
  writeDB(Controllerdb);


//Configurationd'envoi de mail
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Vérification de votre compte',
    text: `Bonjour ${email},\n\nVoici votre code de vérification : ${otp}\nCe code expire dans 5 minutes.\n\nMerci !`
  };
  console.log("Envoi de l'email à :", email, "avec OTP :", otp);
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) console.log(err);
    else console.log('Email envoyé : ' + info.response);
  });

  res.status(201).json({ message: 'Utilisateur créé avec succès' });
};


// ROUTE POUR VÉRIFIER LE CODE OTP
const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;
  const Controllerdb = readDB();
  const user = Controllerdb.users.find(u => u.email === email);

  if (!user) return res.status(400).json({ message: 'Utilisateur introuvable' });
  if (user.isVerified) return res.status(400).json({ message: 'Compte déjà vérifié' });

  if (user.otp !== otp) return res.status(400).json({ message: 'Code invalide' });
  if (new Date() > new Date(user.otpExpires)) return res.status(400).json({ message: 'Code expiré' });

  // Marquer l’utilisateur comme vérifié
  user.isVerified = true;
  delete user.otp;
  delete user.otpExpires;
  writeDB(Controllerdb);

  res.json({ message: 'Compte vérifié avec succès. Vous pouvez maintenant vous connecter.' });
};

//COnfiguration de la co
const login = async (req,res) =>{
    const { email, password }=req.body

    const Controllerdb = readDB()
    const user = Controllerdb.users.find(u => u.email === email)
    if (!user) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    

 if (!user.isVerified)
    return res.status(400).json({ message: 'Veuillez vérifier votre compte avant de vous connecter.' });

    const token = jwt.sign({email : user.email}, process.env.SECRET, { expiresIn: '1h' })

    res.json({token})
}

module.exports = { register,verifyOTP, login };

