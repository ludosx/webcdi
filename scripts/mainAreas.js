/*Codigo para crear un slider con html css y javascript*/
const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__content");
let sliderSectionLast = sliderSection[sliderSection.length -1];

 //'La biblioteca cditi es espacio en donde los aprendices puede encontrar libros increibles, que hara volar su imaginacion o brinden ayuda al hacer sus tareas. Tambien pueden hacer uso de los elementos del area como son los computadores, libros, mesas y salones.';

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelector(".slider__content");
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function Rev(){
    let sliderSection = document.querySelectorAll(".slider__content");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
},500);
}

setInterval(function(){
    Next();
},5000);

btnRight.addEventListener("click", function(){
    Next();
   
});

btnLeft.addEventListener("click", function(){
    Rev();
});








/*document.body.onload =async function () {
    const objectWithElements = await logicAreas();
    const parrafo1 = objectWithElements.first;//paragraphWithText.first;
    const parrafo2 = objectWithElements.second;//paragraphWithText.second;
    const parrafo3 = objectWithElements.third;//paragraphWithText.third;
    boton1.addEventListener("click", cambiarParrafo(parrafo1,boton1));
    boton2.addEventListener("click", cambiarParrafo(parrafo2,boton2));
    boton3.addEventListener("click", cambiarParrafo(parrafo3,boton3));
};*/