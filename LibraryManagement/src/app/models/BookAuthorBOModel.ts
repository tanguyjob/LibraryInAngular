export class BookAuthorBOModel {
    bookId!: number;
    title!: string;
    resume!: string;
    activeBook!:boolean;
    fk_Book_Language!:number;
    authorId!: number;
    name!: string;
    firstname!: string;
    birthDate!: Date;
    isActive!:boolean;
}