class Model {
    constructor() {
        var p1=new Post();
        p1.img="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiCkY7J163mAhUFC-wKHUdWBhoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.arabpng.com%2Fpng-fz80nt%2F&psig=AOvVaw1qB-rzu4BE9nQHq8sMwYfV&ust=1576156695863820"
        p1.hashtags=["Sport", "Kultur"]
        var p2=new Post();
        p2.img="https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjRkM2Nga7mAhUQjqQKHdh1BmUQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F4737772%2Fconfused_employee_confused_man_thinking_employee_thinking_man_thinking_person_icon&psig=AOvVaw1qB-rzu4BE9nQHq8sMwYfV&ust=1576156695863820"
        p2.hashtags=["Politik", "Musik"]
        this.posts = [p1,p2,p3];
        var p3=new Post();
        p3.img="https://www.google.de/url?sa=i&source=images&cd=&ved=2ahUKEwiUn9bvga7mAhWIjqQKHUtzDDMQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.wrike.com%2Fblog%2F3-techniques-giving-feedback-manager%2F&psig=AOvVaw2pTQl7NPz_9rhMpq0v9ral&ust=1576168097894119"
        p3.hashtags=["gggg"]
        this.filterposts = []
    }
    filterByTag(tag) {
        this.filterposts=[];
        for (i = 0; i < this.posts.length; i++) {
            var post = this.posts[i]
            if (post.hastag(tag)) {
                this.filterposts.push (post)
            }
        }
    }

}

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
