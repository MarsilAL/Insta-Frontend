class InstagramView {
    constructor(m) {
        this.model = m;
        console.log("InstagramView constructor", this.model)
    }
    renderPosts() {
        console.log("renderPost", this.model)
        var container = document.getElementById("postslist");
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        for (var i = 0; i < this.model.filterposts.length; i++) {
            var post = this.model.filterposts[i];

            var newShowpost = document.createElement("div");

            var hashtags = document.createTextNode(post.hashtags);
            newShowpost.appendChild(hashtags);

            container.appendChild(newShowpost);

            var newPostImg = document.createElement("img");
            var postImgUrl = post.img
            newPostImg.setAttribute("src", postImgUrl);

            newShowpost.appendChild(newPostImg);

            container.appendChild(newPostImg);

        }

    }
}

export default InstagramView;