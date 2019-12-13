class Post {
    constructor() {
        this.img = "";
        this.user = "";
        this.like = 0;
        this.hashtags = [];
    }
    hastag(tag) {
        for (i = 0; i < this.hashtags.length; i++) {
            if (this.hashtags[i] == tag) return true;
        }
        return false;
    }
}

export default Post;