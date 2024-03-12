<template>
    <section id="About" class="section">
        <div class="container align-self-center">
            <div class="row justify-content-center">
                <div class="col-md-5 col-sm-6 m-auto">
                    <div class="image">
                        <img src="../imgs/header.jpg" alt="" class="">
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 align-self-center mx-auto my-4">
                    <div class="content">
                        <div class="title">
                            <h3 class="">About Me</h3>
                            <div class="line"></div>
                        </div>
                        <div class="row skills">
                            <div class="col-12 col-sm-6 mt-3 animation">
                                <div class="row">
                                    <div class="col-3 text-center">
                                        <img src="../assets/icons/photograph.svg" title="icon" />
                                    </div>
                                    <div class="col-9 position-relative overflow-hidden">
                                        <h6 class="title-skille position-relative">Painting</h6>
                                        <span class="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores temporibus.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 mt-3 animation">
                                <div class="row">
                                    <div class="col-3 text-center">
                                        <img src="../assets/icons/music.svg" title="icon">
                                    </div>
                                    <div class="col-9 position-relative overflow-hidden">
                                        <h6 class="title-skille position-relative">Painting</h6>
                                        <span class="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores temporibus.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 mt-3 animation">
                                <div class="row">
                                    <div class="col-3 text-center">
                                        <img src="../assets/icons/painting.svg" title="icon" />
                                    </div>
                                    <div class="col-9 position-relative overflow-hidden">
                                        <h6 class="title-skille position-relative">Painting</h6>
                                        <span class="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores temporibus.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-sm-6 mt-3 animation">
                                <div class="row">
                                    <div class="col-3 text-center">
                                        <img src="../assets/icons/magic.svg" title="icon" />
                                    </div>
                                    <div class="col-9 position-relative overflow-hidden">
                                        <h6 class="title-skille position-relative">Painting</h6>
                                        <span class="">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae asperiores temporibus.
                                        </span>
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
const reveal_about = () => {
    var reveals = document.querySelectorAll(".animation");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 50;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        //reveals[i].classList.remove("w-animation");
        }
    }
}
window.addEventListener("scroll", reveal_about);

</script>

<style scoped>
/* Fade in animation */
#About .skills .active {
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
#About .skills  .animation {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.5s ease-in-out;
}

#About .skills .active {
  opacity: 1;
  transform: translateY(0);
}

</style>