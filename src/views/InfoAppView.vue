<template>
    <div class="info-app-container">
        <h1>Información sobre el Transporte Público</h1>
        <div class="buttons">
            <button @click="mostrarSeccion('faq')">Preguntas Frecuentes</button>
            <button @click="mostrarSeccion('contacto')">Contacto</button>
            <button @click="mostrarSeccion('tyc')">Términos y Condiciones</button>
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
};
</script>

<style scoped>
.info-app-container {
    min-height: 100vh;
    padding: 40px 20px;
    width: 100%;
    height: 100%;
    text-align: center;
    background-color: #121212;
    color: white;
    box-sizing: border-box;
}

.buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 30px;
}

button {
    background: #007bff;
    color: black;
    padding: 12px 20px;
    font-size: 18px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background: #16b6bf;
}
</style>
