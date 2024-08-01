let menu = document.querySelector(".menu")
let navbar = document.querySelector(".navbar")
let navUl = document.querySelector(".nav-ul")
let navCont = document.querySelector(".nav-container")
let navX = document.querySelector(".nav-x")
let burg = document.querySelectorAll(".burger")
let miniCont = document.querySelector(".mini-container")
let mainCont1 = document.querySelector(".main-container-1")
let list = document.querySelectorAll(".nav-li")
let navA = document.querySelectorAll(".nav-a")
let top3 = document.querySelector(".top3")
let homeText = document.querySelector(".homeText")
let homeTextWrapper = document.querySelectorAll(".homeTextWrapper")
let homeSpan = document.querySelectorAll(".home-span")
let homeP = document.querySelectorAll(".home-p")
let homeButton1 = document.querySelector(".home-button-1")
let buttonCont1 = document.querySelector(".button-cont-1")
let mainHomeTextWrapper = document.querySelector(".mainHomeTextWrapper")
let ms = document.querySelectorAll(".m")
window.addEventListener('resize', ()=> {
    let eachTypeCont = document.querySelectorAll(".each-type-cont")
    let lis = document.querySelectorAll(".lis")
    if(window.innerWidth <= 1200 && window.innerWidth > 840){  
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click",()=>{
                console.log(i)
                window.scrollTo(0,eachTypeCont[i].getBoundingClientRect().top + scrollY - 20 - 84)
            })
        }
    } else if(window.innerWidth <= 840){
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click",()=>{
                window.scrollTo(0,eachTypeCont[i].getBoundingClientRect().top + scrollY - 20 - 128)
            })
        }
    } else {
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click",()=>{
                window.scrollTo(0,eachTypeCont[i].getBoundingClientRect().top + scrollY - 20)
            })
        }
    }
})


    let footerLi = document.querySelectorAll(".pages")
    footerLi.forEach(function(item,i){
        item.addEventListener("click", ()=>{
            window.scrollTo(0,ms[i].getBoundingClientRect().top + scrollY)
            navA[i].click()
        })
    })

window.onload = function(){
    // window.scrollTo(0,0)
    let eachTypeCont = document.querySelectorAll(".each-type-cont")
    let lis = document.querySelectorAll(".lis")  

    if(window.innerWidth <= 1200 && window.innerWidth > 840){  
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click",()=>{
                window.scrollTo(0,eachTypeCont[i].getBoundingClientRect().top + scrollY - 20 - 84)
            })
        }
    } else if(window.innerWidth <= 840){
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click",()=>{
                window.scrollTo(0,eachTypeCont[i].getBoundingClientRect().top + scrollY - 20 - 128)
            })
        }
    } else {
        for(let i = 0; i < lis.length; i++) {
            lis[i].addEventListener("click",()=>{
                window.scrollTo(0,eachTypeCont[i].getBoundingClientRect().top + scrollY - 20)
            })
        }
    }

    for(let i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover",function(){
            this.style.boxShadow = "0 2px 20px black"
            this.style.zIndex = "1"
        })
        lis[i].addEventListener("mouseout",function(){
            this.style.boxShadow = "0px 1.5px 4px rgb(0, 0, 0)"
            this.style.zIndex = "0"
        })
        lis[i].addEventListener("click",function(){
            this.style.boxShadow = "0px 1.5px 4px rgb(0, 0, 0)"
        })
    }
    let plus = 0
    let plus2 = 0
    list.forEach(function(item,i){
        item.addEventListener("click", ()=>{
            window.scrollTo(0,ms[i].getBoundingClientRect().top + scrollY)
        })
        item.style.transition = `1s ${plus2}s`
        plus2 += 0.15
        item.style.transform = "translate(0)"
        setTimeout(() => {
            item.style.transition = "1s 0s"
        }, 500);
    })
    burg.forEach(e => {
        e.style.transform = "translate(0)"
        e.style.transitionDelay = `${plus}s`
        plus += 0.2
    })
    //mini-container
    top3.style.transform = "translate(0)"
    top3.style.marginTop = "10px"
    miniCont.style.opacity = "1"
    navbar.style.opacity = "1"
    navbar.style.width = "39.4944%"
    setTimeout(() => {
        mainHomeTextWrapper.style.display = "block"
        homeButton1.style.display = "grid"
    }, 1300);
    setTimeout(() => {
        homeText.style.opacity = "1"
    }, 1500);
}

window.addEventListener("load", loadLessThan)
function loadLessThan() {
    if(window.innerWidth <= 1024){
        for(let e = 0; e < homeP.length; e++) {
            homeP[e].classList.add("homePLess1024")
            homeSpan[e].classList.add("homeSpanLess1024")
            homeTextWrapper[e].classList.add("homeTextWrapperLess1024")
        }
        homeText.classList.add("homeTextLess1024")
        mainCont1.classList.add("mainCont1Less1024")
        mainHomeTextWrapper.classList.add("mainHomeTextWrapperLess1024")
        homeButton1.classList.add("homeButton1Less1024")
        buttonCont1.classList.add("buttonCont1Less1024")
    }
    if (window.innerWidth <= 1200 && window.innerWidth > 1024) {
        homeSpan.forEach(e => {
            e.classList.add("homeSpanLess1200")
        });
    }
    if(window.innerWidth < 768){
        homeP.forEach(function(e) {
            e.classList.add("homePLess768")
        })
    }
    if (window.innerWidth <= 576){
        navbar.style.width = "95%"
        miniCont.style.height = "300px"
        setTimeout(() => {
            miniCont.classList.add("miniContLess576")
        }, 1300);
    } else if (window.innerWidth <= 768 && window.innerWidth >= 576){
        navbar.style.width = "95%"
        miniCont.style.height = "400px"
        setTimeout(() => {
            miniCont.classList.add("miniContBetween576-768")
        }, 1300);
    } else if (window.innerWidth <= 1024 && window.innerWidth >= 768){
        miniCont.style.height = "400px"
        setTimeout(() => {
            miniCont.classList.add("miniContBetween768-1024")
        }, 1300);
    } else if(window.innerWidth >= 1024){
        miniCont.style.height = "500px"
        miniCont.style.transform = "translateX(25%)"
        setTimeout(() => {
            miniCont.classList.add("miniContMore1024")
            miniCont.style.transform = "translateX(0)"
        }, 1300);
    }
}

    var abs1 = document.querySelector(".abs-1")
    var abs2 = document.querySelector(".abs-2")
    var abs3 = document.querySelector(".abs-3")
    var searchInput = document.querySelector(".search-input")
    var searchIWrap = document.querySelector(".search-i-wrap")

window.addEventListener("resize", resizing)
function resizing() {
    //homeText removing
    for(let e = 0; e < homeP.length; e++) { 
        homeP[e].classList.remove("homePLess768")
        homeP[e].classList.remove("homePLess1024")
        homeSpan[e].classList.remove("homeSpanLess1200")
        homeSpan[e].classList.remove("homeSpanLess1024")
        homeTextWrapper[e].classList.remove("homeTextWrapperLess1024")
    }
    homeText.classList.remove("homeTextLess1024")
    mainCont1.classList.remove("mainCont1Less1024")
    mainHomeTextWrapper.classList.remove("mainHomeTextWrapperLess1024")
    homeButton1.classList.remove("homeButton1Less1024")
    buttonCont1.classList.remove("buttonCont1Less1024")
    //miniCont removing
    miniCont.classList.remove("miniContLess576")
    miniCont.classList.remove("miniContBetween576-768")
    miniCont.classList.remove("miniContBetween768-1024")
    miniCont.classList.remove("miniContMore1024")
    if(window.innerWidth <= 1024){
        for(let e = 0; e < homeP.length; e++) { 
            homeP[e].classList.add("homePLess1024")
            homeSpan[e].classList.add("homeSpanLess1024")
            homeTextWrapper[e].classList.add("homeTextWrapperLess1024")
        }
        homeText.classList.add("homeTextLess1024")
        mainCont1.classList.add("mainCont1Less1024")
        mainHomeTextWrapper.classList.add("mainHomeTextWrapperLess1024")
        homeButton1.classList.add("homeButton1Less1024")
        buttonCont1.classList.add("buttonCont1Less1024")
    }
    if (window.innerWidth <= 1200 && window.innerWidth > 1024) {
        homeSpan.forEach(e => {
            e.classList.add("homeSpanLess1200")
        });
    }
    if(window.innerWidth < 768){
        homeP.forEach(function(e) {
            e.classList.add("homePLess768")
        })
    }
    if (window.innerWidth <= 576) {    
        navbar.style.width = "95%"
        miniCont.classList.add("miniContLess576")
    } else if (window.innerWidth <= 768 && window.innerWidth >= 576){
        navbar.style.width = "95%"
        miniCont.classList.add("miniContBetween576-768")
    } else if (window.innerWidth <= 1024 && window.innerWidth >= 768) {
        navbar.style.width = "39.4944%"
        miniCont.classList.add("miniContBetween768-1024")
    } else if(window.innerWidth >= 1024) {
        navbar.style.width = "39.4944%"
        miniCont.classList.add("miniContMore1024")
    }
    if(window.innerWidth < 1200){
        navX.style.display = "flex"
        navX.classList.add("onNavX")
        navCont.classList.add("onNavCont")
        navbar.classList.add("onNav")
        navUl.classList.add("onNavUl")
        navUl.classList.add("onNavUlD")
    } else {
        navX.style.display = "none"
        navX.classList.remove("onNavX")
        navCont.classList.remove("onNavCont")
        navbar.classList.remove("onNav")
        navUl.classList.remove("onNavUl")
        navUl.classList.remove("onNavUlD")
        window.addEventListener("scroll", scrollNav)
    }
    chooseUl.style.transform = "translate(0)"
    chooseClicks = 0
    nashtia = false
    navbar.style.transition = "0.3s ease-in-out"
    if(window.innerWidth > 1550){
        
        abs1.style.fontSize = `${window.innerWidth / 4}px`
        abs2.style.fontSize = `${window.innerWidth / 12}px`
        abs3.style.fontSize = `${window.innerWidth / 7}px`
    }
    searchIWrap.style.height = `${searchInput.clientHeight-1}px`
}
searchIWrap.style.height = `${searchInput.clientHeight-1}px`
if(window.innerWidth > 1550){
    abs1.style.fontSize = `${window.innerWidth / 4}px`
    abs2.style.fontSize = `${window.innerWidth / 12}px`
    abs3.style.fontSize = `${window.innerWidth / 7}px`
}

if(window.innerWidth < 1200){
    navCont.style.left = ``
    navX.style.display = "flex"
    navX.classList.add("onNavX")
    navCont.classList.add("onNavCont")
    navbar.classList.add("onNav")
    navUl.classList.add("onNavUl")
    navUl.classList.add("onNavUlD")
} else {
    navX.style.display = "none"
    navX.classList.remove("onNavX")
    navCont.classList.remove("onNavCont")
    navbar.classList.remove("onNav")
    navUl.classList.remove("onNavUl")
    navUl.classList.remove("onNavUlD")
    window.addEventListener("scroll", scrollNav)
}


function hideNav(){
    navbar.style.transition = "0.3s ease-in-out"
    navX.classList.toggle("onNavX")
    navCont.classList.toggle("onNavCont")
    navbar.classList.toggle("onNav")
    navUl.classList.toggle("onNavUl")
    setTimeout(() => {
        navUl.classList.toggle("onNavUlD")
    }, 200);
}


let lastScrolled = scrollY
function scrollNav(){
    if(lastScrolled < scrollY){
        navbar.style.transition = `0.3s ease-out`
        navbar.style.transform = "translateY(calc(-100% - 20px))"
    } else {
        navbar.style.transition = `0.5s ease-out`
        navbar.style.transform = "translateY(0)"
    }
    lastScrolled = scrollY
}


homeButton1.addEventListener("click", function(){
    list[1].click()
    window.scrollTo(0,menu.getBoundingClientRect().top + scrollY)
})

list.forEach(function(e,i) {
    e.addEventListener("click", () =>{
        list.forEach(function(item,index){
            navA[index].style.color = "var(--sixty)"
            item.style.border = "none"
            if(index < i){
                item.style.transform = `translateX(200%)`
            } else {
                item.style.transform = `translateX(0px)`
            }
        })
        navA[i].style.color = "white"
        e.style.transform = `translateX(-${i * 200}%)`
    })
})


class Menu {
    constructor(type, image, name, description, price){
        this.type = type,
        this.image = image,
        this.name = name,
        this.description = description,
        this.price = price
    }
}

let item1 = new Menu("Burgers","images/Double Texas Smoked Burger.png","Double Texas Smoked Burger", "Double Beef, bread, two slices of cheddar cheese, fried onions, bacon, barbecue sauce","$25.00")
let item2 = new Menu("Burgers","images/bigking.png","Big King", "beef, big king bread, cheddar cheese, iceberg, onion, pickle, big king sauce","$12.50")
let item3 = new Menu("Chicken Burgers","images/chickenwhopper.png","Chicken Whooper", "Chicken royal meat, bread, mayonnaise, iceberg,cheese","$10.00")
let item4 = new Menu("Burgers","images/steakhouse.png","Steakhouse", "Beef steak, bread, fried onions, two slices of cheddar cheese, iceberg, tomato, mayonnaise, steak sauce","$14.00")
let item5 = new Menu("Chicken Burgers","images/doublekingchickensandwich.png", "Double King Chicken Sandwich","Double chicken meat, bread, iceberg, mayonnaise","$10.00")
let item6 = new Menu("Chicken Burgers","images/doublekingchickensandwich.png","Chicken Burger", "Chicken burger with delicate chicken, lettuce ketchup and mayonnaise","$4.50")
let item7 = new Menu("Burgers","images/triplewhopperwithcheese.png","Triple Whooper with cheese", "Triple beef, bread, ketchup, mayonnaise, iceberg, onion, pickle, tomato,cheese","$26.00")
let item9 = new Menu("Burgers","images/doublekoftburger.png","Double Koftburger","Double beef, bread, mayonnaise, iceberg, ketchup, pickle","$10.00")
let item10 = new Menu("Chicken Burgers","images/cheeseburger.png","Cheeseburger","Chicken burger with cheese","$4.50")
let item11 = new Menu("Soft drinks","images/fanta.png","Fanta 0.5l","", "$2.00")
let item12 = new Menu("Soft drinks","images/coke.png","Coca-cola 0.5l","", "$2.00")
let item14 = new Menu("Sides","images/nuggets.png","Chicken tenders","","$4.00")
let item15 = new Menu("Sides","images/fries.png","French fries","","$3.00")
let item16 = new Menu("Sides","images/cheesesticks.png","Cheese sticks","","$3.50")
let item17 = new Menu("Desserts","images/chocolatesouffle.png","Chocolate souffle","","$6.00")
let item18 = new Menu("Desserts","images/applepie.png","Apple cake","","$3.50")
let item19 = new Menu("Desserts","images/appledesert.png","Apple dessert","","$3.50")

var items = [item1, item2, item3, item4, item5, item6, item7, item9, item10, item11, item12, item14, item15, item16, item17, item18, item19]
for(let j = 0; j < items.length; j++) {
    let itemWrap = document.querySelectorAll(".item-wrap")
    let mainMenu = document.querySelector(".main-menu")
    let eachTypeCont = document.querySelectorAll(".each-type-cont")
    let isFound = false
    let index = 0
    for(let i = 0; i < eachTypeCont.length; i++) {
        if(items[j].type == eachTypeCont[i].getAttribute("data-type")) {
            isFound = true
            itemWrap[i].innerHTML += 
            `
            <div class="item" data-price="${items[j].price.slice(1)}" 
            data-type="${items[j].type}" data-image="${items[j].image}">
                <div class="img-txt-wrap">
        
                <div class="img-cont">
                    <img class="item-img"
                        src="${items[j].image}" alt="No photo">
                </div>
        
                <div class="bottom-txt" id="bottom-txt">
                    <div class="txt-wrap">
                        <div class="item-name-wrap">
                            <p class="item-name">${items[j].name}</p>
                        </div>
                        <div class="item-desc-wrap"><span class="item-desc">${items[j].description}</span></div>
                    </div>
                    <div class="quantity">
                        <p class="price">${items[j].price}</p>
                        <div class="button-wrap" data-Lindex="${index}">
                            <button class="q-button plus" onclick="addItems(this)">+</button>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
            `
        } 
        index++
    }
    if (isFound == false){
        mainMenu.innerHTML += `
            <div class="each-type-cont" data-type="${items[j].type}">
                <div class="type-name-cont">
                    <p class="type-name">${items[j].type}</p>
                </div>

                <div class="item-wrap">
                    <div class="line-wrap">
                        <div class="line"></div>
                    </div>

                    <div class="item" data-price="${items[j].price.slice(1)}" 
                    data-type="${items[j].type}" data-image="${items[j].image}">
                <div class="img-txt-wrap">
        
                <div class="img-cont">
                    <img class="item-img"
                        src="${items[j].image}" alt="No photo">
                </div>
        
                <div class="bottom-txt" id="bottom-txt">
                    <div class="txt-wrap">
                        <div class="item-name-wrap">
                            <p class="item-name">${items[j].name}</p>
                        </div>
                        <div class="item-desc-wrap"><span class="item-desc">${items[j].description}</span></div>
                    </div>
                    <div class="quantity">
                        <p class="price">${items[j].price}</p>
                        <div class="button-wrap" data-Lindex="${index}">
                            <button class="q-button plus" onclick="addItems(this)">+</button>
                        </div>
                    </div>
                </div>
        
            </div>
        </div>

                </div>
            </div>
            `
    }
}

window.addEventListener("DOMContentLoaded",function(){
    var buttonWrap = document.querySelectorAll(".button-wrap")
    var eachTypeCont = document.querySelectorAll(".each-type-cont")
    var orderTop = document.querySelector(".my-order-top")
    for(let j = 0; j < eachTypeCont.length; j++){
        orderTop.innerHTML += `
        <div class="ordered-ul-wrap" data-bigIndex="${j}">
            <ul data-type="" class="ordered-ul">
                <li class="ordered-type-li same" data-bigIndex="${j}"></li>
            </ul>
        </div>`
    }
    for(let i = 0; i < buttonWrap.length; i++){
        buttonWrap[i].setAttribute("data-Sindex", i)
    }
})

var myOM = document.querySelector(".my-order-main")
var myOB = document.querySelector(".my-order-bottom")
var myOT = document.querySelector(".my-order-top")
var finalPriceWrap = document.querySelector(".final-price-wrap")
var xOM = document.querySelector(".x-OM")
var seeOrder = document.querySelector(".see-order")
var inxOM = document.querySelector(".in-x-OM")
var abs = document.querySelector(".abs")

function hidexOM(){
    xOM.classList.toggle("onxOM")
    myOM.classList.toggle("onMyOM")
    myOB.classList.toggle("none")
    myOT.classList.toggle("none")
    seeOrder.classList.toggle("none")
    inxOM.classList.toggle("none")
    abs.classList.toggle("none")
    myStyleToP()
}

function seeYourOrder() {
    myOM.classList.add("onMyOM")
    xOM.classList.add("onxOM")
    xOM.classList.remove("none")
    inxOM.classList.add("none")
    myOB.classList.add("none")
    myOT.classList.add("none")
    seeOrder.classList.remove("none")
    abs.classList.add("none")
}

let plusClicked = false
let chooseMain = document.querySelector(".choose-main")
let search = document.querySelector(".search")
let arrows = document.querySelector(".arrows")
window.addEventListener("resize", function(){
    if(window.innerWidth < 1200){
        arrows.classList.remove("none")
        arrows.appendChild(search)
        if(plusClicked == true){
            myOM.classList.remove("none")
        } else {
            myOM.classList.add("none")
        }
        seeYourOrder()
    } else {
        arrows.classList.add("none")
        chooseMain.appendChild(search)
        myOM.classList.remove("onMyOM")
        myOM.classList.remove("none")
        xOM.classList.add("none")
        myOB.classList.remove("none")
        myOT.classList.remove("none")
        seeOrder.classList.add("none")
        abs.classList.add("none")
    }
})

if(window.innerWidth < 1200){
    arrows.classList.remove("none")
    arrows.appendChild(search)
    myOM.classList.add("onMyOM")
    myOM.classList.add("none")
} else {
    arrows.classList.add("none")
    chooseMain.appendChild(search)
    myOM.classList.remove("none")
    myOM.classList.remove("onMyOM")
}
//searching things

window.addEventListener('load',function(){
var item = document.querySelectorAll(".item")
var searchInput = document.querySelector(".search-input")
var itemName = document.querySelectorAll(".item-name")
var itemWrapper = document.createElement("div")
itemWrapper.classList.add("item-wrapper")
var MYUL = document.createElement("ul")
MYUL.classList.add("MYUL")


searchInput.addEventListener("keyup", function(e){
    if(searchInput.value.length > 0){
        this.style.borderRadius = `4px 4px 0 0 `
    } else {    
        this.style.borderRadius = `4px`
    }
    let NoFound = true
    MYUL.innerHTML = ""
    for(let i = 0; i < itemName.length; i++){
                if(itemName[i].innerHTML.toLowerCase().split(" ").join("").includes(searchInput.value.toLowerCase().split(" ").join("")) && searchInput.value.split(" ").join("") != ""){
                    NoFound = false
                    itemWrapper.classList.remove('none')
                    //uls and lis
                    itemWrapper.style.top = `100%`
                    search.append(itemWrapper)
                    itemWrapper.append(MYUL)
                    var searched = document.createElement("li")
                    searched.classList.add("searched")
                    searched.innerHTML = `${itemName[i].innerHTML}`
                    MYUL.appendChild(searched)
                    searched.addEventListener("click", function(){
                        if(window.innerWidth < 840){
                            window.scroll(0,item[i].getBoundingClientRect().top + scrollY - 10 - 128)
                        } else if(window.innerWidth >= 840 && window.innerWidth < 1200){
                            window.scroll(0,item[i].getBoundingClientRect().top + scrollY - 10 - 138)
                        } else {
                            window.scroll(0,item[i].getBoundingClientRect().top + scrollY - 10)
                        }
                        itemWrapper.classList.add('none')
                        searchInput.value = ""
                        searchInput.style.borderRadius = `4px`

                        item[i].style.transition = `0.4s`
                        item[i].style.backgroundColor = "var(--thirty)"
                        setTimeout(() => {
                            item[i].style.transition = "0.6s ease-in-out"
                            item[i].style.backgroundColor = "var(--sixty)"
                        }, (Math.abs(parseInt(item[i].getBoundingClientRect().top / 400)) * 70) + 300);
                    })
        }
    }
    if(searchInput.value.length == 0 || NoFound == true){
        itemWrapper.classList.add('none')
    }
})
})
function myStyleToP(){
    myOM.style.bottom = `calc(50% - ${myOM.clientHeight / 2}px)`
}

var changeOrderClicked = false
var orderPrice = 0
function addItems(e){
    plusClicked = true
    if(window.innerWidth < 1200){
        myStyleToP()
        myOM.classList.add("onMyOM")
        myOM.classList.remove("none")
        myOB.classList.add("none")
        myOT.classList.add("none")
        seeOrder.classList.remove("none")
        xOM.classList.add("onxOM")
        inxOM.classList.add("none")
    }
    
    var changeBTn = document.querySelector(".change-order-btn")
    var confirmSpan = document.querySelector(".confirm-span")
    var item = document.querySelectorAll(".item")
    var iL = e.parentNode.getAttribute("data-Lindex")
    var iS = e.parentNode.getAttribute("data-Sindex")
    var OTL = document.querySelectorAll(".ordered-type-li")
    var typeName = document.querySelectorAll(".type-name")
    var orderedLi = document.querySelectorAll(".ordered-li")
    var orderedUl = document.querySelectorAll(".ordered-ul")
    var howmany = document.querySelectorAll(".how-many")
    var itemiH = document.querySelectorAll(".itemiH")
    var OUW = document.querySelectorAll(".ordered-ul-wrap")
    var price = document.querySelectorAll(".price")
    var finalPrice = document.querySelector(".final-price")
    var itemName = document.querySelectorAll(".item-name")
    var sameIFound = false
    OTL[iL].innerHTML = typeName[iL].innerHTML
    OUW[iL].classList.add("padForOUW")
    orderedUl[iL].classList.add("block")
    orderedUl[iL].classList.remove("none")
    for(let i = 0; i < orderedLi.length; i++){
        if(itemName[iS].innerHTML == itemiH[i].innerHTML){
            sameIFound = true
            howmany[i].innerHTML = `${parseInt(howmany[i].innerHTML.slice(0,this.length-1)) + 1}x`
        }
    }
    if(sameIFound == false){
    orderedUl[iL].innerHTML += `
        <li class="ordered-li padForOL same" data-price="${price[iS].innerHTML.slice(1)}" data-index="${iS}" data-Lindex="${iL}" data-image="${item[iS].getAttribute("data-image")}">
                <div class="cancel-order" onclick="cancelOrder(${iL},this,${iS})">
                    <i class="fa-solid fa-circle-xmark"></i>
                </div>
            <span class="how-many">1x</span>
            <span class="itemiH">${itemName[iS].innerHTML}</span>
        </li>
    `
    }
    orderPrice += parseFloat(item[iS].getAttribute("data-price"))
    finalPrice.innerHTML = `$${orderPrice}` 
    confirmSpan.innerHTML = "Confirm Order"
    changeBTn.classList.remove("none")


    var changeOrder = document.querySelectorAll(".change-order")
    if(changeOrderClicked == true){
        for(let i = 0; i < changeOrder.length; i++) {
            changeBTn.setAttribute("data-clicked", "false")
            changeOrder[i].remove()
        }
    }
    confirmSpan.classList.remove("pointerEvents")
}

function changeOrder(e){
    if(e.getAttribute("data-clicked") == "false"){
        let oL = document.querySelectorAll(".ordered-li")
        for(let i = 0; i < oL.length; i++){
            oL[i].innerHTML += `<div class="change-order">
                <button class="increase" onclick="increase(this)" data-index="${oL[i].getAttribute("data-index")}" data-Lindex="${oL[i].getAttribute("data-Lindex")}">+</button>
                <button class="decrease" onclick="decrease(this)" data-index="${oL[i].getAttribute("data-index")}" data-Lindex="${oL[i].getAttribute("data-Lindex")}">-</button>
            </div>
            `
        }
        e.setAttribute("data-clicked","true")
        changeOrderClicked = true
    } else {
        let changeOrder = document.querySelectorAll(".change-order")
        changeOrder.forEach(j => {
            j.remove()
        })
        e.setAttribute("data-clicked","false")
        changeOrderClicked = false
    }
    if(window.innerWidth < 1200){
        myStyleToP()
    }
}

function increase(me){
    var commonIndex = me.getAttribute("data-index")
    var hM = document.querySelectorAll(".how-many")
    var oL = document.querySelectorAll(".ordered-li")
    var finalPrice = document.querySelector(".final-price")
    for(let i = 0; i < oL.length; i++){
        if(commonIndex == oL[i].getAttribute("data-index")){
            hM[i].innerHTML = `${parseInt(hM[i].innerHTML.slice(0,this.length-1)) + 1}x`
            orderPrice += parseFloat(oL[i].getAttribute("data-price"))
            finalPrice.innerHTML = `${orderPrice}$`
        }
    }
}
function decrease(me){
    var commonIndex = me.getAttribute("data-index")
    var hM = document.querySelectorAll(".how-many")
    var oL = document.querySelectorAll(".ordered-li")
    var finalPrice = document.querySelector(".final-price")
    for(let i = 0; i < oL.length; i++){
        if(commonIndex == oL[i].getAttribute("data-index")){
            var Lindex = oL[i].getAttribute("data-Lindex")
            hM[i].innerHTML = `${parseInt(hM[i].innerHTML.slice(0,this.length-1)) - 1}x`
            orderPrice -= parseFloat(oL[i].getAttribute("data-price"))
            finalPrice.innerHTML = `${orderPrice}$`
            if(hM[i].innerHTML.slice(0,this.length-1) == 0){
                oL[i].remove()
            }
        }
    }
    var orderedUl = document.querySelectorAll(".ordered-ul")
    var OUW = document.querySelectorAll(".ordered-ul-wrap")
    if(orderedUl[Lindex].childElementCount == 1){
        OUW[Lindex].classList.remove("padForOUW")
        orderedUl[Lindex].classList.remove("block")
        orderedUl[Lindex].classList.add('none')
    }

    if(orderPrice == 0){
        ifPriceIs0()
    }
}

function cancelOrder(iL,e,iS){
    if(window.innerWidth < 1200){
        myStyleToP()
    }
    var finalPrice = document.querySelector(".final-price")
    var orderedLi = document.querySelectorAll(".ordered-li")
    var howmany = document.querySelectorAll(".how-many")
    var cancel = document.querySelectorAll(".cancel-order")
    var myIndex = 0
    for(let i = 0; i < cancel.length; i++) {
        if(iS == orderedLi[i].getAttribute("data-index")){
            myIndex = i
        }
    }
    orderPrice -= parseFloat(orderedLi[myIndex].getAttribute("data-price")) * parseInt(howmany[myIndex].innerHTML.slice(0,this.length-1))
    finalPrice.innerHTML = `$${orderPrice}`
    if(orderPrice == 0){
        ifPriceIs0()
    }
    var orderedUl = document.querySelectorAll(".ordered-ul")
    var OUW = document.querySelectorAll(".ordered-ul-wrap")
    e.parentNode.remove()
    if(orderedUl[iL].childElementCount == 1){
        OUW[iL].classList.remove("padForOUW")
        orderedUl[iL].classList.remove("block")
        orderedUl[iL].classList.add('none')
    }
}
function ifPriceIs0(){
    var changeBTn = document.querySelector(".change-order-btn")
    var confirmSpan = document.querySelector(".confirm-span")
    confirmSpan.innerHTML = "Nothing ordered yet"
    changeBTn.classList.add("none")
    changeBTn.setAttribute("data-clicked", "false")
    plusClicked = false
    if(window.innerWidth < 1200){
        myOM.classList.add("none")
        abs.classList.add("none")
    }
    changeOrderClicked = false
    confirmSpan.classList.add("pointerEvents")
}

var nashtia = false
let chooseUl = document.querySelector(".choose-ul")
var chooseClicks = 0
function left(){
    if(nashtia == true){
        chooseUl.style.transform = `translateX(-${(160 * chooseClicks)}px)`
        nashtia = false
    } else if(nashtia == false && chooseClicks > 0){
        chooseUl.style.transform = `translateX(-${160 * --chooseClicks}px)`
    }
}
function right(){
    if(chooseClicks < 5 - parseInt((window.innerWidth - 20) / 160)){
        nashtia = false
        if(chooseClicks == 4 - parseInt((window.innerWidth - 20) / 160) && (window.innerWidth - 20) % 160 != 0){
            chooseUl.style.transform = `translateX(-${(160 * chooseClicks) + (180 - (window.innerWidth - 20) % 160)}px)`
            nashtia = true
        } else{
            chooseUl.style.transform = `translateX(-${160 * ++chooseClicks}px)`
        }
    }
}

let par1 = document.querySelector(".par-1")
let par2 = document.querySelector(".par-2")
let about = document.querySelector(".about")
let wentDown = false
window.addEventListener("scroll", ()=>{
    let myTransform = about.getBoundingClientRect().top - 80
        par1.style.transform = `translate(${myTransform / 1.5}px, -25%)`
        par2.style.transform = `translate(${-myTransform / 1.5}px, -25%)`
    if(myTransform <= 0){
        par1.style.transform = `translate(0px, -25%)`
        par2.style.transform = `translate(0px, -25%)`
    }
})

let absBurgers = document.querySelectorAll(".abs-burger")
let aboutMain = document.querySelector(".about-main")
let aboutSpan = document.querySelector(".about-span")
let aboutImg = document.querySelector(".about-img")
window.addEventListener("scroll", function(){
    let myTransform = about.getBoundingClientRect().top - 150
    if(myTransform <= 0){
        aboutSpan.style.opacity = "1"
        aboutSpan.style.transform = "translate(0)"
        aboutImg.style.opacity = "1"
        absBurgers.forEach(item => {
            item.style.transform = `translateX(0) rotate(${item.getAttribute("data-rotate")}deg)`
        })
    } 
}) 

let brands = document.querySelectorAll(".fa-brands")
let iconDiv = document.querySelectorAll(".icon-div")
for(let i = 0; i < iconDiv.length; i++){
    iconDiv[i].style.transform = `rotate(${(i+1)*72}deg) translateY(-15px)`
    brands[i].style.transform = `rotate(${(i+1)*-72}deg)`
}

    var recieptsPrice = document.createElement("div")
    recieptsPrice.classList.add("reciepts-price","none")
    var recieptSpan = document.createElement("span")
    recieptSpan.classList.add("reciepts-span")
    recieptsPrice.append(recieptSpan)

    var confirmSpan = document.querySelector(".confirm-span")
    var reciept = document.createElement("div")
    reciept.classList.add("reciept-main")
    reciept.innerHTML += `
    <div class="reciept-cancel-cont" >
        <i class="fa-solid fa-circle-xmark reciept-cancel" onclick="recieptCancel(this)"></i>
    </div>`

    var recieptUl = document.createElement("ul")
    recieptUl.classList.add("reciept-ul")
    reciept.append(recieptUl)
    reciept.append(recieptsPrice)
    

    var scrolling = document.createElement("div")
    scrolling.classList.add("scrolling")
    scrolling.innerHTML = `
        <div class="r-arrow r-arrow-left" onclick="rLeft()">
            <i class="fa-solid fa-arrow-left-long"></i>
        </div>
        <div class="r-arrow r-arrow-left" onclick="rRight()">
            <i class="fa-solid fa-arrow-right-long"></i>
        </div>`

    confirmSpan.addEventListener("click", ()=>{
        document.body.append(reciept)
        var recieptCancelCont = document.querySelector(".reciept-cancel-cont")
        var recieptCancel = document.querySelector(".reciept-cancel")
        var recieptMain = document.querySelector(".reciept-main")
        var plus = document.querySelectorAll(".plus")
        recieptMain.classList.remove("onCancelReciept")
        recieptCancelCont.classList.remove("onReciepCancelCont")
        recieptCancel.classList.remove("onRecieptCancel")
        recieptUl.style.transform = "translateX(0)"
        recieptUl.classList.remove("none")
        recieptClicks = 0
        scrolling.classList.remove("none")
        recieptPosition()
        recieptsPrice.classList.remove("none")
        plus.forEach(e => {
            e.classList.toggle("pointerEvents")
        })
        
        var finalPrice = document.querySelector(".final-price")
        var changeOrderBtn = document.querySelector(".change-order-btn")
        var itemDesc = document.querySelectorAll(".item-desc")
        var itemiH = document.querySelectorAll(".itemiH")
        var cancelOrder =  document.querySelectorAll(".cancel-order")
        var howMany = document.querySelectorAll(".how-many")
        var orderedLi = document.querySelectorAll(".ordered-li")
        var orderedUl = document.querySelectorAll(".ordered-ul")
        var OUW = document.querySelectorAll(".ordered-ul-wrap")

        var recieptLi = document.querySelectorAll('.reciept-li')
        recieptLi.forEach(e => {
            e.remove()
        })
        orderedLi.forEach((e,i) =>{
            var myIndex = e.getAttribute("data-index")
            function returnDescription(){
                if(itemDesc[myIndex].innerHTML.length > 0){
                    return itemDesc[myIndex].innerHTML
                } else {
                    return ""
                }
            }
            cancelOrder[i].classList.add("none")
            recieptUl.innerHTML += 
            `<li class="reciept-li">
                <div class="reciept-div-main">
                    <div class="new-image" style="background-image: url(${e.getAttribute("data-image")})"></div>
                    
                    <div class="reciept-div-text">
                        <h1 class="reciept-amount">${howMany[i].innerHTML} ${itemiH[i].innerHTML} <p style="margin:10px 0; color:white; font-size:18px;">$${parseFloat(orderedLi[i].getAttribute("data-price")) * parseFloat(howMany[i].innerHTML.slice(0,this.length-1))}</p> </h1>
                        <span class="reciept-span">${returnDescription()}</span>
                    </div>  
                </div>
            </li>
            `
            e.remove()
        })

        orderedUl.forEach((e,i) => {
            e.classList.remove("block")
            e.classList.add("none")
            OUW[i].classList.remove("padForOUW")
        });

        recieptPosition()
        changeOrderBtn.classList.add("none")
        confirmSpan.innerHTML = "Nothing ordered yet"
        recieptSpan.innerHTML = `Final price: $${orderPrice}`
        orderPrice = 0
        finalPrice.innerHTML = "$0"

        if(window.innerWidth < 1050 && window.innerWidth > 740 && recieptUl.childElementCount > 2 
        || window.innerWidth <= 740 && recieptUl.childElementCount > 1
        || window.innerWidth >= 1050 && recieptUl.childElementCount > 3){
            reciept.append(scrolling)
        } else {
            scrolling.remove()
        }
        ifPriceIs0()
        var plus = document.querySelectorAll(".plus")
        plus.forEach(e => {
            e.classList.add("pointerEvents")
        })
        
    })
    window.addEventListener("resize", function(){
        recieptPosition()
        if(window.innerWidth < 1050 && window.innerWidth > 740 && recieptUl.childElementCount > 2 
        || window.innerWidth <= 740 && recieptUl.childElementCount > 1
        || window.innerWidth >= 1050 && recieptUl.childElementCount > 3){
            reciept.append(scrolling)
        } else {
            scrolling.remove()
        }
        recieptUl.style.transform = `translateX(0px)`
        recieptClicks = 0
    })
    
    var recieptClicks = 0
    function rRight(){
        var recieptLi = document.querySelectorAll(".reciept-li")
        if(window.innerWidth >= 1050
        && recieptUl.childElementCount - 3 > recieptClicks){
            recieptUl.style.transform = `translateX(-${recieptLi[0].clientWidth * ++recieptClicks}px)`
        } else if(window.innerWidth < 1050 && window.innerWidth > 740
        && recieptUl.childElementCount - 2 > recieptClicks){
            recieptUl.style.transform = `translateX(-${recieptLi[0].clientWidth * ++recieptClicks}px)`
        } else if (window.innerWidth <= 740
        && recieptUl.childElementCount - 1 > recieptClicks){
            recieptUl.style.transform = `translateX(-${recieptLi[0].clientWidth * ++recieptClicks}px)`
        }
    }

    function rLeft(){
        var recieptLi = document.querySelectorAll(".reciept-li")
        if(recieptClicks > 0){
            recieptUl.style.transform = `translateX(-${recieptLi[0].clientWidth * --recieptClicks}px)`
        }
    }

    function recieptCancel(){
        var recieptCancelCont = document.querySelector(".reciept-cancel-cont")
        var recieptCancel = document.querySelector(".reciept-cancel")
        var recieptMain = document.querySelector(".reciept-main")
        var plus = document.querySelectorAll(".plus")
        if(orderPrice == 0){
            confirmSpan.classList.add("pointerEvents")
        }
        recieptMain.classList.toggle("onCancelReciept")
        recieptCancelCont.classList.toggle("onReciepCancelCont")
        recieptCancel.classList.toggle("onRecieptCancel")
        recieptUl.style.transform = "translateX(0)"
        recieptUl.classList.toggle("none")
        recieptClicks = 0
        scrolling.classList.toggle("none")
        recieptPosition()
        recieptsPrice.classList.toggle("none")
        plus.forEach(e => {
            e.classList.toggle("pointerEvents")
        })
    }

    function recieptPosition(){
        reciept.style.bottom = `calc((50% - ${reciept.clientHeight / 2}px))`
        reciept.style.right = `calc(50% - ${reciept.clientWidth / 2}px)`
    }