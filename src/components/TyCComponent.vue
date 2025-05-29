<template>
    <div class="tyc-container">
        <h2>Términos y Condiciones</h2>
        <p>
            Al utilizar el servicio de transporte público de Santa Marta, aceptas los términos establecidos en este
            documento.
            Nuestro servicio garantiza calidad y eficiencia, pero no se responsabiliza por pérdidas personales.
            Consulta nuestras condiciones completas en nuestra página web oficial.
        </p>
    </div>
</template>

<style scoped>
.tyc-container {
  background: #1e1e1e;
  padding: 40px;
  border-radius: 10px;
  text-align: justify;
  max-width: 800px; 
  margin: 40px auto; 
  color: white;
  box-sizing: border-box; 
}

.tyc-container h2 {
  font-size: 2.2em; 
  margin-bottom: 25px;
  text-align: center;
  color: #00bcd4;
}

.tyc-container p {
  font-size: 1.05em; 
  line-height: 1.7; 
  text-align: justify; 
}

@media (max-width: 768px) {
  .tyc-container {
    padding: 30px;
    margin: 30px auto;
    max-width: 90%; 
  }

  .tyc-container h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }

  .tyc-container p {
    font-size: 1em;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .tyc-container {
    padding: 20px;
    margin: 20px auto;
    max-width: 95%; 
  }

  .tyc-container h2 {
    font-size: 1.8em;
    margin-bottom: 15px;
  }

  .tyc-container p {
    font-size: 0.95em;
    line-height: 1.5;
  }
}
</style>
