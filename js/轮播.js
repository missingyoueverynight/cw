// var btns = document.getElementsByTagName("button");
// var imgs = document.getElementsByClassName("banner-img")[0]
// var ul = document.getElementsByTagName("ul")[1];
// var lis = ul.children;
// var count = 0;
// for (var i = 0; i < btns.length; i++) {
//     btns[i].onclick = function () {
//         if (this.innerHTML == "&gt;") {
//             dh(1);
//         } else {
//             dh(-1);
//         }
//     }
// }

// function dh(num, li) {
//     count += num;
//     if (num) {
//         if (count == 3) {
//             count = 0;
//         } else if (count == -1) {
//             count = 2;
//         }
//     } else {
//         count = li.getAttribute("dy");
//     }

//     for (var j = 0; j < lis.length; j++) {
//         lis[j].className = "";
//     }
//     imgs.style.marginLeft = count * -100 + "%";
//     lis[count].className = "active";
// }


// for (var i = 0; i < lis.length; i++) {
//     lis[i].onclick = function () {
//         dh(undefined, this);
//     }
// }
// time = setInterval(function () {
//     for (var j = 0; j < lis.length; j++) {
//         lis[j].className = "";
//     }
//     count++;
//     if (count == 3) {
//         count = 0;
//     }
//     imgs.style.marginLeft = count * -100 + "%";
//     lis[count].className = "active";
// }, 1500)

// imgs.onmouseover = function () {
//     clearInterval(time);
// }

// imgs.onmouseout = function () {
//     time = setInterval(function () {
//         for (var j = 0; j < lis.length; j++) {
//             lis[j].className = "";
//         }
//         count++;
//         if (count == 3) {
//             count = 0;
//         }
//         imgs.style.marginLeft = count * -100 + "%";
//         lis[count].className = "active";
//     }, 1500)
// }

function banner(){
    var btn = document.getElementsByClassName("btn")[0];
    var btns=btn.children;
    var imgs = document.getElementsByClassName("banner-img")[0]
    var ul = document.getElementsByTagName("ul")[1];
    var lis = ul.children;
    var count = 0;
    for (var i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
            if (this.innerHTML == "&gt;") {
                dh(1);
            } else {
                dh(-1);
            }
        }
    }
    
    function dh(num, li) {
        count += num;
        if (num) {
            if (count == 3) {
                count = 0;
            } else if (count == -1) {
                count = 2;
            }
        } else {
            count = li.getAttribute("dy");
        }
    
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
        }
        imgs.style.marginLeft = count * -100 + "%";
        lis[count].className = "active";
    }
    
    
    for (var i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
            dh(undefined, this);
        }
    }
    time = setInterval(function () {
        for (var j = 0; j < lis.length; j++) {
            lis[j].className = "";
        }
        count++;
        if (count == 3) {
            count = 0;
        }
        imgs.style.marginLeft = count * -100 + "%";
        lis[count].className = "active";
    }, 1500)
    
    imgs.onmouseover = function () {
        clearInterval(time);
    }
    
    imgs.onmouseout = function () {
        time = setInterval(function () {
            for (var j = 0; j < lis.length; j++) {
                lis[j].className = "";
            }
            count++;
            if (count == 3) {
                count = 0;
            }
            imgs.style.marginLeft = count * -100 + "%";
            lis[count].className = "active";
        }, 1500)
    }
    
}

banner();
	// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(106.552688,29.558189);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
    '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
    '地址：重庆大坪龙湖时代天街3号写字楼2407室<br/>电话：+86 023-867-7848<br/>简介：重庆大坪龙湖时代天街3号写字楼2407室' +
  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "重庆大坪龙湖时代天街",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    // marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
	//样式1
	var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
		title: "信息框1", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_FROM_HERE, //从这里出发
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	function openInfoWindow1() {
		searchInfoWindow1.open(new BMap.Point(106.517694,29.544575));
	}
	//样式2
	var searchInfoWindow2 = new BMapLib.SearchInfoWindow(map, "信息框2内容", {
		title: "信息框2", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	function openInfoWindow2() {
		searchInfoWindow2.open(new BMap.Point(116.324852,40.057031));
	}
	//样式3
	var searchInfoWindow3 = new BMapLib.SearchInfoWindow(map, "信息框3内容", {
		title: "信息框3", //标题
		width: 290, //宽度
		height: 40, //高度
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
		]
	});
	function openInfoWindow3() {
		searchInfoWindow3.open(new BMap.Point(116.328852,40.057031)); 
	}
