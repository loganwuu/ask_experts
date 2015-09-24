var AskExperts = angular.module('AskExperts', ['ui.router']);

AskExperts.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('questions', {
    url: "/questions",
    templateUrl: "partials/questions.html",
    controller: 'QuestionsCtrl'
  });

  $stateProvider.state('questions.answers', {
    url: "/:questionId",
    templateUrl: "partials/questions.answers.html",
    controller: 'AnswersCtrl'
  });

  // $stateProvider.state('answers.comments', {
  //   url: "/:answerId",
  //   templateUrl: "partials/answers.comments.html",
  //   controller: 'CommentsCtrl'
  // });
});
