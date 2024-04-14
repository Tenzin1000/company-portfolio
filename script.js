
window.addEventListener('scroll',()=>{
    // console.log('hi')
    
    // let homepara=document.querySelector('.des-row');
    // let homebg=document.querySelector('.home-container');
    // let homeheight=homepara.clientHeight
    // let homeY=homepara.getBoundingClientRect().top;
    // let homeB=homepara.getBoundingClientRect().bottom;
    
    // let screen =window.innerHeight;
    // const totaloffset= homeheight + homeY
    // console.log(homeheight);
    // console.log("top" + homeY);
    // console.log("bottom" + homeB)
    // console.log(totaloffset);
    // console.log(Math.ceil(homeB))
    // if(homeY<screen){
    //     console.log('hello')
    // }
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;
          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
})