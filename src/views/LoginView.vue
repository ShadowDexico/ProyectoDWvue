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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    color: white;
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

button {
    width: 500px;
    padding: 12px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    background: #007bff;
    color: black;
    cursor: pointer;
    transition: transform 0.2s ease;
}

button:hover {
    background: #16b6bf;
    transform: scale(1.02);
}
</style>
