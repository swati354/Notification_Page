// console.log("called");
function myfunc(div) {
    console.log("called");
    console.log(div);

    console.log(div.className);
    div.className = div.className.replace("blue", "");
    let ct = parseInt(document.getElementById("count").innerHTML);
    console.log(ct);
    ct--;
    document.getElementById("count").innerHTML = ct;
}

let divs = document.getElementsByClassName("blue");
for (let i = 0; i < divs.length; i++) {
    let ele = divs[i];
    divs[i].addEventListener("click", () => { myfunc(ele) });
    // console.log(divs[i]);
}

let read = document.getElementById("markRead");
function myFunction() {
    const boxes = document.querySelectorAll('.blue');

    boxes.forEach(blue => {
        blue.className = blue.className.replace("blue", "");
        let ct = parseInt(document.getElementById("count").innerHTML);
        console.log(ct);
        ct = 0;
        document.getElementById("count").innerHTML = ct;

    });

}
read.addEventListener("click", myFunction);