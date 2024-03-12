<template>
    <section class="section" id="Blog">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="title text-center">
                        <h3 class="mx-auto">Blog</h3>
                        <div class="line"></div>
                    </div>
                </div>
                <div class="col-12 mx-auto">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="card" style="width: 18rem;">
                                <img src="../imgs/blog2.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum uehfu.</p>
                                </div>
                            </div>
                            <div class="card" style="width: 18rem;">
                                <img src="../imgs/blog3.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum uehfu.</p>
                                </div>
                            </div>
                            <div class="card" style="width: 18rem;">
                                <img src="../imgs/blog1.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div class="text-center mt-5">
                            <button class="btn">VIEW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
const  reveal_blog = () => {
    var reveals = document.querySelectorAll(".card");

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
window.addEventListener("scroll", reveal_blog);

</script>

<style scoped>
#Blog .container .active {
  animation: fade-in 1.5s ease-in-out;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Scroll animation trigger */
#Blog .container .animation {
  opacity: 0;
  transform: translateY(100%);
}

#Blog .container .active {
  opacity: 1;
  transform: translateY(0);
}
</style>