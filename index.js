`use strict`;
window.addEventListener("load", function() {
    let salom = this.document.getElementById("salom"),
      salom1 =this . document.getElementById("salom1"),
      body = this. document.querySelector("body");
    salom1.addEventListener("click", function() {
    // body.style.color=" white"    
      body.style.backgroundColor = "black";
    });
    salom.addEventListener("click",function(){
        body.style.color="black"
        body.style.backgroundColor="white"
        
    
    })
  let startBtn = this.document.querySelector("nav button");
  let registerCard = this.document.querySelector(".register_card");
  let registerBtn = this.document.getElementById("registerBtn");
  let text = this.document.getElementById("text");
  let email = this.document.getElementById("email");
  let pass = this.document.getElementById("pass");
  let registerbtn = this.document.getElementById("registerbtn");
  // ---------

  startBtn.addEventListener("click", function() {
    registerCard.style.top = "50%";
  });
  // ----
  registerBtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (text.value === "" && email.value === "" && pass.value === "") {
      alert("Platformani tuldiring");
    } 
    else if (text.value===""){
alert("Isimni kiriting")
    }
    else if (email.value===""){
alert("emailni kiriting")
    }
    else if (pass.value===""){
alert("parolni kiriting")
    }
    else {
      alert("tabriklaymiz.royhatdan otdiz");
      setTimeout(() => {
        registerCard.style.top = "-400px";
      }, 3000);
    }
  });
  let startbtn = this.document.querySelector("main button");
  let ser = this.document.querySelector(".ser");
  let serbtn = this.document.getElementById("serbtn");
  let text1 = this.document.getElementById("text1");
  let text2 = this.document.getElementById("text2");
  let text3 = this.document.getElementById("text3");
  // let  registerbtn=this.document.getElementById("registerbtn");
  // ---------

  startbtn.addEventListener("click", function() {
    ser.style.top = "50%";
  });
  // ----
  serbtn.addEventListener("click", function(event) {
    event.preventDefault();
    if (text.value === "") {
      alert("Platformani tuldiring");
    } else {
      alert("tabriklaymiz siz dam olish makaniga xush kelibsiz");
    }
    setTimeout(() => {
      ser.style.top = "-400px";
    }, 3000);
  });
  let contact = this.document.getElementById("contact");
  let p1 = this.document.getElementById("p1");
  let p2 = this.document.getElementById("p2");
  let p = this.document.getElementById("p");
  let b = "name:KIRANA DUNHAM";
  let sp = "call: +995 175-800-20-26";
  contact.addEventListener("click", function() {
    if (b === "name:KIRANA DUNHAM" && sp === "call: +995 175-800-20-26") {
      p.textContent = sp;
      p1.textContent = b;
      p2.style.display = "block";
    }
  });
  p2.addEventListener("click", function() {
    p.textContent = "";
    p1.textContent = "";
    p2.style.display = "none";
  });
});
let matn = document.getElementById("matn");
let yana = document.getElementById("yana");
matn.style.display = "none";
yana.addEventListener("click", function() {
  if (yana.textContent === "Learn More") {
    matn.style.display = "block";
    yana.textContent = "Show less";
  } else {
    matn.style.display = "none";
    yana.textContent = "Learn More";
  }
});
let matn1 = document.getElementById("matn1");
let yana1 = document.getElementById("yana1");
matn1.style.display = "none";
yana1.addEventListener("click", function() {
  if (yana1.textContent === "Explore more") {
    matn1.style.display = "block";
    yana1.textContent = "Show less";
  } else {
    matn1.style.display = "none";
    yana1.textContent = "Explore more";
  }
});
let lor1 = document.getElementById("lor1");
let kinopka1 = document.getElementById("kinopka1");
lor1.style.display = "none";
kinopka1.addEventListener("click", function() {
  if (kinopka1.textContent === "Learn more .....") {
    lor1.style.display = "block";
    kinopka1.textContent = "Show less";
  } else {
    lor1.style.display = "none";
    kinopka1.textContent = "Learn more .....";
  }
});
let lor2 = document.getElementById("lor2");
let kinopka2 = document.getElementById("kinopka2");
lor2.style.display = "none";
kinopka2.addEventListener("click", function() {
  if (kinopka2.textContent === "Learn more .....") {
    lor2.style.display = "block";
    kinopka2.textContent = "Show less";
  } else {
    lor2.style.display = "none";
    kinopka2.textContent = "Learn more .....";
  }
});
let lor3 = document.getElementById("lor3");
let kinopka3 = document.getElementById("kinopka3");
lor3.style.display = "none";
kinopka3.addEventListener("click", function() {
  if (kinopka3.textContent === "Learn more .....") {
    lor3.style.display = "block";
    kinopka3.textContent = "Show less";
  } else {
    lor3.style.display = "none";
    kinopka3.textContent = "Learn more .....";
  }
});
