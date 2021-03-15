
let background = document.getElementsByClassName("layer-background");
var bg = background[0];
console.log(bg)

let layer1 = document.getElementsByClassName("layer-1");
var l1 = layer1[0];
console.log(l1)

let layer2 = document.getElementsByClassName("layer-2");
var l2 = layer2[0];
console.log(l2)

let postava = document.getElementsByClassName("layer-man");
var man = postava[0];
console.log(man)

let layer4 = document.getElementsByClassName("layer-4");
var l4 = layer4[0];
console.log(l4)

window.addEventListener('scroll', function() {
    var scroll = window.scrollY;

    bg.style.top = scroll * 0 + 'px';
    l1.style.right = scroll * 0.9 + 'px';
    l2.style.top = scroll * 0.7 + 'px';
    man.style.right = -scroll * 0.5 + 'px';
    l4.style.top = scroll * 0.3 + 'px';

    console.log(scroll)
})