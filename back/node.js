var express = require('express');
var request=require('request')
var axios=require('axios')
var url=require('url');
var app = express();

//获取滚动页面中的五部电影mm
app.get('/', function (req, res) {
     res.header("Access-Control-Allow-Origin", "*");
     request('https://api.themoviedb.org/3/movie/now_playing?api_key=4d3827e042b4e0f00bf1c165631f8e9c&language=en-US&page=1', function (error, response, body) {
     res.send(body)
    })
})
 
app.get('/watch/movie', (req, res) => {
  var arg=url.parse(req.url,true).query
  console.log(arg.id);
  res.header("Access-Control-Allow-Origin", "*");
	axios.get('https://api.themoviedb.org/3/movie/'+arg.id+'?api_key=4d3827e042b4e0f00bf1c165631f8e9c&language=en-US&page=1')  // the details of movie endpoints, mention in section 4.1.9
	.then(response => {
		res.json(response.data);
	})
})

var server = app.listen(8080, function () {
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://localhost:%s",port)
 
})