<template>
  <footer
    class="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-center py-6 px-4 text-sm text-gray-500 dark:text-gray-400"
  >
    <p>
      © {{ currentYear }} Lailatul Rohma — 
      <router-link
        to="/contact"
        class="underline hover:text-indigo-600 dark:hover:text-indigo-400 transition"
      >
        Let's connect
      </router-link>
    </p>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>