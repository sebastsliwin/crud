const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/dist/crud/browser'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/crud/browser', 'index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
