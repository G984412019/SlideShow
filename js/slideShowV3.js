let count = 1;
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
function left() {
  count = count - 1;
  if(count==0){
    count = 19;
    thumbnailsElement.children[0].classList.remove("selected");

  }else{
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if(count<10){
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+count+".jpg";
  }
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add("selected");
}

function right() {
  count = count + 1;
  if(count==20){
    count = 1;
    thumbnailsElement.children[18].classList.remove("selected");
  }else{
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  let mainElement = document.querySelector("div.main>img");
  if(count<10){
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_0" + count + ".jpg";
  }else{
    URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"+count+".jpg";
  }
  mainElement.setAttribute('src', URL);
  thumbnailsElement.children[count-1].classList.add("selected");
}

let nowPlaying = false;
let timer;

function play() {
  if(!nowPlaying){
    nowPlaying = true;
    autoPlay();
  }
}

function autoPlay() {
  right();
  timer = setTimeout(function () {
    autoPlay();
  }, 1000);
}

function stop () {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  thumbnailsElement.children[count-1].classList.remove("selected");
  thumbnailsElement.children[0].classList.add("selected");
  URL = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg"
  mainElement.setAttribute('src', URL);
  count=1;
}
