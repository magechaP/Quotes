export class Quote {
    public showAuthor:boolean;
    public showSubmit:boolean;
    constructor(public id:number, public name:string, public author:string, public submit:string, public upvotes:number, public downvotes:number, public quoteDate:Date){
        this.showAuthor=false;
        this.showSubmit=false;
    }  
}