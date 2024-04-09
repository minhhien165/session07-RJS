class Book {
    title: string;
    author: string;
    price: number;
  
    constructor(title: string, author: string, price: number) {
      this.title = title;
      this.author = author;
      this.price = price;
    }
  
    printBook(): void {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Price: ${this.price}`);
    }
  
    updateBook(title: string, author: string, price: number): void {
      this.title = title;
      this.author = author;
      this.price = price;
    }
}
let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99);
book.printBook();

book.updateBook("To Kill a Mockingbird", "Harper Lee", 12.99);
book.printBook();