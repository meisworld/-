//箭头

//箭头大小范围设置
function randomSize(min, max) {
    min = Math.ceil(40);
    max = Math.ceil(150);
    return Math.floor(Math.random() * (max - min)) + min;
}

//箭头出现位置  
let arrow = document.querySelectorAll('.arrow');
for (let i = 0; i < arrow.length; i++) { //函数变化
    arrow[i].style.left = Math.floor(Math.random() * 900) + 'px'; //定位
    arrow[i].style.top = Math.floor(Math.random() * 900) + 'px';
    arrow[i].style.width = randomSize() + 'px'; //宽度大小
}

//箭头角度跟随
function rotateArrow() {
    arrow.forEach(function(arrow) {
        let x = (arrow.getBoundingClientRect().left) + (arrow.clientWidth / 2);
        let y = (arrow.getBoundingClientRect().top) + (arrow.clientHeight / 2);

        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        arrow.style.transform = "rotate(" + rot + "deg)";
    })
}

//鼠标移动时，运行跟随函数
document.querySelector("body").addEventListener('mousemove', rotateArrow);




//圆形列表
let toggle = document.querySelector('.toggle');
let menu = document.querySelector('.menu');
toggle.onclick = function() {
    menu.classList.toggle('active')
}


// 眼睛跟随
//在区域-内移动-眼睛跟随
document.querySelector(".thire").addEventListener('mousemove', eyes);

function eyes() {
    let eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye) {
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);

        let eyey = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (eyey * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
    })
}

// 小球重复使用引用
document.getElementById('gravity-ball').innerHTML = gravity();
// 重力小球  
function gravity() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext('2d');

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    var r = 50; //小球半径
    var x = 50; //圆心横坐标
    var y = 50; //圆心纵坐标
    var vx = 2; //默认横线坐标
    var vy = 0; //默认纵向坐标
    var g = 0.5; //重力加速度

    (function draw() {
        //清空画布、重新绘制
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();

        vy += g;


        if (y >= canvas.height - r) {
            y = canvas.height - r;

            vy *= -0.6; //纵向速度方向改变 损耗0.4
            vx -= 0.05; //横向速度减少

            if (vx <= 0) {
                vx = 0;
            }
        }

        //画实心圆
        // 画圆
        context.arc(x += vx, y += vy, r, 0, Math.PI * 2);
        //填充
        context.fill();

        requestAnimationFrame(draw);

    }())
}