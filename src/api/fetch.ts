const BASE_URL = process.env.PUBLIC_URL;

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

export const getItems = async <T>(url: string): Promise<T> => {
  return wait(300)
    .then(() => fetch(`${BASE_URL}/${url}`))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
};
