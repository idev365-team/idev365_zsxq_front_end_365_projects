var express = require('express');
var app = express();
var db = require("./db.json")

app.get('/', function (req, res) {
  res.send('请访问-><a href="/orders/5/0">订单API</a>');
});

function resultSuccess(data){
    return {
        code: 0,
        msg: "ok",
        data: data,
    }
}

function getOrderTotalCount(){
    return db.orders.length;
}

function getOrders(pageSize,currentPage){
    const start = pageSize*currentPage;
    const end = start+pageSize;
    return db.orders.slice(start,end);
}

app.get('/orders/:pageSize/:currentPage',function(req,res,next){
    const pageSize = Number(req.params.pageSize || 5);
    const currentPage = Number(req.params.currentPage || 0);
    console.log('pageSize:', pageSize);
    console.log('currentPage:', currentPage);
    const orders = getOrders(pageSize,currentPage);
    const data = {
        currentPage: currentPage,
        pageSize: pageSize,
        total: getOrderTotalCount(),
        orders: orders,
    }
    res.send( resultSuccess(data) )
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});