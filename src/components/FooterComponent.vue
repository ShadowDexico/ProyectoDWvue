<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section contact">
        <h2>Contacto</h2>
        <p>Dirección: Calle Ficticia 123, Santa Marta, Magdalena</p>
        <p>Teléfono: +57 123 456 7890</p>
        <p>Email: info@xyztransportes.com</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 XYZ Transportes. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px 0;
  box-sizing: border-box;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.footer-section {
  padding: 5px;
  text-align: center;
}

.footer-section h2 {
  margin-bottom: 5px;
  font-size: 1em;
}

.footer-section p {
  line-height: 1.2;
  font-size: 0.9em;
}

.footer-bottom {
  text-align: center;
  margin-top: 10px;
  font-size: 0.8em;
}
</style>
