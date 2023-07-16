import axios from "axios";

export default class PostService {
  static async getAllPosts(page, limit) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          _page: page,
          _limit: limit,
        },
      }
    );
    return response;
  }

  static async getPostsFromUser(id) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts",
      {
        params: {
          userId: id,
          _page: 1,
          _limit: 5,
        },
      }
    );
    return response;
  }

  static async getAllComments(id) {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const response = await axios.get(URL);
    return response;
  }

  static async getUsers() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    return response;
  }
}
