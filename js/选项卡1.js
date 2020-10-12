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

option();