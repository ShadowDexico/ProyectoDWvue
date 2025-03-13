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
export default {

}
</script>

<style scoped>
footer {
    background-color: #333;
    color: #fff;
    height: 25vh;
    overflow: hidden;
    margin: -7px -8px;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    max-height: 18vh;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
}

.footer-section {
    flex: 1;
    padding: 5px;
    box-sizing: border-box;
}

.footer-section h2 {
    margin-bottom: 5px;
    font-size: 1em;
}

.footer-section p {
    line-height: 1.2;
    font-size: 0.8em;
}
.footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 0.7em;
}
</style>