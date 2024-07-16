/**
 * Created by wacily on 2017/2/13.
 */

$(function () {
    var browser = {
        versions: function () {
            var u = navigator.userAgent, app = navigator.appVersion;
            return {
                trident: u.indexOf('Trident') > -1, //IE鍐呮牳
                presto: u.indexOf('Presto') > -1, //opera鍐呮牳
                webKit: u.indexOf('AppleWebKit') > -1, //鑻规灉銆佽胺姝屽唴鏍�
                gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //鐏嫄鍐呮牳
                ie: u.indexOf("compatible") > -1 && u.indexOf("MSIE") > -1 && !isOpera,   //IE鍐呮牳
                edge: u.indexOf("Edge") > -1,        //Edge鍐呮牳
                mobile: !!u.match(/AppleWebKit.*Mobile.*/), //鏄惁涓虹Щ鍔ㄧ粓绔�
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios缁堢
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android缁堢鎴栬€卽c娴忚鍣�
                iPhone: u.indexOf('iPhone') > -1, //鏄惁涓篿Phone
                iPad: u.indexOf('iPad') > -1, //鏄惁iPad
            };
        }(),
        language: (navigator.browserLanguage || navigator.language).toLowerCase()
    };
    if (browser.versions.trident || browser.versions.edge) {
        console.log("IE娴忚鍣�")
        $(".global-site-map-svg").addClass("png-svg")
        $(".global-site-map-png").addClass("home-cloud-mapimg")
    } else {
        console.log("other")
        $(".global-site-map-svg").addClass("home-cloud-mapimg")
        $(".global-site-map-png").addClass("png-svg")
    }
    //鏄剧ず鍏ㄩ儴鑿滃崟
    //鐐瑰嚮#btnClick鏃惰闃绘鍐掓场锛屽惁鍒�.pop鏄笉鏄剧ず鐨勶紝
    //鍥犱负鍐掓场浜嗭紝浼氭墽琛屽埌涓嬮潰鐨勬柟娉曘€�
    function stopPropagation(e) {
        var ev = e || window.event;
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        else if (window.event) {
            window.event.cancelBubble = true;//鍏煎IE
        }
    }
    $(".menu_pro").click(function (e) {
        var display = $(".menu_apidoc").css('display');
        if (display == 'none') {
            $(".menu_apidoc").show();
        } else {
            $(".menu_apidoc").hide();
        }
        stopPropagation(e);
    });
    $(document).bind('click', function () {
        $(".menu_apidoc").hide();
    });
    $(".menu_apidoc").click(function (e) {
        stopPropagation(e);
    });


    //棣栭〉banner涓嬫柟鏂伴椈鏉�
    $(".home-banner-news").click(
        function () {
            //window.open("/zh-cn/activity/alarm/index.html");
            window.open("/zh-cn/service/database/zhucong_Redis/");
            // window.open("/zh-cn/activity/alarm/message.html");
        }
    );
    //浜у搧涓庢湇鍔″乏渚ц彍鍗�
    var hiden_val = $("#ProductsSer").val();
    if (hiden_val) {
        var arr = hiden_val.split(",");
        $("#" + arr[0]).addClass("producr-menu-selected");
        $("#" + arr[1]).addClass("producr-link-selected");

    }
    fnSetPageBodyHeight();
    $(window).resize(fnSetPageBodyHeight);

    //椤甸潰椤堕儴-鑿滃崟
    //浜岀骇鑿滃崟
    $(".head-menu-first-list").hover(
        function () {
            $(this).addClass("head-menu-first-list-selected");
        },
        function () {
            $(this).removeClass("head-menu-first-list-selected");
        }
    );
    $(".head-menu-right-item").hover(
        function () {
            $(this).addClass("head-menu-right-item-selected");
        },
        function () {
            $(this).removeClass("head-menu-right-item-selected");
        }
    );
    //涓夌骇鑿滃崟
    $(".head-menu-left-second > ul > li").hover(
        function () {
            $(this).addClass("head-menu-left-second-selected");
        },
        function () {
            $(this).removeClass("head-menu-left-second-selected");
        }
    );
    $(".head-menu-left-second > .block-menu > div > p").hover(
        function () {
            $(this).addClass("head-menu-left-second-selected");
        },
        function () {
            $(this).removeClass("head-menu-left-second-selected");
        }
    );

    $(".home-promenu-hover-div").hover(
        function () {
            $(this).addClass("home-promenu-hover-div-selected");
        },
        function () {
            $(this).removeClass("home-promenu-hover-div-selected");
        }
    );

    $(".home-product-hover-div").hover(
        function () {
            $(this).children("div").addClass("home-product-hover-div-selected");
        },
        function () {
            $(this).children("div").removeClass("home-product-hover-div-selected");
        }
    );

    //绉诲姩绔鑸�
    $(".menu-trigger").click(function () {
        if ($(this).hasClass('is-visible')) {
            $(this).removeClass("is-visible")
            $('#menulist').collapse('hide')
        } else {
            $(this).addClass("is-visible");
            $('#menulist').collapse('show')
        }
    });

    $('#activity').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#productlist').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#net_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#cloud_jisuan').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#cunchu').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#data_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#load_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#metal_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#video_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#bigdata_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#anquan_server').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#solvecase').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#zhichi').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#guanyu').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })
    $('#global_site').click(function () {
        if ($(this).hasClass('select_style')) {
            $(this).removeClass('select_style')
        } else {
            $(this).addClass("select_style");
        }
    })

    $(".home-solution-case-menu-list li").click(function () {
        var me = $(this);
        var clickWidth = $(window).width();
        var index = me.index();
        if (clickWidth < 768) {
            me.toggleClass('home-solution-case-menu-list-selected')
        } else {
            me.addClass("home-solution-case-menu-list-selected").siblings().removeClass("home-solution-case-menu-list-selected");
            $(".home-solution-content-list").children("div").eq(index).css("display", "table").siblings().hide();
        }

    });

    $(".home-product-hover-div").click(function () {
        var me = $(this).children("div").children("ul");
        console.log(me);
        var clickWidth = $(window).width();
        var index = me.index();
        if (clickWidth < 992) {
            me.toggleClass('mobile-product-show')
        }
    })

    // 绔嬪嵆鍜ㄨ

    $(".solution-content-item-zixun > div").click(function () {
        console.log("123")
        window.open('https://p.qiao.baidu.com/cps3/chatIndex?siteToken=11055f2cd8fede7ae2fc27b80c4f0c49&speedLogId=159057649314853f0_1590576493148_62453&eid=3005908&reqParam=%7B%22from%22%3A0%2C%22sid%22%3A%22-100%22%2C%22tid%22%3A%22-1%22%2C%22ttype%22%3A1%2C%22siteId%22%3A%2212032863%22%2C%22userId%22%3A%223005908%22%2C%22pageId%22%3A0%7D', '', 'width=750,height=700,top=60')
    })


    //鍙充晶宸ュ叿鏉′腑浜岀淮鐮佺殑鏄剧ず鍜屽奖钘�
    $(".toolbar-item-app,.toolbar-item-phone,.toolbar-item-sales").mouseenter(function () {
        $(this).children("div").show();
    }).mouseleave(function () {
        $(this).children("div").hide();
    });

    //涓嫳鏂囧垏鎹�
    $(".country-flag").hover(
        function () {
            $(".country-flag li:last-child").show();
        },
        function () {
            $(".country-flag li:last-child").hide();
        }
    );

    //鍥炲埌椤堕儴
    $("#goTop_a").click(function () {

        //return false;
    });

    //棣栭〉-瑙ｅ喅鏂规
    var home_solution_bg_imgs = [
        'home_ds.png',  //鐢靛瓙鍟嗗姟
        'home_jr.png',  //浜掕仈缃戦噾铻�
        'home-sp.png',  //缃戠粶瑙嗛
        'home-zxjy.png',  //鍦ㄧ嚎鏁欒偛
        'home-app.png',  //绉诲姩搴旂敤
        'home-game.png',  //缃戠粶娓告垙
        'home-house.png'   //鎴垮湴浜�
    ];
    $(".home-solution-menu-list li").click(function () {
        var me = $(this);
        var index = me.index();

        me.addClass("home-solution-menu-list-selected").siblings().removeClass("home-solution-menu-list-selected");
        $(".home-solution-content-list").children("div").eq(index).show().siblings().hide();
        var imgUrl = "url('/templets/default/images/" + home_solution_bg_imgs[index] + "')";
        $(".home-solution").css("background-image", imgUrl);
    });

    //login-鏄惁鍚屾剰璁稿彲鍗忚
    $(".login-box-remark > img").click(function () {
        var me = $(this);
        var flag = me.data("flag");
        if (flag == 1) {
            me.data("flag", "0");
            me.attr("src", "/templets/default/icon/login_select.png");
        } else {
            me.data("flag", "1");
            me.attr("src", "/templets/default/icon/login_selected.png");
        }
    });

    //閭€璇风爜
    $(".register-box-yaoqing > img").click(function () {
        var me = $(this);
        var flag = me.data("flag");
        if (flag == 1) {
            me.data("flag", "0");
            me.attr("src", "/templets/default/icon/login_select.png");
            $(".register-box-yaoqing > input").val("").attr("disabled", "disabled");
        } else {
            me.data("flag", "1");
            me.attr("src", "/templets/default/icon/login_selected.png");
            $(".register-box-yaoqing > input").val("").removeAttr("disabled");
        }
    });
    //鐧诲綍銆佹敞鍐岃緭鍏ユ
    $(".register-rows-input-text input").focus(function () {
        $(this).parent("div").css("border", "1px solid #71fff0");
    }).blur(function () {
        $(this).parent("div").css("border", "1px solid #3078b5");
    });

    //鍒囨崲娉ㄥ唽鏂瑰紡
    $(".register-tabs > div").click(function () {
        var id = $(this).data("id");
        $(this).removeClass("register-tabs-unselect").siblings().addClass("register-tabs-unselect");
        switch (id) {
            case "phone":
                $("#register-device-name").text("鎵嬫満鍙风爜锛�");
                $("#sim-validata").show();
                $(".register-rows").css("padding", "0 25px 18px");
                break;
            case "mail":
                $("#register-device-name").text("閭鍦板潃锛�");
                $("#sim-validata").hide();
                $(".register-rows").css("padding", "0 25px 35px");
                break;
            default:
                break;
        }
    });

    //鍔犲叆鎴戜滑
    $(".join-item-head-name").click(function () {
        var me = $(this);
        if (me.find(".arrow-right").length > 0) {
            //灞曞紑
            me.parent("div").next().slideDown();
            me.children("span").eq(1).removeClass("arrow-right").addClass("arrow-bottom");

            var items = me.parent("div").parent("div").siblings();
            items.find(".join-item-head-name").children("span").eq(1).removeClass("arrow-bottom").addClass("arrow-right");
            items.find(".join-item-body").slideUp();
        } else {
            //鏀惰捣
            me.parent("div").next().slideUp();
            me.children("span").eq(1).removeClass("arrow-bottom").addClass("arrow-right");
        }
    });

    //鍏充簬鎴戜滑-鍏徃璧勮川-骞翠唤
    // $(".qual-year-body > div").click(function(){
    //     $(this).addClass("qual-year-body-year-selected").siblings().removeClass("qual-year-body-year-selected");
    // });
    $(".qual-year-body-year").click(function () {
        var me = $(this);
        var parent = me.parent("div");
        var year = me.data("year");
        var list_id = 'ca-container' + year;

        parent.addClass("qual-year-body-year-selected").siblings().removeClass("qual-year-body-year-selected");
        $('#' + list_id).show().siblings().hide();
    });

    //浜у搧鏈嶅姟璇︽儏-琛屼笟闇€姹�
    $(".product-discrption-xuqiu-menu li").click(function () {
        var me = $(this);
        var index = me.index();

        me.addClass("product-discrption-xuqiu-menu-selected").siblings().removeClass("product-discrption-xuqiu-menu-selected");
        me.parents(".product-discrption-xuqiu-menu").next().children("div").eq(index).show().siblings().hide();
    });
    //浜у搧鏈嶅姟璇︽儏-鍐宠В鏂规
    $(".product-discrption-solution-menu li").click(function () {
        var me = $(this);
        var index = me.index();

        me.addClass("product-discrption-xuqiu-menu-selected").siblings().removeClass("product-discrption-xuqiu-menu-selected");
        $(".product-discrption-solution-content").children("div").eq(index).show().siblings().hide();
    });
    //浜у搧鏈嶅姟璇︽儏-涓夌骇鑿滃崟
    $(".product-menu-one>span").click(function () {
        var me = $(this).parent();
        me.addClass("producr-menu-selected").siblings().removeClass("producr-menu-selected");
        me.siblings().find("li").removeClass("producr-menu-selected");
    });

    //浜у搧鏈嶅姟-姘村钩鑿滃崟
    $(".proser-child-nav-list li").mouseenter(function () {
        //$(this).addClass("about-menu-item-selected").siblings().removeClass("about-menu-item-selected");
        $(this).addClass("about-menu-item-selected");
    }).mouseleave(function () {
        $(this).removeClass("about-menu-item-selected");
    });
    // $(".about-menu-list li").mouseenter(function(){
    //     $(this).addClass("about-menu-item-selected").siblings().removeClass("about-menu-item-selected");
    //     $(this).addClass("about-menu-item-selected");
    // }).mouseleave(function(){
    //     $(this).removeClass("about-menu-item-selected");
    // });


    //澶囨-甯歌闂
    $(".record-question-item-ask").click(function () {
        var parent = $(this).parent();
        if (!parent.hasClass("record-question-item-selected")) {
            parent.addClass("record-question-item-selected").siblings().removeClass("record-question-item-selected");
        } else {
            parent.removeClass("record-question-item-selected");
        }
    });
    $(".home-product-item").hover(
        function () {
            $(this).find("img").css("top", "-5px");
        },
        function () {
            $(this).find("img").css("top", "0");
        }
    );

    /*$(".home-height-menu-item-a,.home-height-menu-item-b").hover(
        function(){
            $(this).find("img").css("top","-5px");
        },
        function(){
            $(this).find("img").css("top","0");
        }
    );*/

    $(".proser-child-nav-list a").click(function () {
        var top = $(window).scrollTop();
        setTimeout(function () {
            var top_new = $(window).scrollTop();
            if (top != top_new) {
                var top_temp = $(window).scrollTop() - 60;
                $(window).scrollTop(top_temp);
            }
        }, 20);
    });

    $(".home-product-item").click(function () {
        var me = $(this);
        var href = me.data("href");
        window.location.href = href;
    });



    function fnSetPageBodyHeight() {
        var pageH = $(window).height();
        var headH = $(".page-head").height();
        //var bodyH = $(".page-body").height();
        var footH = $(".page-foot").height();

        var h = pageH - headH - footH;

        $(".page-body").css("min-height", h + "px");

        //椤甸潰鍙充笅渚у伐鍏锋潯
        var winWidth = $(window).width();
        var fixedLeft = 10;
        if (winWidth > 1300) {
            fixedLeft = parseInt((winWidth - 1200) / 2) - 50;
        }
        $(".page-foot-toolbar").css("right", fixedLeft + 'px');
    }
});

function SetScroll_Ser() {
    var dh = $(document).scrollTop();

    var documentHeight = $(document).height();	//鏂囨。楂樺害
    var bodyHeight = $(".page-body").height();  //page-body鐨勯珮搴�
    var menuHeight = $(".producr-menu").height();//宸︿晶鑿滃崟鐨勯珮搴�
    var footHeight = $(".page-foot").height();	//page-foot鐨勯珮搴�
    var CancelTop = documentHeight - menuHeight - footHeight - 20 - 95;  //
    var AbsoluteHeight = bodyHeight - menuHeight - 95;  ///////////////////

    if (dh > 60) {
        //$(".producr-menu").addClass("producr-menu-fixed");
        if (dh >= CancelTop) {
            $(".producr-menu").removeClass("producr-menu-fixed").css("top", AbsoluteHeight + "px");
        } else {
            $(".producr-menu").addClass("producr-menu-fixed").css("top", "20px");
        }
    } else {
        $(".producr-menu").removeClass("producr-menu-fixed").css("top", "20px");
    }

    if (dh > 480) {
        $(".about-menu").addClass("about-menu-fixed");
    } else {
        $(".about-menu").removeClass("about-menu-fixed");
    }
}

function SetScroll_One(_h) {
    SetScroll_Two(_h, 'about-menu');
}
function SetScroll_Two(_h, _el) {
    var dh = $(document).scrollTop();

    if (dh > _h) {
        $("." + _el).addClass("about-menu-fixed");
    } else {
        $("." + _el).removeClass("about-menu-fixed");
    }
}
function SetScroll_Three(_h, _el, className) {
    var dh = $(document).scrollTop();

    if (dh > _h) {
        $("." + _el).addClass(className);
    } else {
        $("." + _el).removeClass(className);
    }
}

function SetScroll_Doc(_h) {
    var dh = $(document).scrollTop();

    if (dh > _h) {
        $(".about-menu").addClass("about-menu-fixed");
        $(".help-docment-detail-menu").addClass("help-docment-detail-menu-fixed");
    } else {
        $(".about-menu").removeClass("about-menu-fixed");
        $(".help-docment-detail-menu").removeClass("help-docment-detail-menu-fixed");
    }
}

function SetScroll_HelpDoc() {
    var dh = $(document).scrollTop();

    var documentHeight = $(document).height();	//鏂囨。楂樺害
    var bodyHeight = $(".help-docment-detail").height();  //page-body鐨勯珮搴�
    var menuHeight = $(".producr-menu > ul").height();//宸︿晶鑿滃崟鐨勯珮搴�
    var footHeight = $(".page-foot").height();	//page-foot鐨勯珮搴�
    var CancelTop = documentHeight - menuHeight - footHeight - 140;  //
    var AbsoluteHeight = bodyHeight - menuHeight;

    if (dh > 192) {
        $(".about-menu").addClass("about-menu-fixed");
        $(".help-docment-detail-menu").addClass("help-docment-detail-menu-fixed");

        if (dh >= CancelTop) {
            $(".help-docment-detail-menu").removeClass("help-docment-detail-menu-fixed");//.css("top",AbsoluteHeight + "px");
            $(".producr-menu > ul").css({ "position": "absolute", "top": AbsoluteHeight + "px" });
        } else {
            $(".help-docment-detail-menu").addClass("help-docment-detail-menu-fixed")//.css("top","20px");
            $(".producr-menu > ul").css({ "position": "static", "top": "0px" });
        }



    } else {
        $(".about-menu").removeClass("about-menu-fixed");
        $(".help-docment-detail-menu").removeClass("help-docment-detail-menu-fixed");
    }
}

function SetScroll_apidocs() {
    var dh = $(document).scrollTop();

    var documentHeight = $(document).height();	//鏂囨。楂樺害
    var bodyHeight = $(".page-body").height();  //page-body鐨勯珮搴�
    var menuHeight = $(".producr-menu").height();//宸︿晶鑿滃崟鐨勯珮搴�
    var footHeight = $(".page-foot").height();	//page-foot鐨勯珮搴�
    var CancelTop = documentHeight - menuHeight - footHeight - 20 - 95;  //
    var AbsoluteHeight = bodyHeight - menuHeight - 95;  ///////////////////

    if (dh > 50) {
        if (dh >= CancelTop) {
            $(".producr-menu").removeClass("producr-menu-fixed").css("top", AbsoluteHeight + "px");
            $("..menu_apidoc").removeClass("producr-menu-fixed").css("top", AbsoluteHeight + "px");
        } else {
            $(".producr-menu").addClass("producr-menu-fixed").css("top", "20px");
            $(".menu_apidoc").addClass("producr-menu-fixed").css("top", "20px");
        }
    } else {
        $(".producr-menu").removeClass("producr-menu-fixed").css("top", "270px");
        $(".menu_apidoc").removeClass("producr-menu-fixed").css("top", "370px");
    }

    if (dh > 420) {
        $(".about-menu").addClass("about-menu-fixed");
        $(".producr-menu").css("top", "20px");
    } else {
        $(".about-menu").removeClass("about-menu-fixed");
    }
}

//澶囨
function SetScroll_icp() {
    var dh = $(document).scrollTop();

    var documentHeight = $(document).height();	//鏂囨。楂樺害
    var bodyHeight = $(".page-body").height();  //page-body鐨勯珮搴�
    var menuHeight = $(".producr-menu").height();//宸︿晶鑿滃崟鐨勯珮搴�
    var footHeight = $(".page-foot").height();	//page-foot鐨勯珮搴�
    var CancelTop = documentHeight - menuHeight - footHeight - 20 - 95;  //
    var AbsoluteHeight = bodyHeight - menuHeight - 95;  ///////////////////

    if (dh > 380) {
        //$(".producr-menu").addClass("producr-menu-fixed");
        if (dh >= CancelTop) {
            $(".producr-menu").removeClass("producr-menu-fixed").css("top", AbsoluteHeight + "px");
        } else {
            $(".producr-menu").addClass("producr-menu-fixed").css("top", "20px");
        }
    } else {
        $(".producr-menu").removeClass("producr-menu-fixed").css("top", "20px");
    }

    if (dh > 420) {
        $(".about-menu").addClass("about-menu-fixed");

    } else {
        $(".about-menu").removeClass("about-menu-fixed");
    }
}
