var comment = require('./comment.json')
var list = require('./list.json')

module.exports = function () {
  return {
    'comment.php': comment,
    'list': list,
   
  }
}
