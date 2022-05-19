const getTheTitles = function(input) {
    let titles = input.map(book => book.title )
    console.table(titles)
    return titles
};

// Do not edit below this line
//module.exports = getTheTitles;

const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]


getTheTitles(books)