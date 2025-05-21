<template>
  <section
    class="min-h-screen px-6 py-20 pt-15 bg-gradient-to-br from-[#fef6f0] via-[#e8f7f4] to-[#fffced] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white transition-colors"
  >
    <div class="max-w-5xl mx-auto space-y-16">
      <!-- Intro -->
      <div class="text-center">
        <h1
          class="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 dark:from-indigo-400 dark:to-purple-300"
        >
          Open for Projects & Collaboration
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I’m currently open for freelance work, collaboration, or part-time
          roles — especially in projects that combine thoughtful design and
          clean development.
        </p>
      </div>

      <!-- Services -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">What I Can Help You With</h2>
        <ul
          class="grid sm:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300 text-sm pl-4 list-disc"
        >
          <li>Web Development (Vue, React, Laravel)</li>
          <li>UI/UX Design (Figma, Prototypes, User Flows)</li>
          <li>Interactive Dashboards & Admin Panels</li>
          <li>Responsive Interfaces (Mobile-first)</li>
          <li>API Integration (REST, Firebase, JSON-RPC)</li>
        </ul>
      </div>

      <!-- Sample Project Types -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Project Types I Can Build</h2>
        <div class="grid sm:grid-cols-2 gap-6 text-sm">
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition"
          >
            <h3 class="font-semibold text-base mb-2">🖥️ Portfolio Website</h3>
            <p>
              Responsive sites to showcase skills, works, and contact info —
              great for freelancers or creatives.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition"
          >
            <h3 class="font-semibold text-base mb-2">
              🛍️ Product Landing Page
            </h3>
            <p>
              High-converting landing pages with stunning UI and engaging copy
              for launches and sales.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition"
          >
            <h3 class="font-semibold text-base mb-2">
              📊 Dashboard & Admin Panel
            </h3>
            <p>
              Interactive UIs with charts, filters, and metrics — scalable for
              real product use.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition"
          >
            <h3 class="font-semibold text-base mb-2">
              📱 Mobile UI/UX Concepts
            </h3>
            <p>
              Clean, Figma-based mobile app designs — focused on usability and
              consistency.
            </p>
          </div>
          <div
            class="bg-white dark:bg-gray-800 rounded-lg p-5 shadow hover:shadow-md transition"
          >
            <h3 class="font-semibold text-base mb-2">
              🏗️ Company Profile Website
            </h3>
            <p>
              Static or dynamic company profile sites with service descriptions,
              product catalogs, and contact features — ideal for businesses.
            </p>
          </div>
        </div>
      </div>

      <!-- Why Me -->
      <div>
        <h2 class="text-2xl font-semibold mb-4">Why Work With Me?</h2>
        <ul
          class="grid sm:grid-cols-2 gap-3 text-sm pl-4 list-disc text-gray-700 dark:text-gray-300"
        >
          <li>Balance of design sensitivity and engineering precision</li>
          <li>Experienced in solo and cross-functional teams</li>
          <li>Clean, maintainable, and scalable code</li>
          <li>Good communication & clear documentation</li>
        </ul>
      </div>

      <!-- Portfolio CTA -->
      <div class="text-center">
        <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
          Curious about my past work? See some selected projects:
        </p>
        <router-link
          to="/projects"
          class="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full font-medium shadow transition"
        >
          View Portfolio
        </router-link>
      </div>

      <!-- Final CTA -->
      <div class="text-center space-y-3">
        <p class="text-lg font-medium">Ready to bring your idea to life?</p>
        <router-link
          to="/contact"
          class="inline-block bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-full font-medium shadow transition"
        >
          Let’s Talk
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
// No logic needed
</script>
