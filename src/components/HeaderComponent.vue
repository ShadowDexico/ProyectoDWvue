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
  padding: 5px 12px;
  display: flex;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.logo-container {
  background-color: white;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  margin-right: 15px;
}

.logo {
  height: 50px;
}
  
h1 {
  font-size: 20px;
}
</style>
