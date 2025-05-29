<template>
    <div class="faq-container">
        <h2>Preguntas Frecuentes</h2>
        <div class="faq-grid">
            <div class="faq-card" v-for="(pregunta, index) in preguntas" :key="index">
                <p class="pregunta"><strong>{{ index + 1 }}:</strong> {{ pregunta.q }}</p>
                <p class="respuesta"><strong></strong> {{ pregunta.a }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            preguntas: [
                { q: "¿Cuáles son los horarios del transporte público en Santa Marta?", a: "De 04:30 AM a 11:00 PM, todos los días." },
                { q: "¿Se puede pagar con desde la App?", a: "De momento no. en un futuro proximo" },
                { q: "¿Cómo puedo saber la ruta más corta para llegar a mi destino?", a: "Desde la app, usando el buscador de rutas." },
                { q: "¿Los buses tienen acceso para personas con movilidad reducida?", a: "Sí, la mayoría de las rutas cuentan con buses accesibles." },
                { q: "¿Se pueden llevar mascotas en los buses?", a: "Solo mascotas pequeñas en bolsos transportadores." },
                { q: "¿Por qué no tiene mapa interactivo?", a: "Se esta trabajando en ello, para mejorar la experiencia de usuario" },
                { q: "¿Qué hago si pierdo un objeto en el bus?", a: "Contacta a atención al cliente desde la app o en la estación más cercana." },
                { q: "¿Hay buses nocturnos en Santa Marta?", a: "Sí, algunas rutas funcionan hasta la medianoche en días festivos y fines de semana." },
            ],
        };
    },
};
</script>

<style scoped>
.faq-container {
    top: 0;
    left: 0;
    background: #1e1e1e;
    padding: 40px 20px;
    border-radius: 20px;
    max-width: 1200px;
    margin: 0 auto;
    color: white;
    text-align: center;
}

.faq-container h2 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #00bcd4;
}

.faq-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.faq-card {
    background: #2a2a2a;
    border-radius: 15px;
    padding: 20px;
    width: calc(50% - 20px);
    box-shadow: 0 4px 10px rgba(0, 188, 212, 0.1);
    text-align: left;
}

.pregunta {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.respuesta {
    font-size: 16px;
    color: #ccc;
}
</style>
