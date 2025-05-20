<template>
  <section
    class="min-h-screen px-6 py-20 flex justify-center bg-gradient-to-br from-[#fde7da] via-[#dbeee7] to-[#fef6dc] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white transition-colors relative overflow-hidden"
  >
    <!-- Decorative Gradient Overlay -->
    <div
      class="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-400 via-pink-400 to-yellow-300"
    ></div>
    <div
      class="absolute right-0 bottom-0 w-32 h-32 bg-pink-100 dark:bg-indigo-900 rounded-full blur-3xl opacity-40 -z-10"
    ></div>
    <div
      class="absolute left-0 top-1/4 w-24 h-24 bg-yellow-200 dark:bg-indigo-700 rounded-full blur-2xl opacity-40 -z-10"
    ></div>

    <div class="max-w-4xl w-full">
      <h1
        class="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-indigo-500 to-pink-500 text-transparent bg-clip-text"
      >
        About Me
      </h1>

      <!-- Profile -->
      <div class="flex justify-center mb-8">
        <img
          :src="profilePic"
          alt="Lailatul Rohma"
          class="w-45 h-45 object-cover dark:ring-yellow-400"
        />
      </div>

      <p class="text-lg mb-4 leading-relaxed text-justify">
        Hi! I’m <strong>Lailatul Rohma</strong> — a Fullstack Developer (mostly
        frontend) currently exploring the world of UI/UX design. I started from
        Physics Engineering and have built dashboards, admin panels, and
        interactive web apps.
      </p>
      <p class="text-lg mb-10 leading-relaxed text-justify">
        🧭 Always learning, always building — and open to new opportunities that
        combine design and development.
      </p>

      <!-- Vision & Mission -->
      <div
        class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-10 border-l-4 border-indigo-400"
      >
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Vision & Mission
        </h2>
        <p class="mb-2">
          <strong>Vision:</strong> To journey through tech and design with
          curiosity — creating digital products that connect with people, solve
          problems, and spark joy.
        </p>
        <p>
          <strong>Mission:</strong> Explore ideas, design with purpose, build
          with care, and grow through every project.
        </p>
      </div>

      <!-- Skills -->
      <h2
        class="text-2xl font-semibold mt-10 mb-4 text-indigo-600 dark:text-indigo-300"
      >
        Skills & Tools
      </h2>
      <div class="flex flex-wrap gap-3 mb-12">
        <span
          v-for="(skill, index) in skills"
          :key="index"
          class="bg-gradient-to-r from-yellow-100 to-pink-100 dark:from-gray-700 dark:to-gray-800 px-3 py-1 rounded-full text-sm shadow-md text-gray-900 dark:text-white"
        >
          {{ skill }}
        </span>
      </div>

      <!-- Education -->
      <div class="mb-10">
        <h2
          class="text-2xl font-semibold mb-2 text-indigo-600 dark:text-indigo-300"
        >
          Education
        </h2>
        <p class="mb-1">
          <strong>Telkom University</strong>, Bandung (2020–2024)
        </p>
        <p class="text-sm text-gray-700 dark:text-gray-300 mb-4">
          Bachelor of Physics Engineering — GPA: 3.70 / 4.00
        </p>
        <ul
          class="list-disc ml-6 text-sm text-gray-800 dark:text-gray-300 space-y-1"
        >
          <li>
            Member — Google Developer Student Clubs (Dec 2023 – June 2024)
          </li>
          <li>Secretary — FKMTF Indonesia (Jun 2022 – Jun 2023)</li>
          <li>
            Physics Laboratory Assistant — Lab Fisika Dasar (Aug 2021 – May
            2023)
          </li>
          <li>Commission 2 Member — MPM HMTF Unitel (Apr 2022 – Feb 2023)</li>
          <li>
            PIC of LO Physics Engineering — PKKMB Telkom University (Aug – Sep
            2022)
          </li>
          <li>
            Event Creative Division — Technogyne 2023, Physton, Physics Lab
            Recruitment
          </li>
        </ul>
      </div>

      <!-- Experience -->
      <div class="mb-10">
        <h2
          class="text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-300"
        >
          Experience
        </h2>
        <ul class="text-sm space-y-2">
          <li>
            <strong>Odoo Developer</strong> — PT Ditama Teknologi Indonesia
            (2025–present)
          </li>
          <li>
            <strong>Programmer Analyst</strong> — PT Gema Cendikia Gemilang
            (2024–2025)
          </li>
          <li>
            <strong>Frontend Developer</strong> — INSIGHT Laboratory (2023–2024)
          </li>
          <li>
            <strong>Desktop Developer Intern</strong> — PT Kereta Api Indonesia
            (2023–2024)
          </li>
          <li>
            <strong>Maintenance Engineer Intern</strong> — PT Smelting (2023)
          </li>
        </ul>
      </div>

      <!-- Testimonials -->
      <h2
        class="text-2xl font-semibold mt-10 mb-4 text-indigo-600 dark:text-indigo-300"
      >
        Testimonials
      </h2>

      <div class="space-y-8">
        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-400"
        >
          <blockquote class="italic text-gray-800 dark:text-gray-300">
            “Lailatul demonstrates exceptional dedication as a programmer. She
            learns quickly, understands business needs effectively, and
            consistently completes tasks with responsibility and timeliness. Her
            work ethic and technical skills are highly reliable.”
          </blockquote>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            — Ismi (Project Manager PT. Gema Cendikia Gemilang)
          </p>
        </div>

        <div
          class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-yellow-400"
        >
          <blockquote class="italic text-gray-800 dark:text-gray-300">
            "Laila is a hard worker—highly responsible, resilient, a great
            listener, and without a doubt, someone intelligent and reliable to
            work with. Her strategic thinking and contributions to various
            projects are proof of her dependability and trustworthiness. She’s a
            joy to work with and be around, always staying up-to-date with the
            latest trends and technologies, making her a strong candidate for
            growth in a UI/UX design career. Laila is both a great colleague and
            a friend, always open to collaboration and innovation."
          </blockquote>
          <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            — Herda (UI/UX Designer PT. Gema Cendikia Gemilang)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import profilePic from "@/assets/profile/fotolaila.png";

const skills = [
  "Vue.js",
  "React.js",
  "Laravel",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "UI/UX",
  "Figma",
  "REST API",
  "JSON-RPC 2.0",
  "Git & GitHub",
  "Odoo",
];
</script>
