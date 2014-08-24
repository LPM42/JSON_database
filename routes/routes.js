var fs = require('fs');

module.exports = function(app) {
  var fileName = '/:fileName';

  app.post(fileName, function(req, res) {
    var input = req.params.fileName;
    var outputFile = './db/' + input + '.json';
    fs.writeFile(outputFile, JSON.stringify({fileContents: input}));
  });

  app.get(fileName, function(req, res) {
    var file = './db/' + req.params.fileName + '.json';
    fs.readFile(file, function(err, data) {
      res.send(JSON.parse(data));
    });
  });
};
