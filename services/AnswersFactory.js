AskExperts.factory('AnswersFactory', function AnswersFactory() {
  var factory = {};
  factory.answers = [];

  factory.addAnswers = function() {
    factory.answers.push({ name: factory.answerName, id: factory.answers.length + 1, answers: [] });
    factory.answerName = null;
  };
  return factory;
});
