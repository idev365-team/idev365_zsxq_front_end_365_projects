$(function(){

    const pageSize = 5;
    let total = 0;
    let currentPage = 0;

    function getTotalPageCount(){
        return Math.ceil(total / pageSize);
    }

    function updateTableUI(data){
        var template = $.templates("#orderTableBodyTmpl");
        var htmlOutput = template.render( {
            orders:data.orders,
        } );
        $( ".table-body" ).html( htmlOutput );
    }

    function updatePagination(data){
        var template = $.templates("#paginationTmpl");
        var pages = [];
        for(let i=0;i<getTotalPageCount();i++){
            pages.push({
                id: i,
                active: currentPage == i,
            });
        }
        var htmlOutput = template.render({
            pages: pages
        });

        $( ".pagination" ).html( htmlOutput );
        $( ".pagination" ).find("li").each(function(){
            var $this = $(this);
            var pageNumber = Number($this.find("a").text());
            console.log(pageNumber)
            $this.click(function(){
                getOrderInfo(pageNumber-1);
            })
        })
    }

    function updateUI(data){
        //刷新Table的Body区域
        updateTableUI(data);
        //刷新底部分页
        updatePagination(data);
    }

    function getOrderInfo(pageNumber){
        $.get( "/orders/"+pageSize+"/"+pageNumber, function( res ) {
            console.log("获得的分页数据:",res);
            total = res.data.total;
            currentPage = res.data.currentPage;
            updateUI(res.data);
        });
    }
    getOrderInfo(currentPage);
});
