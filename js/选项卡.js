function option() {
    var box = document.getElementsByClassName("box")[0];
    var btn = box.children;
    var divs = document.getElementsByClassName("content");
    for (var i = 0; i < btn.length; i++) {
        btn[i].index = i;
        btn[i].onclick = function () {
            for (var j = 0; j < btn.length; j++) {
                btn[j].className = "";
                divs[j].style.display = "none";
            }
            this.className = "active";
            divs[this.index].style.display = "block";
        }
    }
}

// option();
function f1() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "../php/index.php?hide=5");
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var arr = JSON.parse(xhr.responseText);
            console.log(arr)

            var div3 = document.createElement("div");
            div3.className = "box";
            for (var i = 0; i < arr.length; i++) {
                var button = document.createElement("button");
                button.innerHTML = arr[i].ChineseName;
                if (i == 0) {
                    button.className = "active";
                }
                div3.appendChild(button);

            }
            showcon.appendChild(div3)
            console.log(div3)
            
            for (var i = 0; i < arr.length; i++) {
                var div = document.createElement("div");
                if (i == 0) {
                    div.className = "content d1";
                } else {
                    div.className = "content";
                }

                console.log(div)
                for (var j = 0; j < 3; j++) {
                    var div1 = document.createElement("div");
                    div.appendChild(div1)

                    if (j == 0) {
                        // class为top下面的内容
                        div1.className = "top";
                        for (var t = 0; t < 2; t++) {
                            var div2 = document.createElement("div");
                            if (t == 0) {
                                div2.className = "lt";
                                for (var k = 0; k < 2; k++) {
                                    var p = document.createElement("p");
                                    if (k == 0) {
                                        p.innerHTML = arr[i].ChineseName;
                                    } else {
                                        p.innerHTML = arr[i].EnglishName;
                                    }
                                    div2.appendChild(p);
                                }
                                div1.appendChild(div2)
                            } else {
                                div2.className = "rt";
                                for (var l = 0; l < 4; l++) {
                                    var a = document.createElement("a");
                                    a.href = "#";
                                    if (l == 0) {
                                        a.innerHTML = "当前位置>";
                                    } else if (l == 1) {
                                        a.innerHTML = "首页>";
                                    }
                                    else if (l == 2) {
                                        a.innerHTML = "产品介绍>";
                                    } else {
                                        a.innerHTML = arr[i].ChineseName;
                                    }
                                    div2.appendChild(a);
                                }
                                div1.appendChild(div2)
                            }

                        }
                    } else if (j == 1) {
                        div1.className = "cappuccino";
                        var img = new Image();
                        img.src = arr[i].src;
                        div1.appendChild(img);

                    } else {
                        div1.className = "jieshao";
                        for (var j = 0; j < 4; j++) {
                            var p = document.createElement("p");
                            if (j == 0) {
                                p.innerHTML = arr[i].intro1;
                            } else if (j == 1) {
                                p.innerHTML = arr[i].intro2;
                            } else if (j == 2) {
                                p.innerHTML = arr[i].intro3;
                            } else {
                                p.innerHTML = arr[i].intro4;
                            }
                            div1.appendChild(p);
                        }
                    }
                }
                showcon.appendChild(div)
            }
            option();
        }
    }
    
   
}
f1()

