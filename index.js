//express_demo.js 文件
var express = require('express');
var app = express();
// var logger = require('morgan');
// app.use(logger('dev'));
app.use(express.static('public'));

app.get('/74960', function (req, res) {
    res.redirect('https://www.douyu.com/74960');
});
app.get('/longdd', function (req, res) {
    res.redirect('https://www.huya.com/longdd');
});
app.get('/9999', function (req, res) {
    res.redirect('https://www.douyu.com/9999');
});

var server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
