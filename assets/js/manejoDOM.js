// /*
// Cuando hablamos del DOM, estamos hablando de dos representaciones de nuestra página: una de ellas es la representación del código fuente que es (la estructura del HTML) y la otra es la representación visual (la estructura del DOM).

// Nodos
// Es la unidad más básica que puede ser modificada, que puede ser una etiqueta o element o un nodo de texto.

// <h1> //papá
//     HOLA GENERATION //hijito o nodo de texto
// </h1>

//     Document: El nodo raís a partir del cual se derivan los demás nodos. Este objeto es el que nos permite acceder a todos los elementos del DOM. Todos los nodos derivan del document.

//     Element: Son los nodos definidos por la etiqueta html. Por ejemlpo, una etiqueta <div></div<, <h1></h1>, etc.

//         <h1> //nodo elemento (padre)
//             HOLA GENERATION //nodo texto (hijo)
//         </h1>
    
//     Text: El texto que está dentro de un element o etiqueta.

//     Atributos: Los atributos de las etiquetas definen nodos (en JS no los vemos tal cual como nodos, si no como información asociada al nodo del tipo element).

//     Comentarios y otros: Los comentarios y otros elementos como las declaraciones doctype en la cabecera de los documentos HTML tambi´n generan nodos.

//     Con JavaScript podemos cambiar:

//     -Todos los elementos HTML de una página
//     -Todos los atributos de la página web
//     -Todos los estilos CSS de la página web
//     -Eliminar elementos y atributos
//     -Reaccionar a todos los eventos HTML que existean en la página
//     -Crear nuevos elementos HTML en la página


//     Métodos de selección de elementos

//     Son elementos que nos van a permitir seleccionar uno o varios elementos o grupos de elementos del DOM. stos métodos se utilizan en el document, por eso se agrega antes del GET.

// */

// // let parrafo = "Hola Generation";

// /*
// let parrafo2 = document.getElementById("parrafo");

// const cambioDeParrafo = document.getElementById("parrafo2").innerHTML = "Quiero chilaquiles verdes";

// SELECCIONAR ELEMENTOS

//     Sirven para realizar búsquedas de elementos dentro del documento

//     -getElementById("IDElemento"): Buscar elementos por el ID
//     -getElementsByClassName("nombreClase"): Busca elementos por el nombre de clase
//     -getElementsByTagName(): Busca un elemento por su etiqueta
//     -getElementsByName(): Busca un elemento por su nombre -ya casi no se usa-

//     Métodos modernos

//     -querySelector(): Buscar el PRIMER elemento que coincida con el selector
//     -querySelectorAll(): Busca TODOS los elementos que coinciden con el selector

// */

// //getElementByID()
// const elementID = document.getElementById("parrafo4");

// //getElementsBYClassName()
// const elementClass = document.getElementsByClassName("parrafitos");
// // En el documento busca todo lo que coincida con este nombre de clase: parrafitos
// const elementTag = document.getElementsByTagName("p");
// const elementName = document.getElementsByName ("primerparrafo");

// // Estamos manipulando la virtualidad de estos elementos, por eso NO se considera un arreglo.

// //querySelector()
// //Nos trae el primer elemento
// const querySelector = document.querySelector("#parrafo3")
// //De mi documento vas a traer o hacer una consulta que coincida con este selector: ID
// const querySelector2 = document.querySelector(".parrafitos");

// //querySelectorAll()
// //Solamnete se utiliza para traernos clases
// const querySelectorAll = document.querySelectorAll(".parrafitos");

// /*
// CREAR ELEMENTOS

//     - createElement(): Crea un elemento EN MEMORIA del tipo element (<div></div>)
//     - createComment(): Crea un nodo del tipo comentario
//     - createTextNode(): Crea un nodo del tipo texto
    
//     -cloneNode(): Clonar un elemento
//     TAREA:
//     -Investigar los métodos para añadir, modificar y eliminar atributos
// */

// //createElement
// const crearDiv = document.createElement("div");
// //Y ya está creado
// const crearImagen = document.createElement("img");

// //createTextNode()
// const textNode = document.createTextNode("Hola a todxs, me gustan los chilaquiles verdes");

// //clodeNode()
// const parrafoAClonar = document.createElement("p");
// //crear elemento etiqueta de tipo párrafo para poder clonar después
// parrafoAClonar.textContent = "Soy un parrafo, clóname";
// //Al párrafo le pones el texto

// const parrafoClon = parrafoAClonar.cloneNode(true);
// //Si quiero que clone todo lo que engloba (dentro de) hay que poner true

// const encabezadoOriginal = document.getElementById("encabezado");
// //selecciono el encabezado

// const encabezadoClon1 = encabezadoOriginal.cloneNode();
// //Clono el encabezado
// //sin true no copia todo
// const encabezadoClon2 = encabezado.cloneNode(true);

// //Métodos para añadir, modificar y eliminar atributos

// /*
// MODIFICAR ELEMENTOS 

// Son métodos que nos van a permitir hacer modificaciones a nuestros elementos dentro del documento HTML

//     - textContent: Mostrar el contenido en teto de un elemento
//     - innerHTML: Modificar el contenido de un elemento
//     -outerHTML: Mostrar el contenido con todo y etiquetas

//     */
    
//     //textContent
//     //Solamente podremos utlizar cuando llamemos por ID
//     encabezado.textContent;
//     parrafo1.textContent;
//     parrafo2.textContent;

//     //innerHTML
//     parrafo1.innerHTML = ("Lo siento, ahora yo soy el texto del párrafo 1");

//     //Ejemplo del PlayStation
//     // nombreProducto.innerHTML =("PLayStation 5");
//     // precioProducto.innerHTML=("15000");
//     // imagenProducto.innerHTML=("imagen.jpg");

//     //outerHTML
//     //Nos va a mostrar todo el contenido incluido en las etiquetas
//     encabezado.outerHTML;
//     parrafo1.outerHTML;

//     /*
//     INSERTAR ELEMENTOS

//     Son metodos que nos permiten poner la información que estaba en una meoria virtual de forma visual en nuestro documento

//         - .appenChild()
//         - .remove
//         - .removeChild()  <-INVESTIGAR
//         - .replaceChild() --INVESTIGAR
//     */

//     //appenChild()
//     const appendImg = document.createElement("img");
//     //Agregarle el atributo src
//     appendImg.src = "https://cdns-images.dzcdn.net/images/artist/098ea0886f463cf48b75d2af855ad3b9/500x500.jpg";

//     //Quiero añadirle otro atributo
//     appendImg.alt ="Imagen Sorpresa";

//     //aterrizarlo en una parte en específico
//     document.body.appendChild(appendImg);

//     const appendParrafo = document.createElement("p");
//     appendParrafo.innerHTML = ("Hola, soy un párrafo hijo");

//     document.body.appendChild(appendParrafo);

//     //Explicación: Primero creamos un elemento (etiqueta) llamada img (existe de forma virtual), le agregamos atributos como src y alt, y por último conectamos al DOM usando el appendChild sobre nuestro document.body

//     //Investigar la parte de remover child, replacer child y otras formas de agregarlos (antes, adyacente, a un lado, etc.)

//     //.remove
//     const borrar = document.querySelector("#parrafo4");
//     borrar.remove();

//     const borrarRefactorizado = document.querySelector ("#parrafo2").remove();

// /*

// MODIFICACIÓN DE ESTILOS (EN LÍNEA)

// */
// //Del document trae todo lo que coincida con este id:
// document.getElementById("temerarios").style.color = "green";
// document.getElementById("temerarios").style.fontSize = "50px";
// document.getElementById("temerarios").style.fontFamily = "Arial";
// document.getElementById("temerarios").style.fontWeight = "bold";
// document.getElementById("temerarios").style.fontStyle= "italic";
// document.getElementById("temerarios").style.textDecoration = "underline";
// document.getElementById("temerarios").style.textAlign = "center";
// document.getElementById("temerarios").style.textTransform = "uppercase";
// document.getElementById("temerarios").style.letterSpacing = "2px";
// document.getElementById("temerarios").style.wordSpacing = "2px";


/*

EVENTOS

Una forma mucho mas facil de modificar el contenido de un elemento es usando eventos. Los eventos son acciones que se puedne realizar en un elemento, para modificar los valores de los atributos, estilos, etc.

Algunos de los eventos mas comunes son:

- Cuando un usuario hace clic con el raton
- Cuando se ha cargado una pagina web
- Cuando se ha cargado una imagen
- Cuando el raton se mueve sobre un elemento
- Cuando se cambia un campo de entrada
- Cuando se envia un formulario HTML
- Cuando un usuario pulsa una tecla


- Evento mediante HTMl (mala practica)

Es la forma más sencilla, pero menos recomendable, porque se ejecutan desde el HTML y no queremos mezclar JS con el HTML.

<button onclick="alert('Hola, gracias por saludarme')">SALUDAR</button>

- Eventos mediante el DOM (HTML + JS) (mas o menos una mala practica)

Es una forma alternativa de gestionar eventos, creando HTML desde la API DOM (pero es una trampoa porque seguimos suando HTML para el uso del botón)

En lugar de agregar el atributo onclick al botón, lo localizamos mediante un querySelector. Luego le asignamos una función con el código deseado, en este caso, una alerta.

//Eventos desde el JS (trampa)
const button = document.querySelector(".botonSaludo");
button.onclick = function(){
    alert("Hola desde el JS");
}

- EventListener (buena practica)

Permite agregar una escucha del evento indicado (primer parámetro), y en el caso de que ocurra, se ejecuta la función asociada indicada (segundo parámetro).

.addEventListener(evento, function);

*/

const button = document.querySelector(".botonSaludo");
button.addEventListener("click", function(){
    alert("Hola, saludos con un Event Listener");
});





