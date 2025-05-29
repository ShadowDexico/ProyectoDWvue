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
  flex-shrink: 0;
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
  padding: 5px 15px;

  text-align: center;
  margin-bottom: 10px;
 }

.footer-section h2 {
  margin-bottom: 5px;
  font-size: 1.1em;
}

.footer-section p {
  line-height: 1.3;
  font-size: 0.95em;
}

.footer-bottom {
  text-align: center;
  margin-top: 10px;
  font-size: 0.85em;
  padding: 0 10px;
}

@media (max-width: 768px) {
  footer {
    padding: 15px 0;
  }

  .footer-section {
    padding: 5px 10px;
  }

  .footer-section h2 {
    font-size: 1em;
  }

  .footer-section p {
    font-size: 0.9em;
  }

  .footer-bottom {
    font-size: 0.8em;
  }
}

@media (max-width: 480px) {
  footer {
    padding: 10px 0;
  }

  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    padding: 5px;
    margin-bottom: 5px;
    width: 100%;
  }

  .footer-section h2 {
    font-size: 0.95em;
  }

  .footer-section p {
    font-size: 0.85em;
  }

  .footer-bottom {
    font-size: 0.75em;
    margin-top: 5px;
  }
}
</style>
