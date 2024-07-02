async function getPizza() {
    const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    const menu = await response.json();
    const data = menu.recipes;
    console.log(data);
    const result = data.map(function(ele) {
        return `
            <div class = "type-of-pizza">
            <h2>${ele.title}</h2>
            <img src = "${ele.image_url}" />
            </div>
         `
    }).join('');
    document.querySelector(".pizza").innerHTML = result;

}
getPizza();