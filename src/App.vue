<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition"
  >
    <!-- Navbar passes toggle function -->
    <Navbar @toggle-theme="toggleDarkMode" />

    <router-view />

    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Navbar from "@/Components/Navbar.vue";
import Footer from "@/Components/Footer.vue";

const isDark = ref(false);

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  document.documentElement.classList.toggle("dark", isDark.value);
};

onMounted(() => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});
</script>
