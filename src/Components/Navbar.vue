<template>
  <nav
    class="fixed w-full top-0 z-50 backdrop-blur-md bg-white/60 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 shadow-sm"
  >
    <div class="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap justify-between items-center">
      <!-- Logo -->
      <h1 class="text-xl font-grotesk font-semibold tracking-wider text-black dark:text-white">
        Lailatlrhma
      </h1>

      <!-- Navigation Links -->
      <ul class="flex flex-wrap gap-6 text-sm font-medium items-center">
        <li>
          <router-link to="/" class="hover:underline text-black dark:text-white">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="hover:underline text-black dark:text-white">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:underline text-black dark:text-white">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:underline text-black dark:text-white">
            Contact
          </router-link>
        </li>
      </ul>

      <!-- Theme Toggle Switch -->
      <label class="flex items-center gap-2 cursor-pointer ml-4">
        <div class="relative">
          <input
            type="checkbox"
            class="sr-only peer"
            :checked="isDark"
            @change="$emit('toggle-theme')"
          />
          <div
            class="w-11 h-6 bg-gray-300 dark:bg-gray-600 peer-checked:bg-indigo-500 rounded-full transition-all"
          ></div>
          <div
            class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-5 transition-all"
          ></div>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300 hidden sm:inline">
          {{ isDark ? 'Dark' : 'Light' }}
        </span>
      </label>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  isDark: Boolean,
});
</script>