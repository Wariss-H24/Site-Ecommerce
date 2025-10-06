<template>
  <div class="verify-container">
    <h2 class="title">Vérification du compte</h2>

    <form @submit.prevent="handleVerify" class="verify-form">
      <label>Email</label>
      <input
        v-model="email"
        type="email"
        placeholder="Entrez votre email"
        required
      />

      <label>Code OTP</label>
      <input
        v-model="otp"
        type="text"
        placeholder="Entrez le code reçu par mail"
        maxlength="6"
        required
      />

      <button type="submit" class="btn">Vérifier</button>
    </form>

    <p v-if="message" class="message">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter,useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const email = ref(route.query.email || "");
const otp = ref("");
const message = ref("");

const handleVerify = async () => {
  try {
    const resp = await fetch("http://localhost:4000/api/auth/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        otp: otp.value,
      }),
    });

    const data = await resp.json();

    // if (!res.ok) {
    //   message.value = data.message || "Erreur de vérification.";
    //   return;
    // }

    // message.value = "✅ Vérification réussie ! Vous pouvez maintenant vous connecter.";
    // setTimeout(() => {
    //   router.push("/login");
    // }, 2000);
    
  if (resp.ok) {
    alert('Votre compte a été vérifié avec succès 🎉');
    router.push('/signUp');
  } else {
    alert(data.message);
  }
  } catch (error) {
    message.value = "Erreur de connexion au serveur.";
    console.error(error);
  }
};
</script>

<style scoped>
.verify-container {
  max-width: 400px;
  margin: 50px auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
}
.title {
  text-align: center;
  margin-bottom: 1rem;
}
.verify-form {
  display: flex;
  flex-direction: column;
}
.verify-form label {
  margin: 5px 0;
}
.verify-form input {
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 6px;
}
.btn {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;
}
.btn:hover {
  background-color: #2980b9;
}
.message {
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
  color: green;
}
</style>
