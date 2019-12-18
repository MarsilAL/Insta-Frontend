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

            var newShowpost = document.createElement("figure");
            newShowpost.className = 'newShowpost';
            var user = document.createTextNode(post.user);
            user.className = 'userName';
            var newPostUser = document.createElement("p");
            newPostUser.className ='newPostUser';
            var textHash = document.createTextNode("This is the results for The Hashtag :")
            var hashtags = document.createTextNode(post.hashtags);
            hashtags.className = 'hashtags';
            var newPostImg = document.createElement("img");
            var postImgUrl = post.img

            newShowpost.appendChild(newPostUser);
            container.appendChild(newShowpost);
            newShowpost.appendChild(newPostImg);
            newShowpost.appendChild(textHash);




            newPostImg.setAttribute("src", postImgUrl);
            
            

            newShowpost.appendChild(newPostImg);

            
            document.getElementById("postslist").appendChild(user);
            document.getElementById("postslist").appendChild(newShowpost);
            document.getElementById("postslist").appendChild(textHash);
            document.getElementById("postslist").appendChild(hashtags);
            
            

            container.appendChild(newShowpost);
            container.appendChild(newPostUser);
            newShowpost.appendChild(hashtags);
            newShowpost.appendChild(user);
        }
    }
}

export default InstagramView;