import { BooksService } from "./books.service";
import { BooksDTO } from './interfaces/books.dto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    getBooks(): Promise<import("./books.entity").Books[]>;
    getBook(id: any): Promise<import("./books.entity").Books>;
    addBook(bookDTO: BooksDTO): Promise<BooksDTO & import("./books.entity").Books>;
    update(id: string, bookDTO: BooksDTO): Promise<{
        id: string;
        title: string;
        description: string;
        author: string;
    } & import("./books.entity").Books>;
    deleteBook(id: any): Promise<any>;
}
