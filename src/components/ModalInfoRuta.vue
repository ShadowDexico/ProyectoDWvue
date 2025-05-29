<template>
  <div class="modal-backdrop" v-if="show" @click.self="cerrarModal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>{{ rutaInfo.texto }}</h2>
        <button class="close-button" @click="cerrarModal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="descripcion">
          <p>{{ rutaInfo.descripcion }}</p>
        </div>
        <div class="imagen">
          <img :src="rutaInfo.imagen" :alt="rutaInfo.texto" />
        </div>
        <button class="lol" @click="irARutas">Todas las rutas</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    rutaId: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      rutaInfo: {
        texto: "",
        descripcion: "",
        imagen: "",
      },
      cargando: false,
      error: null,
    };
  },
  watch: {
    show(newVal) {
      if (newVal && this.rutaId) {
        this.cargarInfoRuta();
      }
    },
    rutaId(newVal) {
      if (this.show && newVal) {
        this.cargarInfoRuta();
      }
    },
  },
  methods: {
    async cargarInfoRuta() {
      if (!this.rutaId) return;

      this.cargando = true;
      this.error = null;

      try {
        const response = await axios.get(
          `http://localhost:8081/api/rutas/${this.rutaId}`
        );
        this.rutaInfo = response.data;
      } catch (error) {
        console.error("Error al cargar la información de la ruta:", error);
        this.error = "No se pudo cargar la información de la ruta";
      } finally {
        this.cargando = false;
      }
    },
    cerrarModal() {
      this.$emit("cerrar");
    },
    irARutas() {
      this.$emit("cerrar");
      this.$router.push("/info");
    },
  },
};
</script>
<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  /* Use viewport width */
  height: 100vh;
  /* Use viewport height */
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 10px;
  /* Add some padding for very small screens */
  box-sizing: border-box;
  /* Include padding in dimensions */
}

.modal-content {
  background-color: #1e1e1e;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  max-height: 95vh;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  color: white;
  animation: modalFadeIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #333;
  flex-shrink: 0;
}

.modal-header h2 {
  margin: 0;
  color: #f1f1f1;
  font-size: 1.5em;
}

.close-button {
  background: none;
  border: none;
  font-size: 28px;
  color: #f1f1f1;
  cursor: pointer;
  transition: color 0.3s;
  padding: 5px;
}

.close-button:hover {
  color: #ff5555;
}

.modal-body {
  padding: 20px;
  flex-grow: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loading-message,
.error-message {
  text-align: center;
  padding: 20px;
  font-size: 1.1em;
  color: #ccc;
}

.error-message {
  color: #ff5555;
}

.descripcion {
  margin-bottom: 20px;
  line-height: 1.6;
  white-space: pre-line;
  text-align: justify;
  max-width: 100%;
}

.descripcion p {
  margin: 0;
  font-size: 0.95em;
}

.imagen {
  text-align: center;
  margin-bottom: 20px;
  width: 100%;
}

.imagen img {
  max-width: 100%;
  height: auto;
  width: auto;
  max-height: 40vh;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  object-fit: contain;
}

.lol {
  display: block;
  width: 90%;
  max-width: 300px;
  padding: 12px;
  font-size: 1.1em;
  font-weight: bold;
  text-align: center;
  background: #007bff;
  color: black;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  margin-top: auto;
  margin-left: auto;
  margin-right: auto;
}

.lol:hover {
  background: #16b6bf;
  transform: scale(1.03);
}

@media (max-width: 768px) {
  .modal-content {
    width: 95%;
    max-height: 90vh;
  }

  .modal-header h2 {
    font-size: 1.4em;
  }

  .close-button {
    font-size: 26px;
  }

  .modal-body {
    padding: 15px;
  }

  .descripcion p {
    font-size: 0.9em;
  }

  .imagen img {
    max-height: 35vh;
  }

  .lol {
    padding: 10px;
    font-size: 1em;
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .modal-backdrop {
    padding: 5px;
  }

  .modal-content {
    width: 98%;
    max-height: 98vh;
    margin: 5px;
  }

  .modal-header {
    padding: 10px 15px;
  }

  .modal-header h2 {
    font-size: 1.2em;
  }

  .close-button {
    font-size: 24px;
    padding: 3px;
  }

  .modal-body {
    padding: 10px;
  }

  .descripcion {
    margin-bottom: 15px;
  }

  .descripcion p {
    font-size: 0.85em;
  }

  .imagen {
    margin-bottom: 15px;
  }

  .imagen img {
    max-height: 30vh;

  }

  .lol {
    padding: 8px;
    font-size: 0.9em;
    max-width: 250px;
    width: 100%;
  }
}
</style>
