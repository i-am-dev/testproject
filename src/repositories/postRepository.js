import repository from "./repository";

const resourcePost = "posts/";
const resourceComment = "comments?postId=";

export default {
  get() {
    return repository.get(`${resourcePost}`);
  },

  getPost(postId) {
    return repository
      .get(`${resourcePost}${postId}`)
      .then(response => {
        return {
          status: response.status,
          data: response.data
        };
      })
      .catch(error => {
        return {
          errorObject: error,
          data: null,
          status: error.response.status,
          message: error.response.statusText
        };
      });
  },

  getComments(postId) {
    return repository
      .get(`${resourceComment}${postId}`)
      .then(response => {
        return {
          status: response.status,
          data: response.data
        };
      })
      .catch(error => {
        return {
          errorObject: error,
          data: null,
          status: error.response.status,
          message: error.response.statusText
        };
      });
  }
};
