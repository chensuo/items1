/*�жϵ�ǰ"֪ͨ����"ҳ���Ƿ���������ҳ�淵�ص�(����jeecms���ú�Ч��,ģ����Ч��)*/
$(function(){
    var lastPageUrl = document.referrer;
    var $boxs = $('.box');
    var $navs = $('#discovery-nav a');
    $navs.removeClass('on');
    $boxs.removeClass('active');
    //��ǰ֪ͨ����ҳ���Ǵ�"��������"��ĳһ�����������鷵�ص�,ҳ����ʾ"��������"�б����ݣ�
    if(lastPageUrl.indexOf("xw") >= 0){
        $($navs[1]).addClass('on');
        $($boxs[1]).addClass('active');
    }
    //��ǰ֪ͨ����ҳ���Ǵ�"֪ͨ����"��ĳһ֪ͨ�������鷵�ػ����Ǵ�����ҳ������,ҳ����ʾ"֪ͨ����"�б����ݣ�
    else{
        $($navs[0]).addClass('on');
        $($boxs[0]).addClass('active');
    }
});
