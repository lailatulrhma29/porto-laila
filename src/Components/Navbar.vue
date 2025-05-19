<template>
  <nav class="sticky top-0 z-50 bg-white">
    <div class="max-w-5xl mx-auto  flex justify-between items-center">
      <h1 class="text-xl  font-grotesk ">L A I L A</h1>
      <ul class="flex gap-6 text-sm font-medium">
        <li><router-link to="/" class="hover:underline  font-grotesk">Home</router-link></li>
        <li>
          <router-link to="/projects" class="hover:underline  font-grotesk"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="hover:underline  font-grotesk">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:underline  font-grotesk"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
