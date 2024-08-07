const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    genre: "Fiction",
    pages: 281,
    getSummary: function() {
      return `${this.title} by ${this.author}, published in ${this.yearPublished}.`;
    }
  };
  
  const {title:t,author:a}=book