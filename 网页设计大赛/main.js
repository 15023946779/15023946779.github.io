

var number=false; //判断是否在播放音乐
var num=-1;
var music=document.getElementById("music");
var kuangtu=document.getElementById("kuangtu");
var geming=document.getElementById("geming");
var singer=document.getElementById("singer");
var musics=[
{src:"musics/0.mp3", value:0,img:"photos/10.jpg",name:"相遇",singer:"韩红"},
{src:"musics/1.mp3",value:1,img:"photos/11.jpg",name:"城市",singer:"李四"},
{src:"musics/2.mp3",value:2,img:"photos/13.jpg",name:"黑暗",singer:"张三"},
{src:"musics/3.mp3",value:3,img:"photos/12.jpg",name:"反正我信了",singer:"王五"},
{src:"musics/4.mp3",value:4,img:"photos/9.jpg",name:"平凡之路",singer:"朴树"},
{src:"musics/5.mp3",value:5,img:"photos/5.jfif",name:"发如雪",singer:"周杰伦"},
{src:"musics/6.mp3",value:6,img:"photos/6.jfif",name:"反方向的钟",singer:"周杰伦"},
{src:"musics/7.mp3",value:7,img:"photos/7.jfif",name:"给我一首歌的时间",singer:"周杰伦"},
{src:"musics/8.mp3",value:8,img:"photos/8.webp",name:"花海",singer:"周杰伦"},
{src:"musics/9.mp3",value:9,img:"photos/9.jfif",name:"霍元甲",singer:"周杰伦"},
{src:"musics/10.mp3",value:10,img:"photos/10.jfif",name:"简单爱",singer:"周杰伦"},
{src:"musics/11.mp3",value:11,img:"photos/11.webp",name:"兰亭序",singer:"周杰伦"},
{src:"musics/12.mp3",value:12,img:"photos/12.webp",name:"明明就",singer:"周杰伦"},
{src:"musics/13.mp3",value:13,img:"photos/13.jfif",name:"蒲公英的约定",singer:"周杰伦"},
{src:"musics/14.mp3",value:14,img:"photos/14.webp",name:"七里香",singer:"周杰伦"},
{src:"musics/15.mp3",value:15,img:"photos/15.webp",name:"青花瓷",singer:"周杰伦"},
{src:"musics/16.mp3", value:16,img:"photos/16.webp",name:"晴天",singer:"周杰伦"},
{src:"musics/17.mp3",value:17,img:"photos/17.jfif",name:"听妈妈的话",singer:"周杰伦"},
{src:"musics/18.mp3",value:18,img:"photos/18.jfif",name:"烟花易冷",singer:"周杰伦"},
{src:"musics/19.mp3",value:19,img:"photos/19.jfif",name:"夜曲",singer:"周杰伦"},
{src:"musics/20.mp3",value:20,img:"photos/20.jfif",name:"一路向北",singer:"周杰伦"},
{src:"musics/21.mp3", value:21,img:"photos/21.jfif",name:"以父之名",singer:"周杰伦"},
{src:"musics/22.mp3",value:22,img:"photos/22.webp",name:"告白气球",singer:"周杰伦"},
{src:"musics/23.mp3",value:23,img:"photos/23.webp",name:"搁浅",singer:"周杰伦"},

]

music.addEventListener("ended",function(){
    ff6();
})

function a1(){
    alert("尚未实现");
}

function xinxi(h){
    music.src=musics[h].src;
    kuangtu.src=musics[h].img;
    geming.innerText=musics[h].name;
    singer.innerText=musics[h].singer;
}

function ppp(){
    if(number==false){
        number=true;
        music.play();
    }else{
        number=false;
        music.pause();
    }
}

function panduannumber(){
    if(number==true){
        bf.src="photos/暂停.png";
    }else{
        bf.src="photos/播放.png";
    }
}


function d55(bop){
    if(this.num==0){
        this.num=0;
    }
    if(this.num!=bop){
        this.num=bop;
        xinxi(this.num); 
        music.play();
        number=true;
    }else {ppp();}
    panduannumber();
}
var bf=document.getElementById("bf")
var sys=document.getElementById("sys")
var xys=document.getElementById("xys")
function ff5(){
    if(this.num==-1){
        this.num=0;
        xinxi(this.num)
    }
    if(number==false){
        bf.src="photos/暂停.png";
        number=true;
        music.play();
    }else{
        bf.src="photos/播放.png";
        number=false;
        music.pause();
    }
}
function ff4(){33
    if(this.num==-1){
        this.num=0;
    }
    if(this.num==0){
        this.num=musics.length-1;
    }else{this.num--;}
    xinxi(this.num);
    music.play();
    number=true;
    panduannumber();
}
function ff6(){
    if(this.num==-1){
        this.num=0;
    }
    if(this.num==musics.length-1){
        this.num=0;
    }else{this.num++;}
    xinxi(this.num);
    music.play();
    number=true;
    panduannumber();
}





