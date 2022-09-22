const apiId = 'AvIE67KLnFDsdhR2CWwG';
const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const apiUrl = `${baseUrl}/apps/${apiId}/books`;

const addBookToAPI = async (book) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

const removeBookFromAPI = async (book) => {
  const response = await fetch(`${apiUrl}/${book.item_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const text = await response.text();
  return text;
};

const getStateFromAPI = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  const idsArray = Object.keys(data).map((item) => ({
    item_id: item,
  }));
  const booksArray = Object.values(data);
  const booksObject = idsArray.map((item, id) => {
    const book = booksArray[id];
    const { title, author } = book[0];
    return {
      ...item,
      title,
      author,
    };
  });

  const initialState = {
    books: booksObject,
  };
  return initialState;
};

export { addBookToAPI, removeBookFromAPI, getStateFromAPI };
