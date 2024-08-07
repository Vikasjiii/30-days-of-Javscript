const book = {
  title: "Story of Vikas Sahni",
  page: "99 pages",
  year: 2050,
  author: "vikas",
};
console.log(book);
console.log(book.title);
console.log(book.author);

book.intro = function () {
  return `Title : ${book.title} , Author : ${book.author}`;
};
console.log(book.intro());

book.updateYear = function (year) {
  this.year = year;
  console.log(this);
};

const library = {
  name: "Learners Library",
  books: [
    {
      title: "hindi book",
      price: "78",
    },
    {
      title: "english book",
      price: "78",
    },
    {
      title: "math book",
      price: "78",
    },
    {
      title: "sst book",
      price: "78",
    },
    {
      title: "physics book",
      price: "78",
    },
    {
      title: "chemistry book",
      price: "78",
    },
    {
      title: "biology book",
      price: "78",
    },
    {
      title: "art book",
      price: "78",
    },
  ],
};
console.log(library);

console.log(library.name);
library.books.forEach((book) => {
  console.log(book.title);
});
book.getInfo = function () {
  return `Title : ${this.title} , Year : ${this.year}`;
};
console.log("*************");

for (const key in book) {
  console.log(key);
  console.log(book[key]);
  

}

let keys=Object.keys(book)
let keys2=Object.keys(library)
let value=Object.values(book)
let value2=Object.values(library)