import { Controller, Get, Param, Post, Body, Delete, Put, BadRequestException, NotFoundException} from "@nestjs/common";
import { BooksService } from "./books.service";
import { BooksDTO } from './interfaces/books.dto';

@Controller("books")
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get()
  async getBooks() {
    return await this.booksService.getBooks();
  }

  @Get(':id')
  async getBook(@Param('id') id) {
    const getItem = await this.booksService.getBook(id);
    // if (getItem === undefined) {
    //     throw new BadRequestException('Invalid Book');
    // }
    if (!getItem) throw new NotFoundException('Book Not Found')
    return getItem;
  }

  @Post()
  async addBook(@Body() bookDTO: BooksDTO) {
    return await this.booksService.addBook(bookDTO);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() bookDTO: BooksDTO) {
    return await this.booksService.updateBook(id, bookDTO);
  }
  
  @Delete(':id')
  async deleteBook(@Param('id') id) {
    return await this.booksService.deleteBook(id);
  }
}
