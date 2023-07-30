import { ISBN } from './ISBN';

export interface Book {
  /**
   * International Standard Book Number of the book
   */
  isbn: ISBN;

  /**
   * Title of the book
   */
  title: string;

  /**
   * Author of the book
   */
  author: string;

  /**
   * Date of publication of the book
   */
  date: string;
}

export const compareWithTitle = (a: Book, b: Book): number => {
  return a.title.localeCompare(b.title);
};
