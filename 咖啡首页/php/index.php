<?php
// 首页
$hide=$_REQUEST["hide"];
$conn=mysqli_connect("127.0.0.1","root","","h52004",3306);
mysqli_query($conn,"SET NAMES utf8");
if($hide==1){
    $sql="SELECT * FROM product ORDER BY id DESC LIMIT 3";
    $result=mysqli_query($conn,$sql);
    $arr=[];
    while(($row=mysqli_fetch_assoc($result))!=null){
        array_push($arr,$row);  
    }
    echo json_encode($arr);    
}else if($hide==2){
    $arr=[];
    $sql="SELECT src FROM banner ORDER BY id DESC LIMIT 4";
    $result=mysqli_query($conn,$sql);
    while(($row=mysqli_fetch_row($result))!=null){
        array_push($arr,$row[0]);
    }
    echo json_encode($arr);
}else if($hide==3){
    $arr=[];
    $sql="SELECT * FROM team ORDER BY id DESC LIMIT 4";
    $result=mysqli_query($conn,$sql);
    while(($row=mysqli_fetch_assoc($result))!=null){
        array_push($arr,$row);
    }
    echo json_encode($arr);
}else if($hide==4){// 关于我们_新闻中心
    $arr=[];
    $sql="SELECT * FROM news ORDER BY id DESC LIMIT 5";
    $result=mysqli_query($conn,$sql);
    while(($row=mysqli_fetch_assoc($result))!=null){
        array_push($arr,$row);
    }
    echo json_encode($arr);
}else if($hide==5){// 产品展示
    $arr=[];
    $sql="SELECT * FROM showitem ORDER BY id DESC LIMIT 3";
    $result=mysqli_query($conn,$sql);
    while(($row=mysqli_fetch_assoc($result))!=null){
        array_push($arr,$row);
    }
    echo json_encode($arr);
}




?>