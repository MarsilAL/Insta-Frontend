class InstagramController {
    constructor(instaModel, instaView){
        this.view = instaView;
        this.model = instaModel;
        console.log('hio')
    }

    searchByTag(tag){
        console.log('searchByTag:', this.view, this.model);
        var searchByTag = new tag(input);
    }        
}



export default InstagramController;