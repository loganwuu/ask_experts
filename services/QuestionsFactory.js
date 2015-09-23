AskExperts.factory('QuestionsFactory', function QuestionsFactory() {
  var factory = {};
  factory.questions = [];

  factory.addQuestion = function() {
    factory.questions.push({ name: factory.questionName, id: factory.questions.length + 1, answers: [], answered: false });
    factory.questionName = null;
  };

  return factory;
});
