  <template>
    <div class="rutas-disponibles" v-if="rutaInfo">
      <h3>Información de la Ruta:</h3>
      <div v-if="rutaInfo.mensaje" class="mensaje">
        {{ rutaInfo.mensaje }}
      </div>
      <div v-else-if="Array.isArray(rutaInfo)" class="info-ruta">
        <div v-for="(ruta, index) in rutaInfo" :key="index" class="ruta-item">
          <h4>Ruta {{ ruta.ruta }}</h4>
          <ul>
            <li>
              <strong>{{ formatearClave('horaInicio') }}:</strong> {{ ruta.horaInicio }}
            </li>
            <li>
              <strong>{{ formatearClave('horaFin') }}:</strong> {{ ruta.horaFin }}
            </li>
            <li>
              <strong>{{ formatearClave('frecuencia') }}:</strong> {{ ruta.frecuencia }} minutos
            </li>
          </ul>
          <button @click="abrirModal(ruta.idRuta)" class="lol">Más Información</button>
        </div>
      </div>
      <div v-else class="info-ruta">
        <ul>
          <li v-for="(valor, clave) in rutaInfo" :key="clave">
            <strong>{{ formatearClave(clave) }}:</strong> {{ valor }}
          </li>
        </ul>
        <button @click="abrirModal(rutaInfo.idRuta)" class="lol">Más Información</button>
      </div>

      <ModalInfoRuta :show="mostrarModal" :rutaId="rutaIdSeleccionada" @cerrar="cerrarModal" />
    </div>
  </template>

<script>
import ModalInfoRuta from './ModalInfoRuta.vue';

export default {
  components: {
    ModalInfoRuta
  },
  props: {
    rutaInfo: [Object, Array],
    clave: String,
  },
  data() {
    return {
      mostrarModal: false,
      rutaIdSeleccionada: null
    };
  },
  computed: {
    claveFormateada() {
      if (!this.clave) return '';
      return this.formatearClave(this.clave);
    }
  },
  methods: {
    formatearClave(clave) {
      if (typeof clave !== 'string') {
        return String(clave);
      }
      return clave
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
    },
    abrirModal(rutaId) {
      if (rutaId) {
        this.rutaIdSeleccionada = rutaId;
        this.mostrarModal = true;
        document.body.style.overflow = "hidden";
      } else {
        console.warn('No se proporcionó un ID de ruta válido');
      }
    },
    cerrarModal() {
      this.mostrarModal = false;
      document.body.style.overflow = "auto";
    },
  },
};
</script>

<style scoped>
.rutas-disponibles {
  margin-top: 20px;
  padding: 10px;
  background: #2a2a2a;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

.ruta-item {
  margin-bottom: 20px;
  padding: 10px;
  background: #3a3a3a;
  border-radius: 5px;
  box-sizing: border-box;
}

.ruta-item h4 {
  margin-top: 0;
  color: #f0f0f0;
  border-bottom: 1px solid #555;
  padding-bottom: 5px;
  font-size: 1.1em;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 5px 0;
  font-size: 0.95em;
}

.lol {
  display: inline-block;
  padding: 8px 15px;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 10px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-sizing: border-box;
}

.lol:hover {
  background-color: #151010;
  transform: scale(1.05);
}

.mensaje {
  padding: 10px;
  background-color: #3a3a3a;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 0.95em;
}

@media (max-width: 768px) {
  .rutas-disponibles {
    padding: 8px;
    margin-top: 15px;
  }

  .ruta-item {
    padding: 8px;
    margin-bottom: 15px;
  }

  .ruta-item h4 {
    font-size: 1em;
  }

  li {
    font-size: 0.9em;
  }

  .lol {
    padding: 7px 12px;
    font-size: 13px;
    margin-top: 8px;
  }

  .mensaje {
    font-size: 0.9em;
  }
}

@media (max-width: 480px) {
  .rutas-disponibles {
    padding: 5px;
    margin-top: 10px;
  }

  .ruta-item {
    padding: 5px;
    margin-bottom: 10px;
  }

  .ruta-item h4 {
    font-size: 0.95em;
  }

  li {
    font-size: 0.85em;
  }

  .lol {
    display: block;
    width: 100%;
    text-align: center;
    padding: 8px;
    font-size: 12px;
    margin-top: 8px;
  }

  .mensaje {
    font-size: 0.85em;
  }
}
</style>