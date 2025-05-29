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
.contact-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;

  min-height: 90vh;

  background: #121212;
  padding: 40px 20px;

  box-sizing: border-box;

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
  box-sizing: border-box;
  /* Include padding in width */
}

.contact-card h2 {
  margin-bottom: 25px;
  font-size: 2em;

  color: #00bcd4;
}

.form input,
.form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 14px;
  border-radius: 8px;
  border: none;
  background: #2c2c2c;
  color: white;
  font-size: 1em;
  box-sizing: border-box;
}

.form textarea {
  height: 120px;
  resize: vertical;
}

.form button {
  margin-top: 20px;

  padding: 14px;

  width: 100%;
  background-color: #00bcd4;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.1em;

}

.form button:hover {
  background-color: #0097a7;
}

.social-media {
  margin-top: 40px;

}

.social-media p {
  font-size: 1.1em;

  margin-bottom: 15px;
}

.social-media .icons {
  display: flex;
  justify-content: center;
  gap: 25px;

  margin-top: 10px;
}

.social-media i {
  font-size: 28px;
  color: white;
  transition: 0.3s;
}

.social-media a:hover i {
  color: #00bcd4;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 30px 15px;
  }

  .contact-card {
    padding: 25px 30px;
    max-width: 450px;
  }

  .contact-card h2 {
    font-size: 1.8em;
  }

  .form input,
  .form textarea {
    padding: 12px;
    font-size: 0.95em;
  }

  .form textarea {
    height: 100px;
  }

  .form button {
    padding: 12px;
    font-size: 1em;
  }

  .social-media p {
    font-size: 1em;
  }

  .social-media .icons {
    gap: 20px;
  }

  .social-media i {
    font-size: 26px;
  }
}

@media (max-width: 480px) {
  .contact-container {
    padding: 20px 10px;
    min-height: 80vh;
  }

  .contact-card {
    padding: 20px 20px;
    width: 95%;
  }

  .contact-card h2 {
    font-size: 1.6em;
    margin-bottom: 20px;
  }

  .form input,
  .form textarea {
    padding: 10px;
    font-size: 0.9em;
    margin: 8px 0;
  }

  .form textarea {
    height: 80px;
  }

  .form button {
    padding: 10px;
    font-size: 0.95em;
    margin-top: 15px;
  }

  .social-media {
    margin-top: 30px;
  }

  .social-media p {
    font-size: 0.95em;
    margin-bottom: 10px;
  }

  .social-media .icons {
    gap: 15px;
  }

  .social-media i {
    font-size: 24px;
  }
}
</style>