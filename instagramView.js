class InstagramView {
    constructor(m) {
        this.model = m;
        console.log("InstagramView constructor", this.model)
    }
    renderPost(post) {
        console.log("renderPost", this.model)
        var container = document.getElementById("posts");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (var i = 0; i < this.model.posts.length; i++) {
            var post = this.model.posts[i];
        }
    }
}

    export default InstagramView;