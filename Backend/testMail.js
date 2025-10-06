const nodemailer = require('nodemailer');
require('dotenv').config();

// ⚡ Config de Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,         // ton email Gmail
    pass: process.env.GENERATE_PASS  // mot de passe d'application Gmail
  }
});

// ⚡ Contenu du mail
const mailOptions = {
  from: process.env.EMAIL,               // expéditeur
  to: 'badawariss434@gmail.com', // ton email pour tester
  subject: 'Test Nodemailer 🚀',
  text: 'Si tu reçois ceci, Nodemailer fonctionne parfaitement !'
};

// ⚡ Envoi du mail
transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log("Erreur lors de l'envoi :", err);
  } else {
    console.log("Email envoyé avec succès :", info.response);
  }
});
