$(function(){
    ///*����ˢ��*/
    //var pages = 1;
    //var sizes = 4;
    //var loading = false;  //״̬���
    //
    //$("#listwrap").pullToRefresh().on("pull-to-refresh", function () {
    //    setTimeout(function () {
    //        pages = 1;
    //        $("#Tolist").html("");
    //        loadlist();
    //        if (loading) loading = false;
    //        $("#listwrap").pullToRefreshDone(); // ��������ˢ��
    //    }, 1500);   //ģ���ӳ�
    //});
    //
    ////function loadlist(){
    ////    //��������
    ////}

        /*����ˢ��*/
        $('.weui-tab').pullToRefresh(function () {
            // ����ˢ�´���ʱִ�еĲ��������
            //����ˢ��
            //do something
            setTimeout(function() {
                $('.weui-tab').pullToRefreshDone();
            }, 1500);
        });

});