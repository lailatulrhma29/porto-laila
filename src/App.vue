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
import Footer from '@/Components/Footer.vue';
import Navbar from '@/Components/Navbar.vue';
</script>