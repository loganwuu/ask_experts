AskExperts.controller('AnswersCtrl', function AnswersCtrl($scope, $stateParams, QuestionsFactory, UtilitiesFactory) {
  $scope.question = UtilitiesFactory.findById(QuestionsFactory.questions, $stateParams.questionId);
  $scope.addAnswer = function() {
    $scope.question.answers.push({ name: $scope.answerName, comments: [], upvotes: 0, downvotes: 0, totalVote: 0 });
    $scope.question.answered = true;
    $scope.answerName = null;
  };

  $scope.addUpvote = function(answer) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].upvotes += 1;
    $scope.question.answers[index].totalVote += 1;
  };

  $scope.addDownvote = function(answer) {
    var index = $scope.question.answers.indexOf(answer);
    $scope.question.answers[index].downvotes -= 1;
    $scope.question.answers[index].totalVote -= 1;
  };
});
