import { Injectable, HttpException } from "@nestjs/common";
import { Books } from './books.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BooksDTO } from './interfaces/books.dto'
@Injectable()
export class BooksService {

  constructor(@InjectRepository(Books)
  private readonly booksRepository: Repository<Books>) {
    console.log('books service called');
  }

  async getBooks(): Promise<Books[]>{
    return await this.booksRepository.find();
  } 

  async getBook(id: number): Promise<Books> {
    return await this.booksRepository.findOne({where: {id: id}});
  }

  async addBook(booksDTO: BooksDTO) {
    return await this.booksRepository.save(booksDTO);
  } 

  async updateBook(id: string, booksDTO: BooksDTO){
    return await this.booksRepository.save({ ...booksDTO, id: id });
  };

  async deleteBook(id: number): Promise<any> {
    return await this.booksRepository.delete(id);
  }

}
