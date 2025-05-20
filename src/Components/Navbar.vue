<template>
  <nav class="sticky top-0 z-50 bg-white dark:bg-gray-900 px-4 py-2">
    <div class="max-w-5xl mx-auto flex justify-between items-center">
      <h1 class="text-xl font-grotesk text-black dark:text-white">L A I L A</h1>

    

      <!-- Navigation Links -->
      <ul class="flex gap-6 text-sm font-medium">
        <li>
          <router-link to="/" class="hover:underline font-grotesk text-black dark:text-white">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="hover:underline font-grotesk text-black dark:text-white">
            Projects
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="hover:underline font-grotesk text-black dark:text-white">
            About
          </router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:underline font-grotesk text-black dark:text-white">
            Contact
          </router-link>
        </li>
      </ul>
        <!-- Toggle Switch -->
      <label class="flex items-center cursor-pointer">
        <div class="relative">
          <input
            type="checkbox"
            class="sr-only peer"
            :checked="isDark"
            @change="$emit('toggle-theme')"
          />
          <div
            class="w-11 h-6 bg-gray-300 peer-checked:bg-indigo-500 rounded-full transition"
          ></div>
          <div
            class="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform peer-checked:translate-x-full transition"
          ></div>
        </div>
        <span class="ml-2 text-sm text-gray-700 dark:text-gray-300 hidden sm:inline">
          {{ isDark ? "Dark" : "Light" }}
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