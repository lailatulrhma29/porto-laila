<template>
  <div class="bg-white text-black font-sans">
    <Navbar />
    <router-view />
    <!-- <Hero /> -->
    <!-- <Projects /> -->
    <Footer />
  </div>
</template>

<script setup>
// import Home from './components/Hero.vue';
import Projects from './components/Project.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>