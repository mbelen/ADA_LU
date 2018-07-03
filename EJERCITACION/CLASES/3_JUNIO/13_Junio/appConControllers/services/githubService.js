const axios = require('axios')

const service = {}

service.getRepositories = function (githubUser) {
  axios
  	.get('https://api.github.com/users/'+githubUser+'/repos')
  	.then(function(res){
  	 console.log(res.data);
  })
}

module.exports = service;