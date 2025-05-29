<template>
    <div>
        <h2 class="Lol">Información de Rutas</h2>

        <div v-for="(info, clave) in rutas" :key="clave">
            <button class="accordion" @click="togglePanel(clave)" :class="{ active: clave === rutaSeleccionada }">
                {{ info.texto }}
                <span class="arrow" :class="{ rotated: clave === rutaSeleccionada }">&#x2192;</span>
            </button>
            <div class="panel" :class="{ show: clave === rutaSeleccionada }">
                <p>{{ info.descripcion }}</p>
                <img :src="info.imagen" :alt="info.texto" />
            </div>
        </div>

        <router-link to="/" class="lol">Volver</router-link>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            rutas: {},
            rutaSeleccionada: null,
        };
    },
    methods: {
        togglePanel(clave) {
            this.rutaSeleccionada = this.rutaSeleccionada === clave ? null : clave;
        },
        async cargarRutas() {
            const maxRutas = 10;
            const nuevasRutas = {};
            for (let id = 1; id <= maxRutas; id++) {
                try {
                    const res = await axios.get(`http://localhost:8081/api/rutas/${id}`);
                    nuevasRutas[id] = res.data;
                } catch (err) {
                    console.warn(`Ruta ${id} no encontrada o error en la API`, err);
                }
            }
            this.rutas = nuevasRutas;
        },
    },
    mounted() {
        this.cargarRutas();
    },
};
</script>

<style scoped>
div {
    background-color: #000;
    padding: 20px;
    color: white;
}

.accordion {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: -10px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    font-size: 18px;
    transition: background-color 1s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
}

.accordion:hover,
.accordion.active {
    background-color: #ccc;
}

.arrow {
    font-size: 20px;
    transition: transform 0.9s ease;
}

.accordion.active .arrow {
    transform: rotate(90deg);
}

.panel {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.9s ease-out, opacity 0.9s ease-out, padding 0.9s ease-out;
    padding: 0 10px;
    background: #1e1e1e;
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

.panel.show {
    max-height: 1500px;
    opacity: 1;
    padding: 10px;
}

.lol {
    display: inline-block;
    padding: 10px 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.lol:hover {
    background-color: #151010;
    transform: scale(1.05);
}
</style>
