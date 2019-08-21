export class Book{
    id: string;
    title: string;
    smallThumbnail: string;
    description: string;

    constructor(id: string, title: string, smallThumbnail: string, description: string){
        this.id = id;
        this.title = title;
        this.smallThumbnail = smallThumbnail;
        this.description = description;
    }
}