<template>
    <div class="login-container">
        <h1>Iniciar sesión</h1>
        <button @click="loginWithGoogle">
            Iniciar sesión con Google
        </button>
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

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    color: white;
    font-family: 'Arial', sans-serif;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
}

h1 {
    font-size: 2.5em;
    margin-bottom: 30px;
    color: #f1f1f1;
}

button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    max-width: 400px;
    padding: 15px 20px;
    font-size: 1.1em;
    border: none;
    border-radius: 8px;
    background: #007bff;
    color: black;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
}



button:hover {
    background: #16b6bf;
    transform: translateY(-2px);

    box-shadow: 0 6px 15px rgba(22, 182, 191, 0.4);

}




@media (max-width: 768px) {
    h1 {
        font-size: 2.2em;
        margin-bottom: 25px;
    }

    button {
        width: 85%;

        max-width: 350px;

        padding: 12px 18px;
        font-size: 1em;
    }

    .google-icon {
        width: 22px;
        height: 22px;
        margin-right: 8px;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 1.8em;
        margin-bottom: 20px;
    }

    button {
        width: 90%;
        max-width: 300px;
        padding: 10px 15px;
        font-size: 0.95em;
        border-radius: 6px;
    }

    .google-icon {
        width: 20px;
        height: 20px;
        margin-right: 6px;
    }
}

/* Very small mobile devices */
@media (max-width: 375px) {
    h1 {
        font-size: 1.6em;
    }

    button {
        font-size: 0.9em;
        padding: 8px 12px;
    }
}
</style>