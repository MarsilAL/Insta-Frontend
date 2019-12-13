class InstagramController {
    constructor(instaModel, instaView) {
        this.view = instaView;
        this.model = instaModel;
        console.log('hio')
    }

    searchByTag(tag) {
        console.log('searchByTag:', tag);

        //var searchByTag = new tag(input);
        this.model.filterByTag(tag);
        this.view.renderPosts(tag);

    }
}
export default InstagramController;