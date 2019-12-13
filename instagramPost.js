export default class InstagramPost {
    constructor() {
        this.img = "";
        this.user = "";
        this.like = 0;
        this.hashtags = [];
    }
    hastag(tag) {
        for (var i = 0; i < this.hashtags.length; i++) {
            if (this.hashtags[i] == tag) return true;
        }
        return false;
    }
}