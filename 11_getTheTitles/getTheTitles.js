const getTheTitles = function() {

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


      let maps = books.map(book => book.title);
      return maps;


};

// Do not edit below this line
module.exports = getTheTitles;
