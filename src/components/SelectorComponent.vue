<template>
  <div class="container-dad">
    <div class="container">
      <h2>Control de Rutas - Santa Marta</h2>
      <label>Seleccione su ubicación:</label>
      <select v-model="origen">
        <option value="">Seleccione...</option>
        <optgroup label="Zonas Urbanas">
          <option v-for="ruta in ubicaciones" :key="ruta.id" :value="ruta.id">
            {{ ruta.nombre }}
          </option>
        </optgroup>
      </select>

      <label>Seleccione su destino:</label>
      <select v-model="destino">
        <option value="">Seleccione...</option>
        <optgroup label="Zonas Urbanas">
          <option v-for="ruta in ubicaciones" :key="ruta.id" :value="ruta.id">
            {{ ruta.nombre }}
          </option>
        </optgroup>
      </select>

      <button @click="calcularRuta">Calcular Ruta</button>
      <ResultadoComponent :rutaInfo="rutaSeleccionada" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ResultadoComponent from "./ResultadoComponent.vue";

export default {
  components: { ResultadoComponent },
  data() {
    return {
      rutaInfo: [],
      origen: "",
      destino: "",
      rutas: [],
      rutaSeleccionada: null,
      ubicaciones: [],
    };
  },
  methods: {
    async traerRutas() {
      try {
        this.ubicaciones = await this.getAllRoutes();
      } catch (error) {
        console.error("Error al obtener las rutas:", error);
      }
    },

    async escogerRuta() {
      if (this.origen && this.destino) {
        console.log(`Buscando ruta entre ${this.origen} y ${this.destino}`);
        const ruta = await this.rutaInfo.find(
          (r) => r.origen === this.origen && r.destino === this.destino
        );

        if (ruta) return ruta;
        console.log("Ruta no encontrada");
        return null;
      }
    },

    async calcularRuta() {
      if (!this.origen || !this.destino) {
        this.rutaSeleccionada = {
          mensaje: "Por favor seleccione origen y destino.",
        };
        return;
      }

      try {
        const apiUrl = `http://localhost:8081/api/rutas/buscar?origen=${this.origen}&destino=${this.destino}`;
        const response = await axios.get(apiUrl);
        console.log("Ruta encontrada:", response.data);
        this.rutaSeleccionada = response.data;
      } catch (error) {
        console.error("Error al buscar la ruta:", error);
        this.rutaSeleccionada = {
          mensaje: "Error al buscar la ruta. Intente nuevamente.",
        };
      }
    },

    async getAllRoutes() {
      return axios
        .get("http://localhost:8081/api/ubicaciones")
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  async mounted() {
    await this.traerRutas();
  },
};
</script>


<style scoped>
.container-dad {
  background-color: #121212;
  color: white;
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(90vh - 40px);

  margin: 0;

  width: 100%;

  box-sizing: border-box;
}

.container {
  max-width: 600px;
  width: 90%;

  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
  box-sizing: border-box;

}

label {
  display: block;

  margin-top: 15px;

  margin-bottom: 5px;
  text-align: left;

  padding-left: 5px;

}

select,
button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;

  font-size: 1em;
}

button {
  background: #007bff;
  color: black;
  cursor: pointer;

}

button:hover {
  background: #16b6bf;
}

.resultado-component-spacing {
  margin-top: 20px;

}

@media (max-width: 768px) {
  .container-dad {
    padding: 15px;
    min-height: auto;
  }

  .container {
    width: 95%;

    padding: 15px;
  }

  h2 {
    font-size: 1.5em;

  }

  select,
  button {
    font-size: 0.95em;

  }
}

@media (max-width: 480px) {
  .container-dad {
    padding: 10px;
  }

  .container {
    width: 100%;
    padding: 10px;
    border-radius: 5px;

  }

  h2 {
    font-size: 1.3em;
  }

  label {
    font-size: 0.9em;
    text-align: center;
  }

  select,
  button {
    padding: 8px;
    margin: 8px 0;
    font-size: 0.9em;
  }
}
</style>