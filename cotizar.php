<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuestros Productos - Ventiver Servicios</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .productos-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .producto {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .producto img {
            max-width: 100%;
            height: auto;
            border-radius: 8px;
        }
        .producto h2 {
            font-size: 1.5em;
            margin: 10px 0;
        }
        .producto p {
            color: #666;
        }
        .producto button {
            background-color: #007bff;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        .producto button:hover {
            background-color: #0056b3;
        }
        .regresar-btn {
            display: block;
            width: 100%;
            text-align: center;
            margin-top: 40px;
        }
        .regresar-btn a {
            background-color: #007bff;
            color: white;
            padding: 10px 20px;
            border-radius: 5px;
            text-decoration: none;
        }
        .regresar-btn a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

    <h1>Nuestros Productos</h1>
    <p style="text-align: center;">Explora nuestra variedad de productos de ventilación industrial diseñados para optimizar tus procesos.</p>

    <div class="productos-container">
        <div class="producto">
            <img src="ventilador-axial.jpg" alt="Ventilador Axial">
            <h2>Ventilador Axial</h2>
            <p>Alta eficiencia y rendimiento en ventilación.</p>
            <button onclick="location.href='ventilador-axial.html'">Más información</button>
        </div>

        <div class="producto">
            <img src="extractor-aire-industrial.jpg" alt="Extractor de Aire Industrial">
            <h2>Extractor de Aire Industrial</h2>
            <p>Solución ideal para la extracción de aire en espacios industriales.</p>
            <button onclick="location.href='extractor-aire-industrial.html'">Más información</button>
        </div>

        <div class="producto">
            <img src="ventilador-centrifugo.jpg" alt="Ventilador Centrífugo">
            <h2>Ventilador Centrífugo</h2>
            <p>Diseñado para máxima potencia en ventilación forzada.</p>
            <button onclick="location.href='ventilador-centrifugo.html'">Más información</button>
        </div>


    </div>

    <div class="regresar-btn">
        <a href="index.html">Regresar</a>
    </div>

</body>
</html>
