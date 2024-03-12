<template>
    <section id="Service" class="section py-4">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title text-center">
                        <h3 class="mx-auto">My Services</h3>
                        <div class="line"></div>
                    </div>
                </div>
            </div>
            <div class="row py-5">
                <div class="col-md-4 col-lg-4 animation">
                    <div class="item text-center">
                        <span class="icon mx-auto">
                            <img src="../assets/icons/display.svg"/>
                        </span>
                        <h6 class="">web design</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever..
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 animation">
                    <div class="item text-center">
                        <span class="icon mx-auto">
                            <img src="../assets/icons/code.svg"/>
                        </span>
                        <h6 class="">Web development</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever..
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 animation">
                    <div class="item text-center">
                        <span class="icon mx-auto">
                            <img src="../assets/icons/diamond.svg"/>
                        </span>
                        <h6 class="">Logo design</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever..
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 animation">
                    <div class="item text-center">
                        <span class="icon mx-auto">
                            <img src="../assets/icons/chat.svg"/>
                        </span>
                        <h6 class="">Marketing</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever..
                        </p>
                    </div>
                </div>
                <div class="col-md-4 col-lg-4 animation">
                    <div class="item text-center">
                        <span class="icon mx-auto">
                            <img src="../assets/icons/color-palette.svg"/>
                        </span>
                        <h6 class="">Design</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever..
                        </p>
                    </div>
                </div>
                <div class="col-md-4 px-15px animation">
                    <div class="item text-center">
                        <span class="icon mx-auto">
                            <img src="../assets/icons/rocket.svg"/>
                        </span>
                        <h6 class="">Branding</h6>
                        <p>
                            Lorem Ipsum is simply dummy text of the Lorem Ipsum has been the industry's standard dummy text ever..
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const reveal_ser = () => {
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
window.addEventListener("scroll", reveal_ser);

</script>

<style scoped>
/* Fade in animation */
#Service .container .active {
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
#Service .container .animation {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-in-out;
}

#Service .container .active {
  opacity: 1;
  transform: translateY(0);
}

</style>
