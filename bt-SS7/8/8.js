"use strict";
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    printBook() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Price: ${this.price}`);
    }
    updateBook(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 15.99);
book.printBook();
book.updateBook("To Kill a Mockingbird", "Harper Lee", 12.99);
book.printBook();
