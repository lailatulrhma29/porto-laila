<template>
  <nav class="sticky top-0 z-50 bg-white">
    <div class="max-w-5xl mx-auto  flex justify-between items-center">
      <h1 class="text-xl font-semibold">Laila</h1>
      <ul class="flex gap-6 text-sm font-medium">
        <li><router-link to="/" class="hover:underline">Home</router-link></li>
        <li>
          <router-link to="/projects" class="hover:underline"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link to="/about" class="hover:underline">About</router-link>
        </li>
        <li>
          <router-link to="/contact" class="hover:underline"
            >Contact</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
