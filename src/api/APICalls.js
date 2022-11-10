const apiBaseURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const appKey = '5nwPDFe9MjFbkJMCzkXg/';
const apiURL = apiBaseURL + appKey;

const addBookAPI = async (data) => {
  const response = await fetch(`${apiURL}books/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  }).then((response) => response.text());
  return response;
};

const removeBookAPI = async (id) => {
  const response = await fetch(`${apiURL}books/${id}`, {
    method: 'DELETE',
  }).then((response) => response.text());
  return response;
};

const fetchBooksFromAPI = async () => {
  const fetchedData = await fetch(`${apiURL}books/`)
    .then((response) => response.json());
  return fetchedData;
};

export { addBookAPI, fetchBooksFromAPI, removeBookAPI };
