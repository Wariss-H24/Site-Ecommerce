const { sendMail } = require("../Services/mailService");

async function registerUser(req, res) {
  const { email, name } = req.body;

  // ... logique d'inscription (sauvegarder user en BDD etc.)

  // Envoi du mail
  try {
    await sendMail(email, "Bienvenue 🎉", `Salut ${name}, bienvenue sur notre site !`);
    res.status(201).json({ message: "Utilisateur inscrit et mail envoyé ✅" });
  } catch (err) {
    console.error("Erreur mail:", err);
    res.status(500).json({ error: "Utilisateur créé mais erreur lors de l’envoi du mail ❌" });
  }
}

module.exports = { registerUser };
