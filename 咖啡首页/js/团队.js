var dds=document.getElementsByTagName("dd");
var img=document.getElementsByClassName("img");
var team=document.getElementsByClassName("Team-tu")[0];
var t_intro=document.getElementsByClassName("Team-introduce");
var t_imgs=team.children;
for(var i=0;i<dds.length;i++){
    dds[i].index=i;
    dds[i].onclick=function(){
        for(var i=0;i<dds.length;i++){
            img[i].style.display="none";
            dds[i].style.background=""
            t_imgs[i].style.display="none";
            t_intro[i].style.display="none";
        }
        img[this.index].style.display="block";
        this.style.background="#333333";
        this.color="white";
        t_imgs[this.index].style.display="block";
        t_intro[this.index].style.display="block";
    }
}