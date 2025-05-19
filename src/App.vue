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
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
</script>