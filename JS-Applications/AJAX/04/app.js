function getRecipieList() {

    const url = `http://localhost:3030/jsonstore/cookbook/recipes`;

    fetch(url)
        .then(responce => responce.json())
        .then(recipies => {
            console.log(recipies);
        })





        // < article class="preview" >
          // <div class="title">
        //     <h2>Title</h2>
          // </div>
          // <div class="small">
        //     <img src="assets/lasagna.jpg">
          // </div>
        // </article>
}

window.addEventListener('load', () => {
    getRecipieList();
})


function e(type, ...content) {
    const result = document.createElement(type);

    content.forEach(e => {
        if (typeof e == 'string') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
