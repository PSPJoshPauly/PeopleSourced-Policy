app.controller('CommentController', ['$firebaseAuth', '$http', '$location', 'DataFactory', function($firebaseAuth, $http, $location, DataFactory){


  var self = this;
  var auth = $firebaseAuth();
  var firebaseUser = auth.$getAuth();


//shows all comments from BD to view
  self.commentsObject = DataFactory.commentsObject;

//add comment to comment to DB
  self.commentRedirect = function() {
//redirect after submission
    $location.url('/comment');
  }//end of self.commentRedirect()

//adds new comment to DB
  self.addComment = function(newComment) {
//sents comment from view to DB
    DataFactory.addComment(newComment);
//empties inputs after submission
    self.newComment = {};
//redirect after submission
    $location.url('/comment');
  }//end of self.addComment()

  self.createIdea = function() {
//redirect after submission
    $location.path('/idea');
  }
//shows and hides sun-comment text area
  self.showComment = false;
//sub-comment button click function
  self.showCommentArea = function(){
    console.log("button clicked");
    self.showComment = true;
  }
//button click to add new sub-comment
  self.addNewSubComment = function(newSubComment, req){
//empties sub-comment text area on submit
    self.newSubComment = {};
    DataFactory.addNewSubComment(newSubComment);
  }//end of addNewSubComment()

}]);//end of app.controller()





// req.decodedToken.userSQLId: , req.decodedToken
