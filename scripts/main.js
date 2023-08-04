const boton1 = document.getElementById('btn1');
const boton2 = document.getElementById('btn2');
const boton3 = document.getElementById('btn3');


/*fetch('http://localhost:1337/api/areas/1')
.then(response => response.json())
.then(data => {
    document.getElementById("title-1").innerHTML = data.data.attributes.title;
    document.getElementById("title-1-back").innerHTML = data.data.attributes.title;
    document.getElementById("description-1").innerHTML = data.data.attributes.description;
});

fetch('http://localhost:1337/api/areas/2')
.then(response => response.json())
.then(data => {
    document.getElementById("title-2").innerHTML = data.data.attributes.title;
    document.getElementById("title-2-back").innerHTML = data.data.attributes.title;
    document.getElementById("description-2").innerHTML = data.data.attributes.description;
});
*/
//Logic about areas



function logicAreas(){

const contentParagraph = {
    first: '',
    second: '',
    third: ''
};

fetch("http://localhost:1337/api/into-areas")
.then(response => response.json())
.then(data =>{
    var titleTextContent = document.getElementById('title__text');
    var firstText = document.getElementById('first-text__area');
    data.data.forEach(element =>{
        titleTextContent.textContent = element.attributes.title;
        firstText.textContent =  element.attributes.firstTextArea;

        paragraph1= element.attributes.firstParagraph;
        paragraph2= element.attributes.secondParagraph;
        paragraph3= element.attributes.thirdParagraph;

    });
        contentParagraph.first= paragraph1;
        contentParagraph.second= paragraph2;
        contentParagraph.third= paragraph3;

})
.catch(error =>{
    console.log("Ocurrio un error");
});

console.log(contentParagraph.first);
return contentParagraph;

}


boton1.addEventListener("click", async function(){
    var objectWithElements = await logicAreas();
    console.log(objectWithElements);
    var parrafo = document.getElementById('nuevo__parrafo');
    parrafo.innerHTML = objectWithElements.first;

    boton1.style.backgroundColor = '#0bb20b';
    boton1.style.color = 'white';
    boton1.style.borderBottom = 'solid black 2.5px';
    boton2.style.backgroundColor = '#f2f3f7';
    boton2.style.color = 'black';
    boton2.style.borderBottom = 'none';
    boton3.style.backgroundColor = '#f2f3f7';
    boton3.style.color = 'black';
    boton3.style.borderBottom = 'none';
});

boton2.addEventListener("click", function(){
    var objectWithElements = logicAreas();
    var parrafo = document.getElementById('nuevo__parrafo');
    parrafo.textContent = objectWithElements.second;

    boton2.style.backgroundColor = '#0bb20b';
    boton2.style.color = 'white';
    boton2.style.borderBottom = 'solid black 2.5px';
    boton1.style.backgroundColor = '#f2f3f7';
    boton1.style.color = 'black';
    boton1.style.borderBottom = 'none';
    boton3.style.backgroundColor = '#f2f3f7';
    boton3.style.color = 'black';
    boton3.style.borderBottom = 'none';
});

boton3.addEventListener("click", function(){
    var objectWithElements = logicAreas();
    var parrafo = document.getElementById('nuevo__parrafo');
    parrafo.textContent = objectWithElements.third;

    boton3.style.backgroundColor = '#0bb20b';
    boton3.style.color = 'white';
    boton3.style.borderBottom = 'solid black 2.5px';
    boton1.style.backgroundColor = '#f2f3f7';
    boton1.style.color = 'black';
    boton1.style.borderBottom = 'none';
    boton2.style.backgroundColor = '#f2f3f7';
    boton2.style.color ='black';
    boton2.style.borderBottom = 'none';
});
