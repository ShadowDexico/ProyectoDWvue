<template>
  <div class="contact-container">
    <div class="contact-card">
      <h2>Contáctanos</h2>
      <form @submit.prevent="enviarFormulario" class="form">
        <input type="text" placeholder="Nombre" v-model="form.nombre" required />
        <input type="email" placeholder="Correo" v-model="form.correo" required />
        <textarea placeholder="Mensaje" v-model="form.mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>

      <div class="social-media">
        <p>Síguenos en redes:</p>
        <div class="icons">
          <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: { nombre: "", correo: "", mensaje: "" },
    };
  },
  methods: {
    enviarFormulario() {
      alert("Mensaje enviado correctamente.");
      this.form = { nombre: "", correo: "", mensaje: "" };
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css");

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background: #121212;
  padding: 20px;
}

.contact-card {
  background: #1e1e1e;
  border-radius: 20px;
  padding: 30px 40px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
  color: white;
}

.contact-card h2 {
  margin-bottom: 20px;
  font-size: 28px;
  color: #00bcd4;
}

.form input,
.form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border-radius: 8px;
  border: none;
  background: #2c2c2c;
  color: white;
  font-size: 14px;
}

.form textarea {
  height: 100px;
  resize: none;
}

.form button {
  margin-top: 15px;
  padding: 12px;
  width: 100%;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.form button:hover {
  background-color: #0097a7;
}

.social-media {
  margin-top: 30px;
}

.social-media .icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.social-media i {
  font-size: 24px;
  color: white;
  transition: 0.3s;
}

.social-media a:hover i {
  color: #00bcd4;
}
</style>
