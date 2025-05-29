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
                { q: "¿En que ciudades puedo usar la app?", a: "Solo en Santa Marta" },
            ],
        };
    },
};
</script>

<style scoped>
.faq-container {
    background: #1e1e1e;
    padding: 50px 20px;

    border-radius: 20px;
    max-width: 1200px;
    margin: 40px auto;

    color: white;
    text-align: center;
    box-sizing: border-box;
}

.faq-container h2 {
    font-size: 2.5em;

    margin-bottom: 40px;

    color: #00bcd4;
}

.faq-grid {
    display: grid;

    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 25px;

    justify-items: center;
}

.faq-card {
    background: #2a2a2a;
    border-radius: 15px;
    padding: 25px;

    box-shadow: 0 4px 10px rgba(0, 188, 212, 0.1);
    text-align: left;
    display: flex;

    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;

}

.pregunta {
    font-size: 1.1em;

    font-weight: bold;
    margin-bottom: 12px;
    line-height: 1.4;

}

.respuesta {
    font-size: 1em;
    color: #ccc;
    line-height: 1.5;
    flex-grow: 1;

}

@media (max-width: 992px) {
    .faq-container {
        padding: 40px 15px;
        margin: 30px auto;
    }

    .faq-container h2 {
        font-size: 2.2em;
        margin-bottom: 30px;
    }

    .faq-grid {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }

    .faq-card {
        padding: 20px;
    }

    .pregunta {
        font-size: 1.05em;
    }

    .respuesta {
        font-size: 0.95em;
    }
}

@media (max-width: 600px) {
    .faq-container {
        padding: 30px 10px;
        margin: 20px auto;
    }

    .faq-container h2 {
        font-size: 2em;
        margin-bottom: 25px;
    }

    .faq-grid {
        grid-template-columns: 1fr;
        gap: 15px;
    }

    .faq-card {
        padding: 18px;
        width: 100%;
    }

    .pregunta {
        font-size: 1em;
        margin-bottom: 8px;
    }

    .respuesta {
        font-size: 0.9em;
    }
}

@media (max-width: 375px) {
    .faq-container h2 {
        font-size: 1.8em;
    }

    .faq-card {
        padding: 15px;
    }
}
</style>