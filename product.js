alert("JS is working")

var productContainer = document.getElementById("product-container")
var search = document.getElementById("search")

console.log(productContainer)
console.log(search)

var productlist = productContainer.children

search.addEventListener("keyup", function(event) {

    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {

        var productname = productlist[count].querySelector("h2").textContent

        if (productname.toUpperCase().indexOf(enteredValue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})