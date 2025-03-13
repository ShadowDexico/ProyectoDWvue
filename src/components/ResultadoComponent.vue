<template>
    <div v-if="rutaInfo.length" class="rutas-disponibles">
        <h3>Rutas disponibles:</h3>
        <ul>
            <li v-for="(ruta, index) in rutaInfo" :key="index">
                {{ ruta }}
            </li>
            <router-link :to="'/info'" class="lol">Info</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        rutaInfo: Array
    }
};
</script>

<style scoped>
.rutas-disponibles {
    margin-top: 20px;
    padding: 10px;  
    background: #2a2a2a;
    border-radius: 5px;
}

ul {
    list-style-type: none;
    padding: 0;
}
li {
    padding: 5px 0;
}
</style>