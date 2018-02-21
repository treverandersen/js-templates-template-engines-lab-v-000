function createPost() {
  var bodyText = "";
  var author = "";
  
  var postBody = createPostBody(bodyText);
  var postLabel = createPostLabel(author);
  postNewPost(postBody, postLabel);
}
