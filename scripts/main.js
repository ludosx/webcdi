const boton1 = document.getElementById('btn1');
const boton2 = document.getElementById('btn2');
const boton3 = document.getElementById('btn3');
var divParrafo = document.getElementById('content-text__parrafo');
var parrafo = document.getElementById('nuevo__parrafo');
const contentSlider = document.getElementById('slider');
var templateSlider = document.getElementById('slider-img').content;
const fragment = new DocumentFragment();
//var imgOfSlider5 = document.getElementById('img-api__strapi2');
var imgText  = document.getElementById('img-from__text');
var idBody = parseInt(document.body.id);

document.addEventListener('DOMContentLoaded',() =>{
    showData();
})


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

async function logicAreas(idBody){
return await fetch("http://localhost:1337/api/into-areas?populate=*")
.then(response => response.json())
.then(data =>{
    console.log(data);
    return data.data[idBody].attributes
})
.catch(error =>{
    console.log("Ocurrio un error");
});
}


async function showData(){
        let sumaWidth= 0;
    const execute = await logicAreas(idBody).then(response=>{
        console.log("show data",response);
        var titleTextContent = document.getElementById('title__text').textContent =response.title;
        var firstText = document.getElementById('first-text__area').textContent =  response.firstTextArea;
        parrafo.textContent = response.firstParagraph;
        
        if(Object.keys(response.imgSlider.data.length !== 0)){
        response.imgSlider.data.forEach(element =>{
        sumaWidth = sumaWidth+100;
        templateSlider.getElementById('img-api__strapi').setAttribute('src', `http://localhost:1337${element.attributes.url}`);
        const clone = templateSlider.cloneNode(true);
        fragment.appendChild(clone);
        })
        contentSlider.style.width = `${sumaWidth}%`;
        contentSlider.appendChild(fragment);
        }
        
        
        if(Object.keys(response.imgIntoText.length !== 0)){
            imgText.setAttribute("src", `http://localhost:1337${response.imgIntoText.data.attributes.formats.large.url}`);
        }
    });
}


boton1.addEventListener("click", async function(){
    divParrafo.innerHTML = '';
    let objectWithElements = await logicAreas(idBody).then(response => {
    parrafo.textContent = response.firstParagraph
    });
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

boton2.addEventListener("click", async function(){
    divParrafo.innerHTML = '';
    var objectWithElements = await logicAreas(idBody).then(response => {
    parrafo.textContent = response.secondParagraph;
    });
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

boton3.addEventListener("click", async function(){
     var objectWithElements = await logicAreas(idBody).then(response => {
    parrafo.textContent = response.thirdParagraph;
    if(idBody === 0){
        divParrafo.innerHTML = '<a href="https://www.fondoemprender.com//SitePages/senaemprenderural.aspx" target="_blank" class="link-fondo__emprender">'
        +'<figure><center><img src = "" class="img-fondo__emprender" id="emprender"></center><figcaption><center>!Fondo Emprender</center></figcaption></figure></a>';
        var getImgParagraph = document.getElementById('emprender');
        getImgParagraph.setAttribute("src", `http://localhost:1337${response.imgIntoParagraph.data.attributes.url}`);
    }
    });
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


/*    var divElement = document.createElement('div');
    divElement.className = "img-parrafo__item1";
    aElement = document.createElement('a');
    aElement.href= 'https://www.fondoemprender.com//SitePages/senaemprenderural.aspx';
    var divElement2 = document.createElement('div');
    divElement.className = "img-parrafo__item1";
    var divElement3 = document.createElement('div');
    divElement.className = "img-parrafo__item1";
    var imgElement = document.createElement('img');
    var imgElement2 = document.createElement('img');
    var imgElement3 = document.createElement('img'); 
     imgElement.src = "";
    imgElement2.src = "";
    imgElement3.src = "";
    */
