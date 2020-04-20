import { Books } from './books.entity';
import { Repository } from 'typeorm';
import { BooksDTO } from './interfaces/books.dto';
export declare class BooksService {
    private readonly booksRepository;
    constructor(booksRepository: Repository<Books>);
    getBooks(): Promise<Books[]>;
    getBook(id: number): Promise<Books>;
    addBook(booksDTO: BooksDTO): Promise<BooksDTO & Books>;
    updateBook(id: string, booksDTO: BooksDTO): Promise<{
        id: string;
        title: string;
        description: string;
        author: string;
    } & Books>;
    deleteBook(id: number): Promise<any>;
}
