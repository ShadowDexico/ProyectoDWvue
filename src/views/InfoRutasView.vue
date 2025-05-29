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
            try {
                const res = await axios.get('http://localhost:8081/api/rutas');
                this.rutas = res.data;
            } catch (err) {
                console.warn('Error al cargar rutas desde la API', err);
            }
        },
    },
    mounted() {
        this.cargarRutas();
    },
};
</script>

<style scoped>
h2{
    color: #ffffff;
}
.info-rutas-container {
    background-color: #121212;
    padding: 40px 20px;
    color: white;
    min-height: calc(100vh - 70px);
    box-sizing: border-box;
    max-width: 900px;
    margin: 70px auto 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.rutas-heading {
    font-size: 2.5em;
    color: #00bcd4;
    margin-bottom: 30px;
    text-align: center;
}

.loading-message,
.error-message,
.no-rutas-message {
    text-align: center;
    padding: 20px;
    font-size: 1.1em;
    color: #ccc;
    background-color: #1e1e1e;
    border-radius: 8px;
    margin-top: 20px;
}

.error-message {
    color: #ff5555;
}

.accordion-item {
    margin-bottom: 10px;
}

.accordion {
    background-color: #2a2a2a;
    border: 1px solid #3a3a3a;
    color: #f1f1f1;
    padding: 15px 20px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    font-size: 1.1em;
    font-weight: bold;
    transition: background-color 0.3s ease, border-color 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    box-sizing: border-box;
}

.accordion:hover {
    background-color: #3a3a3a;
}

.accordion.active {
    background-color: #00bcd4;
    color: #121212;
    border-color: #00bcd4;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

.accordion-title {
    flex-grow: 1;
    margin-right: 10px;
}

.arrow {
    font-size: 1.5em;
    transition: transform 0.3s ease;
    color: #f1f1f1;
}

.accordion.active .arrow {
    transform: rotate(90deg);
    color: #121212;
}

.panel {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    padding: 0 20px;
    transition: max-height 0.7s ease-in-out, opacity 0.7s ease-in-out, padding 0.7s ease-in-out;
    background: #1e1e1e;
    border: 1px solid #3a3a3a;
    border-top: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
}

.panel.show {
    max-height: 1000px;
    opacity: 1;
    padding: 20px;
    }

.panel-content {
    padding-top: 10px;
    }

.panel p {
    margin-bottom: 15px;
    line-height: 1.6;
    font-size: 1em;
    text-align: justify;
    white-space: pre-line;
}

.panel img {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
    max-height: 300px;

    object-fit: contain;
}


@media (max-width: 992px) {
    .info-rutas-container {
        padding: 30px 15px;
        margin-top: 60px;
    }

    .rutas-heading {
        font-size: 2.2em;
        margin-bottom: 25px;
    }

    .accordion {
        padding: 12px 18px;
        font-size: 1em;
    }

    .arrow {
        font-size: 1.4em;
    }

    .panel.show {
        padding: 15px;
    }

    .panel p {
        font-size: 0.95em;
    }

    .panel img {
        max-height: 250px;
    }
}

@media (max-width: 600px) {
    .info-rutas-container {
        padding: 20px 10px;
        margin-top: 50px;
        min-height: calc(100vh - 60px);
    }

    .rutas-heading {
        font-size: 2em;
        margin-bottom: 20px;
    }

    .accordion {
        padding: 10px 15px;
        font-size: 0.95em;
    }

    .arrow {
        font-size: 1.3em;
    }

    .panel {
        padding: 0 15px;
    }

    .panel.show {
        padding: 15px;
    }

    .panel p {
        font-size: 0.9em;
    }

    .panel img {
        max-height: 200px;
    }
}
@media (max-width: 375px) {
    .info-rutas-container {
        padding: 15px 8px;
    }

    .rutas-heading {
        font-size: 1.8em;
    }

    .accordion {
        font-size: 0.9em;
        padding: 8px 12px;
    }

    .arrow {
        font-size: 1.2em;
    }

    .panel.show {
        padding: 10px;
    }
}
</style>