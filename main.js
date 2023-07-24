fetch('http://localhost:1337/api/areas/1')
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