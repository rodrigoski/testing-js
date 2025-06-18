/* Nuestro objeto de pruebas */
const BooksService = require('./books.service.js');

const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => newBook
};

const fakeBooks = [
  {
    _id: 1,
    name: "Cien años de soledad"
  }
];

const newBook = {
  _id: 2,
  title: 'El Principito',
  author: 'Antoine de Saint-Exupéry',
  year: 1943,
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe('Test for getBooks()', () => {
    test('debería devolver una lista de libros', async () => {
      const books = await service.getBooks({});
      console.log(books);
      expect(books.length).toEqual(1);
      expect(books[0].name).toBe("Cien años de soledad");
    });
  });

  describe('Test for createBooks()', () => {
    test('debería crear un nuevo libro', async () => {
      const book = await service.createBook({});
      console.log(book);
      expect(book.title).toEqual("El Principito");
      expect(book.author).toEqual("Antoine de Saint-Exupéry");
    });
  });
});

