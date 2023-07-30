import { Book, compareWithTitle } from './Book';

export class Bookshelf {
  private readonly storage = new Map<string, Book>();

  addBook(book: Book) {
    this.storage.set(book.isbn, book);
  }

  getBook(isbn: string): Book {
    const book = this.storage.get(isbn);
    if (!book) {
      throw new Error(`Book with ISBN ${isbn} not found`);
    }
    return book;
  }

  getAllBooks(): Array<Book> {
    return Array.from(this.storage.values()).sort(compareWithTitle);
  }

  getBooksOf(author: string): Array<Book> {
    return this.getAllBooks()
      .filter((book) => book.author === author)
      .sort(compareWithTitle);
  }

  getTotalNumberOfBooks(): number {
    return this.storage.size;
  }

  getBooksPublishedAfter(dateAsString: string): Array<Book> {
    const date = new Date(dateAsString);
    return this.getAllBooks()
      .filter((book) => new Date(book.date) > date)
      .sort(compareWithTitle);
  }
}
