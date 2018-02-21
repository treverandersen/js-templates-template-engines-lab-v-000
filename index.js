function createPost() {
  event.preventDefault();
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
  postDiv.appendChild(newPostDiv);
}




function addComment() {
  var bodyText = "";
  var commenter = "";

  var commentBody = createCommentBody(bodyText);
  var commenterLabel = createCommentLabel(commenter);
  postNewComment(commentBody, commenterLabel);
}

function createCommentBody(comment) {
  var bodyDiv = document.createElement("div");
  var bodyPara = document.createElement("p");
  bodyPara.innerHTML = comment;
  bodyDiv.appendChild(bodyDiv);
  return bodyDiv;
}

function createCommenterLabel(commenter) {
  var commenterDiv = document.createElement("div");
  var commenterLabel = document.createElement("p");
  commenterLabel.innerHTML = "posted by:&nbsp;";
  var commenterName = document.createElement("span");
  commenterName.innerHTML = commenter;
  commenterLabel.appendChild(commenterName);
  commenterDiv.appendChild(commenterLabel);
  return commenterLabel;
}

function postNewComment(body, commenter) {
  var commentsDiv = document.getElementById("comments");
  var newCommentDiv = document.createElement("div");
  newCommentDiv.appendChild(body);
  newCommentDiv.appendChild(commenter);
  commentsDiv.appendChild(newCommentDiv);
}
