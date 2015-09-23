AskExperts.factory('CommentsFactory', function CommentsFactory() {
  var factory = {};
  factory.comments = [];

  factory.addComments = function() {
    factory.comments.push({ name: factory.commentName, id: factory.comments.length + 1, comments: [] });
    factory.commentName = null;
  };
  return factory;
})
