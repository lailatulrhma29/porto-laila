<template>
  <div
    class="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition relative overflow-hidden"
  >
    <div id="cursor" class="gradient-cursor"></div>

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

  const cursor = document.getElementById("cursor");
  if (cursor) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }
});
</script>

<style scoped>
.gradient-cursor {
  position: fixed;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  background: linear-gradient(135deg, #6366f1, #ec4899);
  mix-blend-mode: normal;
  box-shadow: 0 0 10px rgba(236, 72, 153, 0.3);
  transform: translate(-50%, -50%);
  transition: transform 0.08s ease;
}
</style>
