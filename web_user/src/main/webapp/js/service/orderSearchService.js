//服务层
app.service('orderSearchService',function($http) {
    //查询订单集合
    this.findOrderList = function () {
        return $http.get('order/getOrderList.do');
    }

    //查询全部订单
    this.search = function(page,rows,status){
        return $http.get("order/search.do?page="+page+"&rows="+rows+"&status="+status);
    }


});