<template>
  <section
    class="min-h-screen px-6 py-20 bg-gradient-to-br from-[#fff9f5] via-[#f0fdf8] to-[#fefcea] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white transition-colors"
  >
    <div class="max-w-4xl mx-auto">
      <div v-if="project">
        <h1
          class="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300"
        >
          {{ project.title }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          {{ project.subtitle }}
        </p>

        <!-- Image Gallery -->
        <div v-if="images.length" class="mb-10">
          <div class="relative rounded-lg overflow-hidden shadow-lg">
            <img
              :src="images[activeImage]"
              :alt="`Slide ${activeImage + 1}`"
              class="w-full h-auto object-cover transition duration-300"
            />
            <!-- Prev -->
            <button
              @click="prevImage"
              class="absolute left-3 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-xl p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600"
              v-if="images.length > 1"
            >
              ‹
            </button>
            <!-- Next -->
            <button
              @click="nextImage"
              class="absolute right-3 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-700 text-xl p-2 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-600"
              v-if="images.length > 1"
            >
              ›
            </button>
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-3 mt-4 overflow-x-auto pb-2">
            <img
              v-for="(img, i) in images"
              :key="i"
              :src="img"
              @click="activeImage = i"
              class="h-16 w-auto rounded border cursor-pointer transition duration-200"
              :class="
                i === activeImage
                  ? 'ring-2 ring-indigo-400'
                  : 'opacity-60 hover:opacity-100'
              "
            />
          </div>

          <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">
            {{
              project.imageCaptions?.[activeImage] ??
              `Preview ${activeImage + 1}`
            }}
          </p>
        </div>

        <!-- Description -->
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {{ project.description }}
        </p>

        <!-- Tools -->
        <div class="text-sm mb-6">
          <strong class="text-gray-800 dark:text-gray-200">Tools:</strong>
          <span class="text-gray-600 dark:text-gray-400">{{
            project.tools
          }}</span>
        </div>

        <!-- Highlights -->
        <ul
          class="list-disc ml-6 text-gray-700 dark:text-gray-300 text-sm space-y-2"
        >
          <li v-for="(point, index) in project.highlights" :key="index">
            {{ point }}
          </li>
        </ul>

        <!-- CTA -->
        <div class="mt-10">
          <router-link
            to="/projects"
            class="inline-block text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            ← Back to Projects
          </router-link>
        </div>
      </div>

      <div v-else>
        <p class="text-red-500 font-semibold">⚠️ Project not found.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

// Import images
import dashboardaqms from "@/assets/AQMS/dashboardaqms.png";
import datahistory from "@/assets/AQMS/datahistory.png";
import maintenance from "@/assets/AQMS/maintenance.png";
import home from "@/assets/shopee/home.png";
import track from "@/assets/shopee/track.png";
import landingpage from "@/assets/eduwork/landingpage.png";
import rentspace from "@/assets/rentspace/SS4.png";
import rentspace1 from "@/assets/rentspace/SS5.png";
import SS1 from "@/assets/rentspace/SS1.png";
import SS2 from "@/assets/rentspace/SS2.png";
import SS3 from "@/assets/rentspace/SS3.png";
import adminhomescola1 from "@/assets/scola/adminhomescola1.jpg";
import aqms2 from "@/assets/aqms2/aqms2.jpg";
import { ref } from "vue";

// active image index
const activeImage = ref(0);
const images = computed(() => project.value?.images ?? [project.value?.image]);
const prevImage = () => {
  activeImage.value =
    (activeImage.value - 1 + images.value.length) % images.value.length;
};
const nextImage = () => {
  activeImage.value = (activeImage.value + 1) % images.value.length;
};
// Project data
const allProjects = [
  {
    slug: "aqms",
    title: "AQMS Dashboard",
    subtitle: "Real-time environmental data tracking.",
    images: [dashboardaqms, datahistory, maintenance],
    imageCaptions: [
      "Main dashboard showing real-time air metrics",
      "Data history and analytics",
      "Maintenance and system health overview",
    ],
    description:
      "A monitoring dashboard designed to visualize and interpret real-time air quality metrics from AQMS (Air Quality Monitoring Stations). Built with Laravel and React on top of a MySQL database, it delivers responsive UI and advanced charts for data analysts and field operators.",
    tools: "Laravel, React, MySQL, CSV Export, Chart.js, Tailwind, REST API",
    highlights: [
      "Live data visualization using Chart.js",
      "Modular backend–frontend separation (Laravel + React)",
      "Deployed in production for real environmental stations",
    ],
  },
  {
    slug: "scola",
    title: "School Management System",
    subtitle: "Full CRUD dashboard for school administration.",
    images: [adminhomescola1],
    imageCaptions: ["Main dashboard showing school activity summary"],
    description:
      "A comprehensive school management system designed to help administrators manage academics, attendance, payments, reports, and more. The system provides real-time data monitoring, role-based access, and a clean interface for daily operations in schools.",
    tools: "Odoo, Vue.js, PostgreSQL, JSON-RPC, Tailwind CSS",
    highlights: [
      "📊 Dashboard: Real-time metrics and quick summaries",
      "📚 Manajemen Akademik: Mata Pelajaran, Topik, Jam Pelajaran, Sesi & Batch",
      "👨‍🏫 Guru & Kelas: Kelas, Daftar Guru, Penugasan, Kehadiran Staff",
      "👩‍🎓 Siswa & Orang Tua: Data Siswa, Kehadiran, Orang Tua, User",
      "🏫 Administrasi Sekolah: Perpustakaan, Kalender, Pembayaran, Berita, PPDB",
      "📝 Penilaian & Akademik: Ujian & E-Raport digital",
      "💬 Konseling: Prestasi dan pencatatan pelanggaran siswa",
    ],
  },
  {
    slug: "admin-panel",
    title: "Parcel Tracking UI",
    subtitle: "Clean and responsive design for shipment tracking.",
    images: [home, track],
    imageCaptions: [
      "Landing page with shipment input and delivery info",
      "Detailed tracking view showing package status",
    ],
    description:
      "This project is a UI/UX design concept for an expedition tracking platform. Users can enter their shipment number and get real-time updates about their package journey. The design focuses on simplicity, responsive layout, and clarity of status updates.",
    tools: "Figma, Tailwind UI Guidelines, UI Prototyping",
    highlights: [
      "Step-by-step shipment status view",
      "Responsive layout for mobile-first use",
      "User-friendly tracking input and visual feedback",
    ],
  },
  {
    slug: "landing-page",
    title: "Eduwork Landing Page Design",
    subtitle: "Marketing homepage for a career platform.",
    images: [landingpage],
    imageCaptions: [
      "Homepage UI with hero CTA, partner logos, and program overview",
    ],
    description:
      "A UI-only concept for Eduwork’s official homepage. Designed to promote career bootcamps, job placement services, and digital learning programs. This landing page focuses on conversion elements like CTAs, testimonials, and course highlights—crafted to ensure clarity and strong visual hierarchy.",
    tools: "Figma, Tailwind UI Style Guide, Scroll Animation",
    highlights: [
      "Hero section with dual CTA (Daftar & Konsultasi)",
      "Partner trust section with logos (Tokopedia, Astra, etc.)",
      "Program showcase & user testimonials",
      "Modern layout with responsive sections",
      "Scroll-triggered animations and section reveals",
    ],
  },
  {
    slug: "rent-space",
    title: "Rent Space App",
    subtitle: "Full-stack coworking space booking app UI & backend API.",
    images: [rentspace, rentspace1, SS1, SS2, SS3],
    imageCaptions: [
      "Landing page with featured coworking spaces",
      "Booking confirmation with summary",
      "List of spaces filtered by city & category",
      "Detailed office view with map integration",
      "Admin CMS for managing cities and listings",
    ],
    description:
      "This project is part of a Full-Stack Laravel & React JS course, focused on building a modern web application to search, book, and manage coworking spaces. It includes API development, CMS dashboard creation, frontend booking interface, and SMS/WhatsApp notifications. The app demonstrates real-world skills like authentication, API security, and frontend integration using React + TypeScript.",
    tools:
      "Laravel 11, React JS 18, TypeScript, MySQL, FilamentPHP, Axios, Zod, Twilio, Tailwind, Vite",
    highlights: [
      "Built full REST API using Laravel with custom API key & CORS",
      "Frontend built in React + TypeScript with reusable components",
      "CMS created with FilamentPHP (super admin in 10 mins)",
      "Implements SMS & WhatsApp notifications using Twilio",
      "Responsive design & map integration via Google Maps API",
      "Followed SOLID principles and clean project structure",
    ],
  },
  {
    slug: "aqms-wqms",
    title: "AQMS & WQMS Dashboard",
    subtitle:
      "User interface for environmental monitoring in IoT applications.",
    images: [aqms2],
    imageCaptions: [
      "Dashboard view displaying air quality and water level metrics with charts",
    ],
    description:
      "Developed as part of a Master's-level IoT project, this dashboard presents a clean and responsive UI for monitoring environmental metrics. It visualizes real-time data from an Arduino-powered sensor network, including PM2.5, CO2, humidity, temperature, sunlight intensity, and water level. The system uses Firebase as the backend to store and stream sensor data, while the frontend is built in React for a fast, modular interface.",
    tools:
      "React JS, Firebase Realtime Database, Chart.js, Tailwind CSS, Arduino, Vite",
    highlights: [
      "Live data fetching and syncing via Firebase Realtime Database",
      "Responsive dashboard UI built with React and Tailwind",
      "Charts rendered with Chart.js to monitor key IoT sensor values",
      "Categorized air quality conditions based on lux values",
      "Water level visualized with pie chart for clarity",
      "Arduino microcontroller for real-time data transmission",
    ],
  },
];

// Get slug from route
const route = useRoute();
const slug = route.params.slug;

// Get selected project
const project = computed(() => allProjects.find((p) => p.slug === slug));
</script>
