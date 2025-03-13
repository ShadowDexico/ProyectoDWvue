<template>

    <body>
        <div class="container">
            <h2>Control de Rutas - Santa Marta</h2>
            <label>Seleccione su ubicación:</label>
            <select v-model="origen">
                <option value="">Seleccione...</option>
                <optgroup label="Zonas Urbanas">
                    <option value="mercado">Mercado</option>
                    <option value="centro">Centro</option>
                    <option value="mamatoco">Mamatoco</option>
                    <option value="ciudad equidad">Ciudad Equidad</option>
                    <option value="aeropuerto">Aeropuerto</option>
                    <option value="robadero">Rodadero</option>
                    <option value="gaira">gaira</option>
                    <option value="timayui">Timayui</option>
                    <option value="taganga">Taganga</option>
                    <option value="av. libertador">Av. libertador</option>
                </optgroup>
                <optgroup label="Zonas Rurales">
                    <option value="minca">Minca</option>
                    <option value="bonda">Bonda</option>
                    <option value="guachaca">Guachaca</option>
                </optgroup>
            </select>

            <label>Seleccione su destino:</label>
            <select v-model="destino">
                <option value="">Seleccione...</option>
                <optgroup label="Zonas Urbanas">
                    <option value="mercado">Mercado</option>
                    <option value="centro">Centro</option>
                    <option value="mamatoco">Mamatoco</option>
                    <option value="ciudad equidad">Ciudad Equidad</option>
                    <option value="aeropuerto">Aeropuerto</option>
                    <option value="robadero">Rodadero</option>
                    <option value="gaira">gaira</option>
                    <option value="timayui">Timayui</option>
                    <option value="taganga">Taganga</option>
                    <option value="av. libertador">Av. libertador</option>
                </optgroup>
                <optgroup label="Zonas Rurales">
                    <option value="minca">Minca</option>
                    <option value="bonda">Bonda</option>
                    <option value="guachaca">Guachaca</option>
                </optgroup>
            </select>

            <button @click="calcularRuta">Calcular Ruta</button>
            <ResultadoComponent v-if="rutaInfo.length" :rutaInfo="rutaInfo" />
        </div>
    </body>
</template>

<script>
import ResultadoComponent from "./ResultadoComponent.vue";

export default {
    components: { ResultadoComponent },
    data() {
        return {
            origen: "",
            destino: "",
            rutas: {
                "minca-mercado": [
                    "Ruta 76 - Buses cada 15 min (5:30 AM - 4:00 PM)"
                ],
                "guachaca-mercado": [
                    "Ruta 75 - Buses cada 15 min (5:30 AM - 4:00 PM)"
                ],
                "mercado-guachaca": [
                    "Ruta 74 - Buses cada 15 min (5:30 AM - 4:00 PM)"
                ],
                "mercado-minca": [
                    "Ruta 73 - Buses cada 15 min (5:30 AM - 4:00 PM)"
                ],
                "centro-mamatoco": [
                    "Ruta 1 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "centro-ciudad equidad": [
                    "Ruta 2 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "centro-aeropuerto": [
                    "Ruta 3 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "centro-robadero": [
                    "Ruta 4 - Buses cada 30 min (4:30 AM - 9:00 PM)"
                ],
                "centro-gaira": [
                    "Ruta 5 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "centro-timayui": [
                    "Ruta 6 - Buses cada 20 min (4:30 AM - 9:00 PM)"
                ],
                "centro-taganga": [
                    "Ruta 7 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "centro-av. libertador": [
                    "Ruta 8 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "mamatoco-centro": [
                    "Ruta 9 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "mamatoco-ciudad equidad": [
                    "Ruta 10 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "mamatoco-aeropuerto": [
                    "Ruta 11 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "ciudad equidad-av. libertador": [
                    "Ruta 24 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "aeropuerto-centro": [
                    "Ruta 25 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "aeropuerto-mamatoco": [
                    "Ruta 26 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "aeropuerto-robadero": [
                    "Ruta 28 - Buses cada 30 min (4:30 AM - 9:00 PM)"
                ],
                "aeropuerto-gaira": [
                    "Ruta 29 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "aeropuerto-timayui": [
                    "Ruta 30 - Buses cada 20 min (4:30 AM - 9:00 PM)"
                ],
                "robadero-centro": [
                    "Ruta 33 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "robadero-aeropuerto": [
                    "Ruta 36 - Buses cada 30 min (4:30 AM - 9:00 PM)"
                ],
                "robadero-gaira": [
                    "Ruta 37 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "gaira-centro": [
                    "Ruta 41 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "gaira-mamatoco": [
                    "Ruta 42 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "gaira-aeropuerto": [
                    "Ruta 44 - Buses cada 30 min (4:30 AM - 9:00 PM)"
                ],
                "gaira-robadero": [
                    "Ruta 45 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "gaira-timayui": [
                    "Ruta 46 - Buses cada 20 min (4:30 AM - 9:00 PM)"
                ],
                "timayui-centro": [
                    "Ruta 49 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "timayui-mamatoco": [
                    "Ruta 50 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "timayui-aeropuerto": [
                    "Ruta 52 - Buses cada 30 min (4:30 AM - 9:00 PM)"
                ],
                "timayui-gaira": [
                    "Ruta 54 - Buses cada 20 min (4:30 AM - 9:00 PM)"
                ],
                "timayui-taganga": [
                    "Ruta 55 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "timayui-av. libertador": [
                    "Ruta 56 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "taganga-centro": [
                    "Ruta 57 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "taganga-mamatoco": [
                    "Ruta 58 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "taganga-timayui": [
                    "Ruta 63 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "taganga-av. libertador": [
                    "Ruta 64 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "av. libertador-centro": [
                    "Ruta 65 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ],
                "av. libertador-mamatoco": [
                    "Ruta 66 - Buses cada 20 min (4:30 AM - 8:30 PM)"
                ],
                "av. libertador-ciudad equidad": [
                    "Ruta 67 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "av. libertador-timayui": [
                    "Ruta 71 - Buses cada 25 min (4:30 AM - 9:00 PM)"
                ],
                "av. libertador-taganga": [
                    "Ruta 72 - Buses cada 15 min (4:30 AM - 9:00 PM)"
                ]

            },
            rutaInfo: []
        };
    },
    methods: {
        calcularRuta() {
            if (!this.origen || !this.destino) {
                this.rutaInfo = ["Por favor seleccione origen y destino."];
                return;
            }
            if (this.origen === this.destino) {
                this.rutaInfo = ["Ya estás en tu destino."];
                return;
            }

            const claveRuta = `${this.origen}-${this.destino}`;
            const claveRutaInvertida = `${this.destino}-${this.origen}`;

            this.rutaInfo = this.rutas[claveRuta] || this.rutas[claveRutaInvertida] || ["No hay una ruta directa disponible."];
        }
    }
};
</script>

<style scoped>
body {
    background-color: #121212;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    margin: 0px -8px;
}

.container {
    max-width: 600px;
    margin: auto;
    background: #1e1e1e;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

select,
button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
}

button {
    background: #007BFF;
    color: black;
    cursor: pointer;
}

button:hover {
    background: #16b6bf;
}
</style>
