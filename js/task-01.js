const categories  = document.getElementById("categories").querySelectorAll(".item")

console.log(`Number of categories: ${categories.length}`)

categories.forEach(categorie => 
    {
        console.log("###############################################")
        let categorieName = categorie.querySelector("h2").textContent;
        let filtersCount = categorie.querySelectorAll("li").length;
        console.log(`Category: ${categorieName}`);
        console.log(`Elements: ${filtersCount}`)
    }
 )
 console.log("###############################################")
