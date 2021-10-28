const sockImg = document.querySelector('.sockMain');

// Color buttons block

const buttonGreen = document.querySelector('#green');
const buttonBeige = document.querySelector('#beige');
const buttonOrange = document.querySelector('#orange');
const buttonRed = document.querySelector('#red');
const buttonBlue = document.querySelector('#blue');
const buttonYellow = document.querySelector('#yellow');
const buttonPink = document.querySelector('#pink');

buttonGreen.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockGreen");
});

buttonBeige.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockBeige");
});

buttonOrange.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockOrange");
});

buttonRed.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockRed");
});

buttonBlue.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockBlue");
});

buttonYellow.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockYellow");
});

buttonPink.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
  sockImg.classList.add("sockMain", "sockPink");
});

// Image buttons block

const buttonWhale= document.querySelector('#whale');
const buttonTiger= document.querySelector('#tiger');
const buttonRobin= document.querySelector('#robin');
const buttonMountain= document.querySelector('#mountain');
const buttonWine= document.querySelector('#wine');
const buttonShawarma= document.querySelector('#shawarma');
const buttonCannabis= document.querySelector('#cannabis');

buttonWhale.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockWhale");
});

buttonTiger.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockTiger");
});

buttonRobin.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockElbrus",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockRobin");
});

buttonMountain.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockMountain");
});

buttonWine.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockWine");
});

buttonShawarma.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockShawarma");
});

buttonCannabis.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    );
  sockImg.classList.add("sockCannabis");
});

// Pattern buttons block

const buttonOleg = document.querySelector('#oleg');
const buttonElbrus = document.querySelector('#elbrus');
const buttonHeart = document.querySelector('#heart');
const buttonCat = document.querySelector('#cat');
const buttonPoo = document.querySelector('#poo');
const buttonSockPrint = document.querySelector('#sockSockPrint');
const buttonStripes = document.querySelector('#stripes');


buttonOleg.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockOleg");
});
buttonElbrus.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockElbrus");
});
buttonHeart.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockHeart");
});
buttonCat.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockCat");
});
buttonPoo.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockPoo");
});
buttonSockPrint.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockSockPrint");
});
buttonStripes.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo",
    "sockSockPrint", 
    "sockStripes",
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis"
    )
  sockImg.classList.add("sockStripes");
});

// delete buttons

const buttonDelColor = document.getElementById('del-color');
const buttonDelImg = document.getElementById('del-img');
const buttonDelPattern = document.getElementById('del-pattern');

buttonDelColor.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockGreen",
    "sockBeige", 
    "sockOrange", 
    "sockRed",
    "sockBlue", 
    "sockYellow", 
    "sockPink");
});

buttonDelImg.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockWhale", 
    "sockTiger",
    "sockRobin",
    "sockMountain",
    "sockWine",
    "sockShawarma",
    "sockCannabis")
});
buttonDelPattern.addEventListener('click', () => {
  sockImg.classList.remove(
    "sockOleg",
    "sockElbrus", 
    "sockHeart",
    "sockCat",
    "sockPoo", 
    "sockSockPrint",
    "sockStripes",)
});
