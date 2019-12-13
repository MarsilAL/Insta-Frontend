import InstagramModel from "./instagramModel"
import InstagramView from "./instagramView"
import InstagramController from "./instagramController"


var instaModel = new InstagramModel()
var instaView = new InstagramView(instaModel)
var instaController = new InstagramController(instaModel, instaView)

var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", (ev) => {
    ev.preventDefault();

    var input = document.getElementById("newTag").value;
    instaController.searchByTag(input);
});