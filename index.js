import InstagramModel from "./instagramModel"
import InstagramView from "./instagramView"
import InstagramController from "./instagramController"


var model = new InstagramModel()
var view = new InstagramView(model)
var controller = new InstagramController(model, view)

var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    var input = document.getElementById("newText").value;
    controller.searchByTag(input)
});