<template>
    <section id="Testmonial" class="test">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title text-center">
                        <h3 class="mx-auto">Testimonials</h3>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="col-7 mx-auto animation">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-inner mb-2">
                            <div class="carousel-item active">
                                <div class="item">
                                    <div class="author-img rounded-circle">
                                        <img src="../assets/icons/double-quote.svg" alt="" class="w-50" >
                                    </div>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the when
                                        an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </p>
                                    <h6>Jon Doe, Web Developer</h6>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="item">
                                    <div class="author-img rounded-circle">
                                        <img src="../assets/icons/double-quote.svg" alt="" class="w-50 m-2">
                                    </div>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the when
                                        an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </p>
                                    <h6>Alex Smith, Designer</h6>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="item">
                                    <div class="author-img rounded-circle ">
                                        <img src="../assets/icons/double-quote.svg" alt="" class="w-50 m-2">
                                    </div>
                                    <p>
                                        Lorem Ipsum has been the industry's standard dummy text ever since the when
                                        an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book.
                                    </p>
                                    <h6>Alex Smith, Photoghrap</h6>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-indicators position-static">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
const reveal_test = () => {
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
window.addEventListener("scroll", reveal_test);

</script>

<style scoped>
/* Fade in animation */
#Testmonial .active {
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
#Testmonial .animation {
  opacity: 0;
  transform: translateY(50px);
  transition: all 1.5s ease-in-out;
}

#Testmonial .active {
  opacity: 1;
  transform: translateY(0);
}

</style>
