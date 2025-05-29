<template>
    <div class="login-container">
        <h1>Iniciar sesión</h1>
        <button @click="loginWithGoogle">Iniciar sesión con Google</button>
    </div>
</template>

<script>
export default {
    methods: {
        loginWithGoogle() {
            window.location.href = "http://localhost:8081/oauth2/authorization/google";
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
}
</style>