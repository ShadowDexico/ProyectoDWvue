<template>
    <div class="info-app-container">
        <h1>Información sobre el Transporte Público</h1>
        <div class="buttons">
            <button @click="mostrarSeccion('faq')" :class="{ active: seccionSeleccionada === 'faq' }">
                Preguntas Frecuentes
            </button>
            <button @click="mostrarSeccion('contacto')" :class="{ active: seccionSeleccionada === 'contacto' }">
                Contacto
            </button>
            <button @click="mostrarSeccion('tyc')" :class="{ active: seccionSeleccionada === 'tyc' }">
                Términos y Condiciones
            </button>
        </div>

        <FaqComponent v-if="seccionSeleccionada === 'faq'" />
        <ContactComponent v-if="seccionSeleccionada === 'contacto'" />
        <TyCComponent v-if="seccionSeleccionada === 'tyc'" />


    </div>
</template>

<script>
import FaqComponent from "@/components/FaqComponent.vue";
import ContactComponent from "@/components/ContactComponent.vue";
import TyCComponent from "@/components/TyCComponent.vue";

export default {
    components: { FaqComponent, ContactComponent, TyCComponent },
    data() {
        return {
            seccionSeleccionada: null,
        };
    },
    methods: {
        mostrarSeccion(seccion) {
            this.seccionSeleccionada = seccion;
        },
    },
    mounted() {
        this.seccionSeleccionada = 'faq';
    }
};
</script>

<style scoped>
.info-app-container {
    min-height: 100vh;
    padding: 40px 20px;
    width: 100%;
    text-align: center;
    background-color: #121212;
    color: white;
    box-sizing: border-box;
}

h1 {
    font-size: 2.8em;
    margin-bottom: 40px;
    color: #f1f1f1;
}

.buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 40px;
}

button {
    background: #007bff;
    color: black;
    padding: 14px 25px;
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    flex-shrink: 0;
}

button:hover {
    background: #16b6bf;
    transform: translateY(-2px);
}

button.active {
    background: #16b6bf;
    box-shadow: 0 0 10px rgba(22, 182, 191, 0.5);
    transform: translateY(-1px);
}

.initial-message {
    padding: 50px 20px;
    background-color: #1e1e1e;
    border-radius: 15px;
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.2em;
    color: #ccc;
    text-align: center;
}

@media (max-width: 992px) {
    .info-app-container {
        padding: 30px 15px;
    }

    h1 {
        font-size: 2.4em;
        margin-bottom: 30px;
    }

    .buttons {
        gap: 15px;
        margin-bottom: 30px;
    }

    button {
        padding: 12px 20px;
        font-size: 1em;
    }

    .initial-message {
        padding: 40px 15px;
        font-size: 1.1em;
    }
}

@media (max-width: 600px) {
    .info-app-container {
        padding: 20px 10px;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 25px;
    }

    .buttons {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 25px;
        align-items: center;
    }

    button {
        width: 90%;
        max-width: 300px;
        padding: 10px 15px;
        font-size: 0.95em;
    }

    .initial-message {
        padding: 30px 10px;
        font-size: 1em;
    }
}

@media (max-width: 375px) {
    h1 {
        font-size: 1.8em;
    }

    button {
        font-size: 0.9em;
        padding: 8px 12px;
    }
}
</style>