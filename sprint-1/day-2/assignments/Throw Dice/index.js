
let rand = function () {return Math.floor(Math.random() * (6 - 1 + 1)) + 1; }

let mem1 = document.getElementById("member-1")
let mem2 = document.getElementById("member-2")
let mem3 = document.getElementById("member-3")
let win = document.getElementById("winner")


function roll() {
    mem1.classList.add("shake");
    mem2.classList.add("shake");
    mem3.classList.add("shake");

    setTimeout(function(){
        mem1.removeAttribute('class');
        mem2.removeAttribute('class');
        mem3.removeAttribute('class');
        mem1.innerText = rand();
        let num1 = mem1.innerText
        mem2.innerText = rand();
        let num2 = mem2.innerText
        mem3.innerText = rand();
        let num3 = mem3.innerText
        if (num1 == num2 || num3 == num1 || num2 == num3) { 
            mem1.removeAttribute('class');
            mem2.removeAttribute('class');
            mem3.removeAttribute('class');
            win.innerText="It's TIE"
        } else if (num1 > num2) {
            if (num1 > num3) {
                mem1.classList.toggle("green");
                win.innerText="Member-1 is Winner"
                if (num2 > num3) {
                    mem2.classList.toggle("yellow");
                    mem3.classList.toggle("red");
                } else {
                    mem3.classList.toggle("yellow");
                    mem2.classList.toggle("red");
                }
            }else{
                mem1.classList.toggle("yellow");
                mem3.classList.toggle("green");
                mem2.classList.toggle("red");
                win.innerText="Member-3 is Winner"
            } 
        } else if (num2>num3) { 
            mem2.classList.toggle("green");
            win.innerText="Member-2 is Winner"
            if (num1 > num3) {
                mem1.classList.toggle("yellow");
                mem3.classList.toggle("red");
            } else {
                mem3.classList.toggle("yellow");
                mem1.classList.toggle("red");
            }    
        } else {
            mem3.classList.toggle("green");
            win.innerText="Member-3 is Winner"
            if (num1 > num2) {
                mem1.classList.toggle("yellow");
                mem2.classList.toggle("red");
            } else {
                mem2.classList.toggle("yellow");
                mem1.classList.toggle("red");
            } 
        }

    },
    1000
    );
}