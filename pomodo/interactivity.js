const time = document.getElementById("timer");
const start = document.getElementById("start-btn");
const reset = document.getElementById("reset-btn");
const stop = document.getElementById("stop-btn");


let totalTime = 3000;
let interval;


const update = function () {
    const min = Math.floor(totalTime / 60);
    const sec = Math.floor(totalTime % 60);


    time.innerHTML = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
    saveTimer();
};


function saveTimer() {
    localStorage.setItem("timerValue", totalTime);
}

function loadTimer() {
    const savedTime = localStorage.getItem("timerValue");
    if (savedTime !== null) {
        totalTime = parseInt(savedTime);
        update();
    }
}

loadTimer();


const startTimer = function () {
    interval = setInterval(function () {
        totalTime--;
        update();

        if (totalTime === 0) {
            clearInterval(interval);
            alert("time up");

            totalTime = 3000;
            saveTimer();
            update();

        };



    }, 1000)
};




const stopTime = function () {
    clearInterval(interval);
    saveTimer();
};


const resetTime = function () {
    clearInterval(interval);
    totalTime = 3000;
    saveTimer();
    update();
};



start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);






const taskInput = document.getElementById("input-task");
const addTaskBtn = document.getElementById("add-task");
const list = document.getElementById("task-list");


function todo() {

    if (taskInput.value === "") {
        alert("write!")
    }
    else {
        const newTask = document.createElement("li");
        newTask.innerHTML = taskInput.value;
        list.appendChild(newTask);
        const span = document.createElement("span");
        span.innerHTML = "remove";
        newTask.appendChild(span);
    }


    taskInput.value = "";
    storeData();
};

addTaskBtn.addEventListener("click", todo);

list.addEventListener("click", function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("sList")
        storeData();
    }

    else if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();
        storeData();
    }

});


function storeData() {
    localStorage.setItem("stored", list.innerHTML);
};


function showList() {
    list.innerHTML = localStorage.getItem("stored")
};
showList();






const changer = document.getElementById("theme-btn");
let bg = 0;
changer.addEventListener("click", function () {
    bg++;

    if (bg === 1) {
        document.body.style.backgroundImage = "url('bg2.jpg')";
    }

    else if (bg === 2) {
        document.body.style.backgroundImage = "url('bg3.jpg')";
    }

    else if (bg === 3) {
        document.body.style.backgroundImage = "url('bg4.jpg')";
        bg = 0;
    }

})



const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-control");

let musicPlay = true;

musicBtn.addEventListener ("click" , function(){
    if (musicPlay){
        music.play();
        musicBtn.innerHTML = "music is playing";
    }

    else {
        music.pause();
        musicBtn.innerHTML = "its off";
    }

    musicPlay = !musicPlay;
})

