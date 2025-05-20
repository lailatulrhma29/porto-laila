<template>
  <section
    class="min-h-screen py-20 px-6 text-gray-800 dark:text-white bg-gradient-to-br from-[#fde7da] via-[#dbeee7] to-[#fef6dc] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
      <!-- Contact Info -->
      <div>
        <h1
          class="text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400 drop-shadow-sm"
        >
          Let's Connect
        </h1>
        <p
          class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
        >
          Whether you're curious about my work, looking to collaborate, or just
          want to say hi — I’d love to hear from you! ✨
        </p>

        <ul class="space-y-6 text-base">

          <li class="flex items-start gap-4">
            <span class="text-2xl">✉️</span>
            <div>
              <p class="font-semibold">Email</p>
              <a
                href="mailto:lailatulrhma@gmail.com"
                class="text-blue-600 dark:text-blue-400 hover:underline"
                >lailatulrhma@gmail.com</a
              >
            </div>
          </li>

          <li class="flex items-start gap-4">
            <span class="text-2xl">🔗</span>
            <div>
              <p class="font-semibold">LinkedIn</p>
              <a
                href="https://linkedin.com/in/lailatulrhma"
                target="_blank"
                class="text-blue-600 dark:text-blue-400 hover:underline"
              >
                linkedin.com/in/lailatulrhma
              </a>
            </div>
          </li>

          <li class="flex items-start gap-4">
            <span class="text-2xl">📍</span>
            <div>
              <p class="font-semibold">Address</p>
              <p class="text-gray-700 dark:text-gray-300">
                Srengseng, West Jakarta
              </p>
            </div>
          </li>
        </ul>
      </div>

      <!-- Photo & Social -->
      <div class="flex flex-col items-center text-center">
        <!-- Optional image if needed -->
        <!-- <img
          src="@/assets/fotolaila.png"
          alt="Lailatul Rohma"
          class="w-52 h-52 object-cover rounded-full shadow-lg mb-6 ring-4 ring-blue-200"
        /> -->

        <p class="font-semibold text-xl">Lailatul Rohma</p>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
          Frontend-Focused Fullstack Developer
        </p>

        <div class="flex gap-4 justify-center mt-2">
          <a
            href="mailto:lailatulrhma@gmail.com"
            class="bg-blue-100 dark:bg-blue-700/20 text-blue-600 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-700/30 transition"
          >
            Say Hello
          </a>
          <a
            href="https://linkedin.com/in/lailatulrhma"
            target="_blank"
            class="bg-gray-100 dark:bg-gray-700/30 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600/50 transition"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script required
</script>
