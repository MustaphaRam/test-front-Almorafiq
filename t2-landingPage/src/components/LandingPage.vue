<script setup>
import NavBar from './NavBar.vue'
import Header from './HeaderContent.vue'
import About from './AboutContant.vue'
import Services from './ServicesContant.vue'
import Workes from './WorkesContant.vue'
import Testmonail from './TestmonialContant.vue'
import Blog from './BlogContant.vue'
import Contact from './ContactContent.vue'
import Footer from './FooterContent.vue'

</script>

<template>
    <div>
        <NavBar />
        <Header />
        <About />           
        <Services />
        <Workes />
        <Testmonail />
        <Blog />

        <!--  -->
        <section class="section"  style="background-color: whitesmoke;">
            <div class="text-center py-5">
                <div class="title">
                    <h3 class="">I AM AVAILABLE FOR FREELANCER </h3>
                    <div class="line"></div>
                </div>
                <button class="btn">Hire Me</button>
            </div>
        </section>
        
        <Contact />

        <!-- scroll up -->
        <div class="scroll-up">
            <a href="#Home" id="scroll-up"><img src="../assets/icons/up-arrow.svg"/></a>
        </div>
        <!-- Footer -->
        <Footer />
    </div>
</template>

<style scoped>

</style>