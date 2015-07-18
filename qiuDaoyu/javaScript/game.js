/**
 * Created by Administrator on 2015/7/18 0018.
 * 根据 http://www.cnblogs.com/Wayou/p/how-to-make-a-simple-html5-canvas-game.html 改编
 * TODO 把按键玩法改变为触摸玩法
 */
// 游戏对象-招财猫
var zcm = {
    speed: 200,
    x: 0,
    y: 0

};
// 游戏对象-元宝类
function c_yb() {
    var speed = 3,
        x = 0,
        y = 0;
};
c_yb.prototype.init = function () {
    this.speed = 3;
    this.y = -canvas.height * 2 * Math.random();
    this.x = (canvas.width + 50) * Math.random() - 25;
}
var ybs = [];
//游戏对象-时间、分数
var gtime = 0, gscore = 0 , ybsl = 5, gstop = true;


// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 480;
document.body.appendChild(canvas);

// 招财猫图片
var zcmReady = false;
var zcmImage = new Image();
zcmImage.onload = function () {
    zcmReady = true;
};
zcmImage.src = "zcm.png";
// 元宝图片
var ybReady = false;
var ybImage = new Image();
ybImage.onload = function () {
    ybReady = true;
};
ybImage.src = "yb.png";

//处理按键
var keysDown = {};

addEventListener("keydown", function (e) {
    keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
    delete keysDown[e.keyCode];
}, false);

//开始新一轮游戏
var reset = function () {
    gstop = false;
    gtime = 30;//时间、分数重置、元宝数
    gscore = 0;
    ybsl = 5;
    zcm.x = canvas.width / 2 - 43;//猫居中
    zcm.y = canvas.height - 109;

    for (var i = 0; i < ybsl; i++) {
        ybs[i] = new c_yb();
        ybs[i].init();
    }
}

//更新游戏
var update = function (modifier) {
    // console.log('更新游戏');
    if (37 in keysDown) { // 用户按的是←
        zcm.x > -35 ? zcm.x -= zcm.speed * modifier : zcm.x = -34;
    }
    if (39 in keysDown) { // 用户按的是→
        if (zcm.x < (canvas.width - 35))
            zcm.x += zcm.speed * modifier;
        else zcm.x = canvas.width - 36;
    }

    if (gtime > 0) {
        for (var i = 0; i < ybsl; i++) {
            if (ybs[i].y > (canvas.height - 100)) {
                if (Math.abs(zcm.x + 44 - ybs[i].x - 25) < 80) {
                    gscore++;
                } else {
                    gscore--;
                }
                ybs[i].init();
            } else {
                ybs[i].y += ybs[i].speed;
            }
        }
    } else {
        gstop = true;
        if (38 in keysDown) { // 用户按的是
            reset();
        }
    }

}
//画出所有物体
var render = function () {
    //背景
    ctx.fillStyle = "#ff9588";
    ctx.fillRect(0, 0, 300, 480);
    ctx.fillStyle = "#000";
    ctx.font = "16px Helvetica";
    //console.log('画出所有物体');
    if (zcmReady) {
        ctx.drawImage(zcmImage, zcm.x, zcm.y);
    }
    if (ybReady) {
        for (var i = 0; i < ybsl; i++) {
            ctx.drawImage(ybImage, ybs[i].x, ybs[i].y);
        }
    }
    if (gstop) {
        //ctx.fillText("分数: " + gscore, 32, 32);
       // ctx.fillText("时间: " + 0, 32, 50);
        ctx.fillStyle = "red";
        ctx.font = "20px Helvetica";
        ctx.fillText("你的得分为："+gscore, 80,70);
        ctx.fillText("哎哟，不错哦!",80, 95);
        ctx.fillText("按↑重新开始^_^", 80, 115);


    } else {
        ctx.fillText("分数: " + gscore, 32, 32);
        ctx.fillText("时间: " + gtime.toString().substring(0, 5), 32, 50);
    }

}

// 游戏主函数
var main = function () {
    var now = Date.now();
    var delta = now - then;
    gtime = (gtime * 1000 - delta) / 1000;
    update(delta / 1000);
    render();
    then = now;
    // 立即调用主函数
    requestAnimationFrame(main);
};

var then = Date.now();
reset();

main();
