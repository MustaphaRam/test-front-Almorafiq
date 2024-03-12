<template>
    <section id="Works" class="section">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title text-center">
                        <h3 class="mx-auto">Works</h3>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="container">
                    <div class="works">
                        <div class="filters">
                            <a href="#" data-filter="w-all" class="active">
                                All
                            </a>
                            <a href="#" data-filter="w-slideshow">
                                Slideshow
                            </a>
                            <a href="#" data-filter="w-video">
                                Video
                            </a>
                            <a href="#" data-filter="w-image">
                                Image
                            </a>
                        </div>
                        <div class="portfolio-container container position-relative animated" style="width: 840px;">
                                <div class="col-md-6 item-w col-lg-4 w-image new position-absolute top-0 start-0">
                                    <div class="portfolio-item">
                                        <img src="../imgs/book.jpg" class="img-fluid" alt="">
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">WEB</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>   
                                    </div>             
                                </div>
                                <div class="col-md-6 col-lg-4 item-w w-image position-absolute top-0 start-50 translate-middle-x">
                                    <div class="portfolio-item">
                                        <img src="../imgs/design.jpg" class="img-fluid" alt="">
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">WEB</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div> 
                                    </div>                         
                                </div>
                                <div class="col-md-6 col-lg-4 item-w w-video  position-absolute top-0 end-0">
                                    <div class="portfolio-item">
                                        <img src="../imgs/cup.jpg" class="img-fluid" alt="">                         
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">ADVERSTISING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>    
                                    </div>              
                                </div> 
                                <div class="col-md-6 col-lg-4 item-w w-slideshow position-absolute" style="left: 0; top:260px">
                                    <div class="portfolio-item">
                                        <img src="../imgs/cup1.jpg" class="img-fluid" alt="">
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">WEB</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                    </div>                                                     
                                </div>
                                <div class="col-md-6 col-lg-4 item-w w-image position-absolute" style="left: 279px; top:260px"> 
                                    <div class="portfolio-item">
                                        <img src="../imgs/carte.png" class="img-fluid" alt="">                               
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">ADVERSITING</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                    </div>                                                       
                                </div> 
                               <div class="col-md-6 col-lg-4 item-w w-video position-absolute" style="left: 562px; top:205px">
                                    <div class="portfolio-item">
                                        <img src="../imgs/rose.jpg" class="img-fluid" alt="">  
                                    <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">VIDEO</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                    </div>                                                     
                                </div>
                                <div class="col-md-6 col-lg-4 item-w w-image position-absolute" style="left: 562px; top:464px">
                                    <div class="portfolio-item">
                                        <img src="../imgs/cup.jpg" class="img-fluid" alt="">       
                                    <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">IMAGE</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                    </div>                                                       
                                </div> 
                                <div class="col-md-6 col-lg-4 item-w w-image position-absolute" style="left: 280px; top:464px"> 
                                    <div class="portfolio-item">
                                        <img src="../imgs/Elegant.jpg" class="img-fluid" alt="">            
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">IMAGE</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div>
                                    </div>
                                            
                                </div> 
                                <div class="col-md-6 col-lg-4 item-w w-slideshow position-absolute" style="left: 0px; top: 520px;">
                                    <div class="portfolio-item">
                                        <img src="../imgs/carte.png" class="img-fluid" alt="">                        
                                        <div class="content-holder">
                                            <div class="text-holder">
                                                <h6 class="title-work">SLIDESHOW</h6>
                                                <p class="subtitle">Expedita corporis doloremque velit in totam!</p>
                                            </div>
                                        </div> 
                                    </div>
                                </div>             
                        </div> 
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>

<script>
const reveal = () => {
  const reveals = document.querySelectorAll(".item-w");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("w-animation");
    } else {
      //reveals[i].classList.remove("w-animation");
    }
  }
};

window.addEventListener("scroll", reveal);

</script>

<style scoped>
/* Fade in animation */
.works .portfolio-container .w-animation {
  animation: fade-in 1.5s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* Scroll animation trigger */
.works .portfolio-container .item-w {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
}

.works .portfolio-container .w-animation {
  opacity: 1;
  transform: translateY(0);
}

</style>
