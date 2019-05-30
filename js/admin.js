
var $ = layui.$;
; $(function () {
    var windowWidth = $(window).width();
    var element = layui.element;

    $('a[layadmin-event="flexible"]').on('click', function () {
        $('#LAY_app').toggleClass('layadmin-side-spread-sm');
        $('#LAY_app_flexible').toggleClass('layui-icon-spread-left');
    });

    $('[layadmin-event="shade"]').on('click', function () {
        $('#LAY_app').toggleClass('layadmin-side-spread-sm');
        $('#LAY_app_flexible').toggleClass('layui-icon-spread-left');
    });

    $('#LAY-system-side-menu [lay-href]').on('click', function () {
        $('#LAY_app_flexible').toggleClass('layui-icon-spread-left');
        $('#LAY_app').removeClass('layadmin-side-spread-sm');
        var crtLiArr = $('#LAY_app_tabsheader>li'),
            len = crtLiArr.length;

        var that = $(this),
            id = that.attr('lay-href');
        for (var i = 0; i < len; i++) {
            if (crtLiArr.eq(i).attr('lay-id') === id) {
                element.tabChange('layadmin-layout-tabs', id);
                $('#LAY_app_body>div').removeClass('layui-show').eq(i).addClass('layui-show');
                return;
            }

        }

        element.tabAdd('layadmin-layout-tabs', {
            title: that.html()
            , content: that.attr('lay-href') //支持传入html
            , id: that.attr('lay-href')
        });
        element.tabChange('layadmin-layout-tabs', that.attr('lay-href'));
        var html = '<div class="layadmin-tabsbody-item layui-show"><iframe src="' + that.attr('lay-href') + '" frameborder="0" class="layadmin-iframe"></iframe></div>';
        $('#LAY_app_body>div').removeClass('layui-show');
        $('#LAY_app_body').append(html);
    });


    element.tab({
        headerElem: '#LAY_app_tabsheader>li' //指定tab头元素项
        , bodyElem: '#LAY_app_body>.layadmin-tabsbody-item' //指定tab主体元素项
    });

    element.on('tabDelete(layadmin-layout-tabs)', function (data) {
        $('#LAY_app_body>.layadmin-tabsbody-item').eq(data.index).remove();
        element.tabChange('layadmin-layout-tabs', $('#LAY_app_tabsheader>li').eq(data.index - 1).attr('lay-id'));
        $('#LAY_app_body>div').removeClass('layui-show').eq(data.index - 1).addClass('layui-show');
    });

    element.on('tab(layadmin-layout-tabs)', function (data) {
        console.log(data);
    });

});