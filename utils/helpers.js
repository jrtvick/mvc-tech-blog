module.exports = {
  formatDate: (createdAt) => {
    return createdAt.toLocaleString();
  },
  isOwnPost: (postUser, loggedInUser) => {
    console.log("isOwnPost", postUser, loggedInUser, postUser === loggedInUser);
    return postUser === loggedInUser;
  },
};
