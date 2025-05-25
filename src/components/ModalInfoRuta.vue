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
        <RouterLink to="/rutas/info" class="lol">Todas las rutas</RouterLink>
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
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #1e1e1e;
  border-radius: 8px;
  width: 80%;
  max-width: 800px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
  color: white;
  animation: modalFadeIn 0.3s ease-out;
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
}

.modal-header h2 {
  margin: 0;
  color: #f1f1f1;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  color: #f1f1f1;
  cursor: pointer;
  transition: color 0.3s;
}

.close-button:hover {
  color: #ff5555;
}

.modal-body {
  padding: 20px;
}

.descripcion {
  margin-bottom: 20px;
  line-height: 1.6;
  white-space: pre-line;
}

.imagen {
  text-align: center;
}

.imagen img {
  max-width: 100%;
  width: 450px;
  height: 450px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
