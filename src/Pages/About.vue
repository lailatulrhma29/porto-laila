<template>
  <section class="px-6 py-16 max-w-4xl mx-auto bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <h1 class="text-3xl font-bold mb-6">About Me</h1>

    <img
      :src="profilePic"
      alt="Lailatul Rohma"
      class="w-45 h-45 mx-auto mb-6 object-cover rounded-full"
    />

    <p class="text-lg mb-4">
      Hi! I’m <strong>Lailatul Rohma</strong> — a Fullstack Developer (mostly
      frontend) currently exploring the world of UI/UX design. I started from
      Physics Engineering and have built dashboards, admin panels, and
      interactive web apps.
    </p>

    <p class="text-lg mb-6">
      🧭 Always learning, always building — and open to new opportunities that
      combine design and development.
    </p>

    <!-- Vision & Mission -->
    <h2 class="text-2xl font-semibold mb-2">Vision & Mission</h2>
    <p class="mb-2">
      <strong>Vision:</strong> To journey through tech and design with curiosity
      — creating digital products that connect with people, solve problems, and
      spark joy.
    </p>
    <p class="mb-6">
      <strong>Mission:</strong> Explore ideas, design with purpose, build with
      care, and grow through every project.
    </p>

    <!-- Skills -->
    <h2 class="text-2xl font-semibold mt-10 mb-2">Skills & Tools</h2>
    <div class="flex flex-wrap gap-2 mb-8">
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">React.js</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">Laravel</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">UI/UX</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">Figma</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">REST API</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">JSON-RPC 2.0</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">Git & GitHub</span>
      <span class="bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full text-sm">Odoo</span>
    </div>

    <!-- Education -->
    <h2 class="text-2xl font-semibold mb-2">Education</h2>
    <p class="mb-2"><strong>Telkom University</strong>, Bandung (2020–2024)</p>
    <p class="text-sm mb-4">
      Bachelor of Physics Engineering — GPA: 3.70 / 4.00
    </p>
    <ul class="list-disc ml-6 text-sm space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed">
      <li>Member — Google Developer Student Clubs (Dec 2023 – June 2024)</li>
      <li>Secretary — FKMTF Indonesia (Jun 2022 – Jun 2023)</li>
      <li>Physics Laboratory Assistant — Lab Fisika Dasar (Aug 2021 – May 2023)</li>
      <li>Commission 2 Member — MPM HMTF Unitel (Apr 2022 – Feb 2023)</li>
      <li>PIC of LO Physics Engineering — PKKMB Telkom University (Aug – Sep 2022)</li>
      <li>Event Creative Division — Technogyne 2023, Physton, Physics Lab Recruitment</li>
    </ul>

    <!-- Experience -->
    <h2 class="text-2xl font-semibold mt-10 mb-2">Experience</h2>
    <ul class="space-y-2 text-sm">
      <li><strong>Odoo Developer</strong> — PT Ditama Teknologi Indonesia (2025–present)</li>
      <li><strong>Programmer Analyst</strong> — PT Gema Cendikia Gemilang (2024–2025)</li>
      <li><strong>Frontend Developer</strong> — INSIGHT Laboratory (2023–2024)</li>
      <li><strong>Desktop Developer Intern</strong> — PT Kereta Api Indonesia (2023–2024)</li>
      <li><strong>Maintenance Engineer Intern</strong> — PT Smelting (2023)</li>
    </ul>

    <!-- Testimonial -->
    <h2 class="text-2xl font-semibold mt-10 mb-4">Testimonial</h2>

    <div class="mb-6">
      <blockquote class="border-l-4 border-yellow-300 pl-4 italic text-gray-700 dark:text-gray-300">
        "Lailatul menunjukkan dedikasi luar biasa sebagai programmer. Ia cepat belajar, mampu memahami kebutuhan bisnis, dan selalu menyelesaikan tugas dengan tanggung jawab serta ketepatan waktu. Etos kerja dan kemampuan teknisnya sangat bisa diandalkan."
      </blockquote>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">— Ismi (Project Manager PT. Gema Cendikia Gemilang)</p>
    </div>

    <div class="mb-6">
      <blockquote class="border-l-4 border-yellow-300 pl-4 italic text-gray-700 dark:text-gray-300">
        "Laila is a hard worker—highly responsible, resilient, a great listener, and without a doubt, someone intelligent and reliable to work with. Her strategic thinking and contributions to various projects are proof of her dependability and trustworthiness. She’s a joy to work with and be around, always staying up-to-date with the latest trends and technologies, making her a strong candidate for growth in a UI/UX design career. Laila is both a great colleague and a friend, always open to collaboration and innovation."
      </blockquote>
      <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">— Herda (UI/UX Designer PT. Gema Cendikia Gemilang)</p>
    </div>
  </section>
</template>

<script setup>
import profilePic from "@/assets/profile/fotolaila.png";
</script>