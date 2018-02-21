function createPost() {
  var bodyText = "";
  var author = "";

  var postBody = createPostBody(bodyText);
  var postLabel = createPostLabel(author);
  postNewPost(postBody, postLabel);
}

function createPostBody(text) {
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");
  bodyPara.innerHTML = text;
  bodyDiv.appendChild(bodyPara);
  return bodyDiv;
}

function createPostLabel(author) {
  var authorDiv = document.createElement("div");
  var authorLabel = document.createElement("p");
  authorLabel.innerHTML = "posted by:&nbsp;";
  var authorName = document.createElement("span");
  authorName.innerHTML = author;
  authorLabel.appendChild(authorName);
  authorDiv.appendChild(authorLabel);
  return authorLabel;
}

function postNewPost(body, author) {
  var postDiv = document.getElementById("post");
  var newPostDiv = document.createElement("div");
  newPostDiv.appendChild(body);
  newPostDiv.appendChild(author);
  postsDiv.appendChild(newPostDiv);
}
