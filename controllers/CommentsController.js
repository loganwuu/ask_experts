AskExperts.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, AnswersFactory, QuestionsFactory, UtilitiesFactory) {
  $scope.answer = UtilitiesFactory.findById(AnswersFactory.answers, $stateParams.answerId);
  $scope.addComment = function() {
    $scope.answer.comments.push({ name: $scope.commentName });
    $scope.commentName = null;
  }
});
