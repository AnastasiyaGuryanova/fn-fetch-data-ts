type CommentType = {
  id: number;
  email: string;
  [key: string]: any;
};

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Ошибка HTTP! статус: ${response.status} в ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Ошибка извлечения данных:", error);
    throw error;
  }
};

const getData = async (url: string): Promise<CommentType[]> => {
  return fetchData<CommentType[]>(url);
};

const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";

getData(COMMENTS_URL)
  .then((comments) => {
    comments.forEach(({ id, email }) => {
      console.log(`ID: ${id}, Email: ${email}`);
    });
  })
  .catch((error) => {
    console.error("Ошибка обработки комментариев:", error.message);
  });
