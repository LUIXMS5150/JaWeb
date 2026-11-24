
<?php

$db_direccion = "127.0.0.1";
$db_usuario = "root";
$db_pass = "";
$db_nombre = "jaweb";
$db_port = "3306";

$conexion =mysqli_connect($db_direccion, $db_usuario, $db_pass, $db_nombre, $db_port);

if (!$conexion) {
    die("No se Pudo Realizar la Conexion".mysql_error());
}
echo ("Conexion Realizada Con Exito")
?>



<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JAPWEB-Viaja</title>
    <link href="..\CSS\Styles.css" rel="stylesheet">
</head>
<body>
    <!--Encabezado-->
    <header>
        <nav class="nav-encabezado">
            <div class="nav-container">
                <a href="../index.html" class="logo">Jap<span>Web</span></a>
                <button class="menu-btn" id="menubtn">☰</button>
                <ul class="nav-links" id="navlinks">
                    <li><a href="..\ENLACES/aprende.html">Aprende</a></li>
                    <li><a href="..\ENLACES/cultura.html">Cultura</a></li>
                    <li><a href="..\ENLACES/historia.html">Historia</a></li>
                    <li><a href="..\ENLACES/herramientas.html">Herramientas</a></li>
                    <li><a href="..\ENLACES/viaja.php">Viaja con Nosotros</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <!--presentacion de la paguina-->
    <section class="presentacion_viaja">
        <div class="presentacion_logo">
            <img src="..\IMG\logo gato.png" class="logopre_viaja">
            <h1>Viaja Con Nosotros</h1>
        </div>
        <div class="container_form">
            <form name="datos_cliente" method="post">
                <div class="input_box">
                    <input name="Nombre" type="text" placeholder="Nombre" required>
                </div>
                <div class="input_box">
                    <input name="Email" type="text" placeholder="E-Mail" required>
                </div>
                <div class="input_box">
                    <input name="Cel" type="text" placeholder="Celular" required>
                </div>
                <div class="input_box">
                    <input name="Ciudad_des" type="text" placeholder="Ciudad Favorita" required>
                </div>
                <div class="botones">
                    <div class="boton_cal">
                        <button type="submit" name="registro">Enviar</button>
                    </div>
                    <div class="boton_cal">
                        <button type="reset" name="" >Limpiar Campos</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    <!--Tabla de Contenido-->
    <section class = "tabla_datos">
        <div class = "contenedor_tabla">
            <table>
                <tr>
                    <th><h3>Id</h3></th>
                    <th><h3>Nombre</h3></th>
                    <th><h3>E-mail</h3></th>
                    <th><h3>Telefono</h3></th>
                    <th><h3>Ciudad a Visitar</h3></th>
                </tr>

<!--Consulta para traer Los Datos disponibles de la Tabla-->
<?php 
    $consulta = "SELECT * FROM clientes";
    $result = mysqli_query($conexion, $consulta);
        while ($column = mysqli_fetch_array($result)){
?>
<tr>
    <td><?php echo $column["id"] ?></td>
    <td><?php echo $column["nombre"] ?></td>
    <td><?php echo $column["email"] ?></td>
    <td><?php echo $column["cel"] ?></td>
    <td><?php echo $column["ciudad_des"] ?></td>
</tr>
<?php
        }
?>
            </table>
        </div>
    </section>
    <!--Pie de paguina-->
    <footer>
        <nav class="nav-pie-paguina">
            <div class="pie-container">
                <ul class="nav-links-pie" id="navlinks-pie">
                    <li><a href="..\ENLACES/aprende.html">Aprende</a></li>
                    <li><a href="..\ENLACES/cultura.html">Cultura</a></li>
                    <li><a href="..\ENLACES/historia.html">Historia</a></li>
                    <li><a href="..\ENLACES/herramientas.html">Herramientas</a></li>
                    <li><a href="..\ENLACES/viaja.php">Viaja con Nosotros</a></li>
                </ul>
                <p class="mensaje">Vive la mejor experiencia con nuestros guias expertos en la cultura japones,
                    o con nuestros guias nativos de japon, apasionados por las experiencias y la cultura extranjera. Tu mejor guia, 
                    para un viaje inolvidable
                </p>
                <h2 class="logo-pie">Jap<span>Web</span></h2>
                <br>
                <h3 class="firma">© Luis Munevar Solano--Programador Junior</h3>
            </div>
        </nav>
    </footer>
    <script src="..\JS\script_pags.js"></script>
</body>
</html>


<?php 

if (isset($_POST["registro"])) {
    $nombre = $_POST["Nombre"];
    $email = $_POST["Email"];
    $cel = $_POST["Cel"];
    $ciudad_des = $_POST["Ciudad_des"];

//Creacion De La Consulta 

$insertar_datos = "INSERT INTO clientes VALUES ('','$nombre','$email','$cel','$ciudad_des')";

//Ejecutar la Consulta 

$ejecutar_insert = mysqli_query($conexion, $insertar_datos);

//Metodo de refresco para evitar duplicidad

unset($_POST["Refrescar formulario"]);
    header("Location: http://localhost/Jaweb/ENLACES/viaja.php ");

}

?>