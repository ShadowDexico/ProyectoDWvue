<template>
  <header class="header">
    <div class="logo-container">
      <img src="@/assets/LogoBus.png" alt="Logo Transporte Santa Marta" class="logo" />
    </div>
    <h1>RutaSM</h1>
  </header>
</template>
<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #1e1e1e;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.15);
  z-index: 1000;
  box-sizing: border-box;

}

.logo-container {
  background-color: white;
  padding: 8px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.3);

  margin-right: 15px;

}

.logo {
  height: 45px;

  width: auto;

}

h1 {
  font-size: 1.8em;

  margin: 0;

  white-space: nowrap;

}

@media (max-width: 768px) {
  .header {
    padding: 8px 15px;

  }

  .logo-container {
    padding: 6px;
    margin-right: 12px;
  }

  .logo {
    height: 40px;
  }

  h1 {
    font-size: 1.6em;

  }
}

@media (max-width: 480px) {
  .header {
    padding: 5px 10px;

  }

  .logo-container {
    padding: 5px;
    border-radius: 10px;

    margin-right: 10px;
  }

  .logo {
    height: 35px;

  }

  h1 {
    font-size: 1.4em;

  }
}

@media (max-width: 375px) {
  .header {
    padding: 5px 8px;
  }

  .logo-container {
    padding: 4px;
    margin-right: 8px;
  }

  .logo {
    height: 30px;

  }

  h1 {
    font-size: 1.2em;
  }
}
</style>