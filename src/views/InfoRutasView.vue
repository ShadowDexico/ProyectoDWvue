<template>
    <div>
        <h2 class="Lol">Información de Rutas</h2>

        <div v-for="(info, clave) in rutas" :key="clave">
            <button class="accordion" @click="togglePanel(clave)" :class="{ active: clave === rutaSeleccionada }">
                {{ info.texto }}
                <span class="arrow" :class="{ rotated: clave === rutaSeleccionada }">&#x2192;</span>
            </button>
            <div class="panel" :class="{ show: clave === rutaSeleccionada }">
                <p>{{ info.descripcion }}</p>
                <img :src="info.imagen" :alt="info.texto">
            </div>
        </div>

        <router-link to="/" class="lol">Volver</router-link>
    </div>
</template>

<script>

export default {
    data() {
        return {
            rutas: {
                "centro-mamatoco": {
                    texto: "Ruta 1",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "centro-ciudad equidad": {
                    texto: "Ruta 2",
                    descripcion: "Salida Terminal de Transferencia de lucha – Mamatoco – retorno Av ferrocarril con carrera 5 Tomamos la glorieta de la lucha pasando por debajo del puente hacia la doble calzada– hasta llegar a la glorita de la piragua – continuando la doble calzada llegamos a la glorita de mamatoco – a la derecha desviamos por debajo de la glorieta que toma la vía hacia Riohacha y tomamos la vía a minca – pasamos por arriba del puente que está justo al frente de villa Toledo – tomamos la carretera hacia minca – llegamos hasta la entrada de ciudad equidad – hacemos un recorrido interno hasta la manzana 10 .- retornamos por la misma via – regresamos por la vía a minca hasta llegar a la variante de la via a Riohacha – hacia la izquierda llegamos a la glorieta de mamatoco – tomamos la doble calzada hacia la glorieta de la piragua – seguimos derecho por la doble calzada – justo por la vía que está al frente de la terminal desviamos – seguimos hacia la glorieta de la lucha – a la derecha seguimos por la Av. del ferrocarril derecho hasta la calle 22 (santa Rita) – calle 22 hasta la carrera 5 – carera 5 hasta a la Av. del ferrocarril – toda la Av. del ferrocarril hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta2.jpeg"
                },
                "centro-aeropuerto": {
                    texto: "Ruta 3",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "centro-robadero": {
                    texto: "Ruta 4",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "centro-gaira": {
                    texto: "Ruta 5",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "centro-timayui": {
                    texto: "Ruta 6",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco.",
                    imagen: "/img/Ruta6.jpeg"
                },
                "centro-taganga": {
                    texto: "Ruta 7",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco.",
                    imagen: "/img/Ruta6.jpeg"
                },
                "centro-av. libertador": {
                    texto: "Ruta 8",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco.",
                    imagen: "/img/Ruta6.jpeg"
                },
                "mamatoco-centro": {
                    texto: "Ruta 9",
                    descripcion: "Salida Terminal de Transferencia de la lucha – retorno en la Av del ferrocarril con carrera 5 Tomamos la glorieta de la lucha hasta conectar con la doble calzada que conduce a ciénaga – derecho hasta el retorno de la entrada del nuevo estadio – retornamos hasta la pequeña glorieta que conduce a curinca – a la derecha entramos al barrio curinca – santa cruz – hasta empalmar con la carrera 22 con calle 46 – giramos a la izquierda hasta la carrera 24 – para luego llegar hasta el límite entre el barrio el parque y santa lucia – continuamos derecho pasando por las bodegas donado hasta el barrio Andrea carolina – para luego salir hasta el barrio el libano 2000 – para luego conectar con la vía que nos lleva a por la universidad Antonio Nariño (sede troncal) – para luego salir a la doble calzada (troncal del caribe) – hasta la glorieta de mamatoco – giramos a la izquierda hacia mamatoco – hasta la Av. del libertador – Av del libertador hasta la Av. del ferrocarril – giramos a la derecha hasta llegar a la carrera 1ª (camellón turístico) – seguimos hasta la calle 22 (santa Rita) – giramos a la izquierda hasta llegar a la carrera 5 con calle 22 – luego giramos a la izquierda para tomar la carrera 5 y pasar por el centro histórico de la ciudad – hasta llegar a la Av. del ferrocarril con carrera 5 – giramos a la derecha derecha por toda la Av. del ferrocarril hasta la Av del libertador – giramos a la izquierda y recorremos toda la Av del libertador hasta la glorieta de la quinta de san pedro alejandrino – giramos a la izquierda por la glorita hasta empalmar con la glorieta de mamatoco – girando a la derecha tomamos la doble calzada hasta la glorieta de la piragua – realizamos toda la vuelta a la glorieta retornamos hasta la entrada de la universidad Antonio Nariño – giramos a la derecha para realizar el circuito interno por los barrios Líbano 2000, altos de santa cruz, santa lucia, villas de santa cruz , parque, curinca – para luego salir a la doble calzada por la lucha – tomamos la glorieta sierra nevada por debajo del puente hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta9.jpeg"
                },
                "mamatoco-ciudad equidad": {
                    texto: "Ruta 10",
                    descripcion: "Salida Terminal de Transferencia de mamatoco – Regreso Ciudad Equidad Tomamos la glorieta hacia la derecha, desviamos por debajo de la glorieta que toma la vía hacia Riohacha y tomamos la vía a minca – pasamos por arriba del puente que está justo frente de villa Toledo – tomamos la carretera hacia minca – llegamos hasta la entrada de ciudad equidad – hacemos un recorrido interno hasta la manzana 10 .- retornamos hacia la entrada – regresamos por la vía a minca hasta llegar a la variante de la vía a Riohacha – hacia la izquierda llegamos a la glorieta de mamatoco – hasta la glorieta del Buenavista – tomamos toda la Av. del libertador hasta la Av. del ferrocarril – hasta la carrera 1 (camellón turístico) – carrera 1 hasta la calle 22 – calle 22 hasta la carrera 5 – a la izquierda transitamos todo el centro de la ciudad hasta la Av del ferrocarril – hasta la Av del libertador – tomamos toda esta avenida hasta la glorieta del Buenavista – para finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta10.jpeg"
                },
                "mamatoco-aeropuerto": {
                    texto: "Ruta 11",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "mamatoco-timayui": {
                    texto: "Ruta 14",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "mamatoco-taganga": {
                    texto: "Ruta 15",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "mamatoco-av. libertador": {
                    texto: "Ruta 16",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "ciudad equidad-centro": {
                    texto: "Ruta 17",
                    descripcion: "Salida Terminal de Transferencia de lucha – Mamatoco – retorno Av ferrocarril con carrera 5 Tomamos la glorieta de la lucha pasando por debajo del puente hacia la doble calzada– hasta llegar a la glorita de la piragua – continuando la doble calzada llegamos a la glorita de mamatoco – a la derecha desviamos por debajo de la glorieta que toma la vía hacia Riohacha y tomamos la vía a minca – pasamos por arriba del puente que está justo al frente de villa Toledo – tomamos la carretera hacia minca – llegamos hasta la entrada de ciudad equidad – hacemos un recorrido interno hasta la manzana 10 .- retornamos por la misma via – regresamos por la vía a minca hasta llegar a la variante de la via a Riohacha – hacia la izquierda llegamos a la glorieta de mamatoco – tomamos la doble calzada hacia la glorieta de la piragua – seguimos derecho por la doble calzada – justo por la vía que está al frente de la terminal desviamos – seguimos hacia la glorieta de la lucha – a la derecha seguimos por la Av. del ferrocarril derecho hasta la calle 22 (santa Rita) – calle 22 hasta la carrera 5 – carera 5 hasta a la Av. del ferrocarril – toda la Av. del ferrocarril hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta2.jpeg"
                },
                "ciudad equidad-mamatoco": {
                    texto: "Ruta 18",
                    descripcion: "Salida Terminal de Transferencia de mamatoco – Regreso Ciudad Equidad Tomamos la glorieta hacia la derecha, desviamos por debajo de la glorieta que toma la vía hacia Riohacha y tomamos la vía a minca – pasamos por arriba del puente que está justo frente de villa Toledo – tomamos la carretera hacia minca – llegamos hasta la entrada de ciudad equidad – hacemos un recorrido interno hasta la manzana 10 .- retornamos hacia la entrada – regresamos por la vía a minca hasta llegar a la variante de la vía a Riohacha – hacia la izquierda llegamos a la glorieta de mamatoco – hasta la glorieta del Buenavista – tomamos toda la Av. del libertador hasta la Av. del ferrocarril – hasta la carrera 1 (camellón turístico) – carrera 1 hasta la calle 22 – calle 22 hasta la carrera 5 – a la izquierda transitamos todo el centro de la ciudad hasta la Av del ferrocarril – hasta la Av del libertador – tomamos toda esta avenida hasta la glorieta del Buenavista – para finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta10.jpeg"
                },
                "ciudad equidad-av. libertador": {
                    texto: "Ruta 24",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "aeropuerto-centro": {
                    texto: "Ruta 25",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "aeropuerto-mamatoco": {
                    texto: "Ruta 26",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "aeropuerto-robadero": {
                    texto: "Ruta 28",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "aeropuerto-gaira": {
                    texto: "Ruta 29",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "aeropuerto-timayui": {
                    texto: "Ruta 30",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "robadero-centro": {
                    texto: "Ruta 33",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "robadero-aeropuerto": {
                    texto: "Ruta 36",
                    descripcion: "Salida Terminal de Transferencia de Gaira – punto de retorno Av santa Rita Tomando la Doble calzada hacia sector de bello horizonte – desviamos hacia el aeropuerto – regresando por la doble calzada, pasando por la variante debajo del puente – entrada al barrio la paz (recorrido interno) – retorno a la doble calzada- bomba zuca – tomamos la carrera 4 del rodadero – hasta ziruma – toda la carrera 4 santa marta- calle 22 con carrera 4 – calle 22 con carrera 5 – tomamos carrera 5 hasta la Av. del Ferrocarril – Av. ferrocarril hasta la carrera 1 – carrera 1 hasta calle 22 – calle 22 hasta la carrera 4 – carrera 4 hasta ziruma – carrera 4 rodadero – finalizando en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta3.jpeg"
                },
                "robadero-gaira": {
                    texto: "Ruta 37",
                    descripcion: "Salida Terminal de Transferencia de la lucha – Retorno arrecife rodadero Tomamos la glorieta de la lucha pasando por un lado del puente conectado con la doble calzada a ciénaga – continuamos por la doble calzada hasta la entrada a gaira – recorrido interno por gaira (vía principal) pasando por la calle 6 hasta llegar a la carrera 4 del rodadero – giramos ala derecha por la carrera 4 hasta el centro comercial arrecife – hacemos el regreso por la misma vía (carrera 4 ) – hasta la calle 6 de gaira – recorrido interno por gaira hasta llegar a la doble calzada – tomamos la doble calzada hasta el retorno que está en villas del palmar – retornamos por la doble calzada hasta la lucha – tomamos la glorieta por debajo del puente hasta conectar con la Av. del ferrocarril – tomamos toda la avenida del ferrocarril hasta la calle 22 – giramos a la izquierda por la avenida santa Rita hasta la carrera 5 – giramos a la derecha y transitamos por todo el centro de la ciudad hasta la Av. del ferrocarril – giramos a la derecha y transitamos por toda esa avenida hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta37.jpeg"
                },
                "gaira-centro": {
                    texto: "Ruta 41",
                    descripcion: "Salida Terminal de Transferencia de la lucha – Retorno arrecife rodadero Tomamos la glorieta de la lucha pasando por un lado del puente conectado con la doble calzada a ciénaga – continuamos por la doble calzada hasta la entrada a gaira – recorrido interno por gaira (vía principal) pasando por la calle 6 hasta llegar a la carrera 4 del rodadero – giramos ala derecha por la carrera 4 hasta el centro comercial arrecife – hacemos el regreso por la misma vía (carrera 4 ) – hasta la calle 6 de gaira – recorrido interno por gaira hasta llegar a la doble calzada – tomamos la doble calzada hasta el retorno que está en villas del palmar – retornamos por la doble calzada hasta la lucha – tomamos la glorieta por debajo del puente hasta conectar con la Av. del ferrocarril – tomamos toda la avenida del ferrocarril hasta la calle 22 – giramos a la izquierda por la avenida santa Rita hasta la carrera 5 – giramos a la derecha y transitamos por todo el centro de la ciudad hasta la Av. del ferrocarril – giramos a la derecha y transitamos por toda esa avenida hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta37.jpeg"
                },
                "gaira-mamatoco": {
                    texto: "Ruta 42",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "gaira-aeropuerto": {
                    texto: "Ruta 44",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "gaira-robadero": {
                    texto: "Ruta 45",
                    descripcion: "Salida Terminal de Transferencia de la lucha – Retorno arrecife rodadero Tomamos la glorieta de la lucha pasando por un lado del puente conectado con la doble calzada a ciénaga – continuamos por la doble calzada hasta la entrada a gaira – recorrido interno por gaira (vía principal) pasando por la calle 6 hasta llegar a la carrera 4 del rodadero – giramos ala derecha por la carrera 4 hasta el centro comercial arrecife – hacemos el regreso por la misma vía (carrera 4 ) – hasta la calle 6 de gaira – recorrido interno por gaira hasta llegar a la doble calzada – tomamos la doble calzada hasta el retorno que está en villas del palmar – retornamos por la doble calzada hasta la lucha – tomamos la glorieta por debajo del puente hasta conectar con la Av. del ferrocarril – tomamos toda la avenida del ferrocarril hasta la calle 22 – giramos a la izquierda por la avenida santa Rita hasta la carrera 5 – giramos a la derecha y transitamos por todo el centro de la ciudad hasta la Av. del ferrocarril – giramos a la derecha y transitamos por toda esa avenida hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta37.jpeg"
                },
                "gaira-timayui": {
                    texto: "Ruta 46",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "timayui-centro": {
                    texto: "Ruta 49",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "timayui-mamatoco": {
                    texto: "Ruta 50",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "timayui-aeropuerto": {
                    texto: "Ruta 52",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "timayui-gaira": {
                    texto: "Ruta 54",
                    descripcion: "Salida Terminal de Transferencia de gaira – Punto de retorno Bonda Tomando la Doble calzada – pasamos por el sector de bello horizonte – zona hotelera – irotama, zuana beach resort, medicure, estelar, etc. – tomamos la doble calzada hasta el aeropuerto-regresamos por misma vía, pasando por la variante debajo del puente- entrada al barrio la paz – seguimos por la doble calzada hacia bomba zuca – pasamos por el otro sentido al frente de la terminal de transferencia de gaira – continuamos por la doble calzada hacia el sector de la lucha – tomamos la vía por encima del puente hasta la glorieta de la piragua – tomamos la glorita hacia la izquierda hasta empalmar con la glorieta de mamatoco – giramos hacia la derecha, pasando por el frente del Buenavista hasta llegar a la glorieta de mamatoco – pasamos la glorieta – tomamos la troncal del caribe que conduce a Riohacha – llegamos a la “YE” y desviamos hacia la derecha hasta llegar a bonda – realizamos un recorrido interno – regresamos a la vía principal – tomamos nuevamente la troncal hacia la glorieta de mamatoco – pasamos por Buenavista hasta tomar la glorieta – hacia la izquierda – llegamos a la glorieta de la piragua – continuando derecho por la doble calzada – tomamos la vía que desvía justo por al frente de la terminal seguimos hacia la glorieta de la lucha conectando nuevamente con la doble calzada – continuamos por esa misma vía hasta finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta11.jpeg"
                },
                "timayui-taganga": {
                    texto: "Ruta 55",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "timayui-av. libertador": {
                    texto: "Ruta 56",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "taganga-centro": {
                    texto: "Ruta 57",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "taganga-mamatoco": {
                    texto: "Ruta 58",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "taganga-timayui": {
                    texto: "Ruta 63",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "taganga-av. libertador": {
                    texto: "Ruta 64",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "av. libertador-centro": {
                    texto: "Ruta 65",
                    descripcion: "Salida Terminal de Transferencia de la lucha – retorno en la Av del ferrocarril con carrera 5 Tomamos la glorieta de la lucha hasta conectar con la doble calzada que conduce a ciénaga – derecho hasta el retorno de la entrada del nuevo estadio – retornamos hasta la pequeña glorieta que conduce a curinca – a la derecha entramos al barrio curinca – santa cruz – hasta empalmar con la carrera 22 con calle 46 – giramos a la izquierda hasta la carrera 24 – para luego llegar hasta el límite entre el barrio el parque y santa lucia – continuamos derecho pasando por las bodegas donado hasta el barrio Andrea carolina – para luego salir hasta el barrio el libano 2000 – para luego conectar con la vía que nos lleva a por la universidad Antonio Nariño (sede troncal) – para luego salir a la doble calzada (troncal del caribe) – hasta la glorieta de mamatoco – giramos a la izquierda hacia mamatoco – hasta la Av. del libertador – Av del libertador hasta la Av. del ferrocarril – giramos a la derecha hasta llegar a la carrera 1ª (camellón turístico) – seguimos hasta la calle 22 (santa Rita) – giramos a la izquierda hasta llegar a la carrera 5 con calle 22 – luego giramos a la izquierda para tomar la carrera 5 y pasar por el centro histórico de la ciudad – hasta llegar a la Av. del ferrocarril con carrera 5 – giramos a la derecha derecha por toda la Av. del ferrocarril hasta la Av del libertador – giramos a la izquierda y recorremos toda la Av del libertador hasta la glorieta de la quinta de san pedro alejandrino – giramos a la izquierda por la glorita hasta empalmar con la glorieta de mamatoco – girando a la derecha tomamos la doble calzada hasta la glorieta de la piragua – realizamos toda la vuelta a la glorieta retornamos hasta la entrada de la universidad Antonio Nariño – giramos a la derecha para realizar el circuito interno por los barrios Líbano 2000, altos de santa cruz, santa lucia, villas de santa cruz , parque, curinca – para luego salir a la doble calzada por la lucha – tomamos la glorieta sierra nevada por debajo del puente hasta finalizar en la terminal de transferencia de la lucha.",
                    imagen: "/img/Ruta9.jpeg"
                },
                "av. libertador-mamatoco": {
                    texto: "Ruta 66",
                    descripcion: "Salida Terminal de Transferencia de mamatoco – Regreso Ciudad Equidad Tomamos la glorieta hacia la derecha, desviamos por debajo de la glorieta que toma la vía hacia Riohacha y tomamos la vía a minca – pasamos por arriba del puente que está justo frente de villa Toledo – tomamos la carretera hacia minca – llegamos hasta la entrada de ciudad equidad – hacemos un recorrido interno hasta la manzana 10 .- retornamos hacia la entrada – regresamos por la vía a minca hasta llegar a la variante de la vía a Riohacha – hacia la izquierda llegamos a la glorieta de mamatoco – hasta la glorieta del Buenavista – tomamos toda la Av. del libertador hasta la Av. del ferrocarril – hasta la carrera 1 (camellón turístico) – carrera 1 hasta la calle 22 – calle 22 hasta la carrera 5 – a la izquierda transitamos todo el centro de la ciudad hasta la Av del ferrocarril – hasta la Av del libertador – tomamos toda esta avenida hasta la glorieta del Buenavista – para finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta10.jpeg"
                },
                "av. libertador-ciudad equidad": {
                    texto: "Ruta 67",
                    descripcion: "Salida Terminal de Transferencia de mamatoco – Regreso Ciudad Equidad Tomamos la glorieta hacia la derecha, desviamos por debajo de la glorieta que toma la vía hacia Riohacha y tomamos la vía a minca – pasamos por arriba del puente que está justo frente de villa Toledo – tomamos la carretera hacia minca – llegamos hasta la entrada de ciudad equidad – hacemos un recorrido interno hasta la manzana 10 .- retornamos hacia la entrada – regresamos por la vía a minca hasta llegar a la variante de la vía a Riohacha – hacia la izquierda llegamos a la glorieta de mamatoco – hasta la glorieta del Buenavista – tomamos toda la Av. del libertador hasta la Av. del ferrocarril – hasta la carrera 1 (camellón turístico) – carrera 1 hasta la calle 22 – calle 22 hasta la carrera 5 – a la izquierda transitamos todo el centro de la ciudad hasta la Av del ferrocarril – hasta la Av del libertador – tomamos toda esta avenida hasta la glorieta del Buenavista – para finalizar en la terminal de transferencia de gaira.",
                    imagen: "/img/Ruta10.jpeg"
                },
                "av. libertador-timayui": {
                    texto: "Ruta 71",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                },
                "av. libertador-taganga": {
                    texto: "Ruta 72",
                    descripcion: "Salida Terminal de Transferencia de Mamatoco – Punto de retorno Taganga. Tomando la glorieta de mamatoco – tomando la troncal del caribe hacia Riohacha – entrando a garagoa – cantilito – pasamos el puente hacia timayui- recorrido por timayui 1 y 2 – regresamos por la misma vía hasta la troncal del caribe – glorieta de mamatoco – pasando por Buenavista hasta la Av. del libertador – Av del libertador hasta la carrera 24 – carrera 24 hasta Av. santa Rita (calle 22) – calle 22 hasta carrera 5 – carrera 5 hasta Av. del Ferrocarril – tomamos la calle 11 (mercado público), Hasta la carrera 11 – carrera 11 hasta taganga – una vez allí realizamos un recorrido interno hasta “santropel” pasando por el nuevo IED de taganga – regresamos hasta finalizar en el camellón del corregimiento – una vez allí iniciamos el recorrido de regreso – bajamos de taganga – carrera 11 hasta la calle 10 – calle 10 hasta carrera 5 – Av. del ferrocarril hasta carrera 1– carrera 1hasta la calle 22 – calle 22 hasta la carrera 24 – carrera 24 hasta Av del Libertador –Av del libertador hasta la glorita del Buenavista – finalizando en la terminal de transferencia de mamatoco",
                    imagen: "/img/Ruta1.jpeg"
                }
            },
            rutaSeleccionada: null
        };
    },
    methods: {
        togglePanel(clave) {
            this.rutaSeleccionada = this.rutaSeleccionada === clave ? null : clave;
        }
    },
    created() {
        this.rutaSeleccionada = this.$route.params.ruta;
    }
};
</script>

<style scoped>

div {
    background-color: #000;
    padding: 20px;
    color: white;
}


.accordion {
    background-color: #f1f1f1;
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: -10px;
    cursor: pointer;
    width: 100%;
    text-align: left;
    font-size: 18px;
    transition: background-color 1s;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px; 
}


.accordion:hover,
.accordion.active {
    background-color: #ccc;
}

.arrow {
    font-size: 20px;
    transition: transform 0.9s ease;
}


.accordion.active .arrow {
    transform: rotate(90deg);
}


.panel {
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.9s ease-out, opacity 0.9s ease-out, padding 0.9s ease-out;
    padding: 0 10px;
    background: #1e1e1e;
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 8px; 
    box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}

.panel.show {
    max-height: 1500px;
    opacity: 1;
    padding: 10px;
}

.lol{
    display: inline-block;
    padding: 10px 15px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none; 
    border-radius: 5px; 
    font-size: 16px; 
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease; 
}

.lol:hover {
    background-color:#151010; 
    transform: scale(1.05);
}


</style>
