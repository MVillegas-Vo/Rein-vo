Caneca Inteligente Clasificadora de Residuos
Integrantes del Equipo
Estudiante A - Grado 11-1
Estudiante B - Grado 11-1
Descripción General

Proyecto tecnológico enfocado en el desarrollo de una caneca inteligente capaz de identificar y clasificar automáticamente diferentes tipos de residuos mediante visión artificial e inteligencia artificial.

El sistema utiliza una ESP32-S3 CAM junto con una cámara OV2640 para capturar imágenes de los residuos. Estas imágenes son procesadas mediante un modelo de inteligencia artificial desarrollado en Edge Impulse, permitiendo identificar el tipo de residuo y determinar el contenedor correspondiente.

La caneca cuenta con un sistema Pan-Tilt que permite controlar el movimiento para dirigir y depositar el residuo en uno de los tres contenedores disponibles.

Problema Identificado

La separación incorrecta de los residuos dificulta su aprovechamiento y aumenta la cantidad de materiales que terminan mezclados en un mismo recipiente.

En el entorno escolar, la clasificación de residuos depende principalmente de la intervención manual, lo que puede generar errores durante la separación. Por esta razón, se propone una solución automatizada que facilite la identificación y clasificación de los residuos.

Objetivo General

Desarrollar una caneca inteligente capaz de identificar diferentes tipos de residuos mediante visión artificial y clasificarlos automáticamente utilizando un sistema Pan-Tilt, con el propósito de mejorar la separación y disposición de los residuos en el entorno escolar.

Tecnologías Utilizadas
ESP32-S3 CAM
Cámara OV2640
Edge Impulse
C/C++
Arduino IDE
Git y GitHub
Componentes Principales
ESP32-S3 CAM
Cámara OV2640
Sistema Pan-Tilt
Tres contenedores para residuos
Servomotores
Fuente de alimentación
Cargador
Estructura mecánica
Funcionamiento del Sistema

El usuario deposita un residuo en la caneca. La ESP32-S3 CAM captura una imagen mediante la cámara OV2640 y el modelo de inteligencia artificial desarrollado en Edge Impulse analiza el objeto para determinar su clasificación.

Una vez identificado el residuo, el sistema controla el mecanismo Pan-Tilt para posicionarlo correctamente y depositarlo en el contenedor correspondiente. De esta manera, el proceso de separación se realiza de forma automatizada.

Estado del Proyecto

Fase 1: Diseño, estructuración y desarrollo inicial del sistema de clasificación automática de residuos. Se encuentra en proceso la integración de la ESP32-S3 CAM, el modelo de inteligencia artificial desarrollado con Edge Impulse, el sistema Pan-Tilt y los tres contenedores.

Autores

Proyecto desarrollado por estudiantes de Grado 11 con fines académicos y educativos, orientado a la implementación de tecnologías de inteligencia artificial y automatización para mejorar la gestión de residuos en el entorno escolar.