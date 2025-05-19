<template>
  <section class="px-6 py-16 bg-white max-w-5xl mx-auto text-left">
    <div v-if="project">
      <h1 class="text-3xl font-bold mb-2">{{ project.title }}</h1>
      <p class="text-gray-600 mb-6 text-lg">{{ project.subtitle }}</p>

      <!-- Gambar-gambar -->
      <div class="space-y-10 mb-10">
        <!-- Interaktif Image Viewer -->
        <div v-if="images.length" class="mb-10">
          <!-- Gambar utama -->
          <div class="relative">
            <img
              :src="images[activeImage]"
              class="rounded-lg shadow w-full transition duration-300"
              :alt="`Slide ${activeImage + 1}`"
            />
            <!-- Tombol Prev -->
            <button
              @click="prevImage"
              class="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              v-if="images.length > 1"
            >
              ‹
            </button>
            <!-- Tombol Next -->
            <button
              @click="nextImage"
              class="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
              v-if="images.length > 1"
            >
              ›
            </button>
          </div>

          <!-- Thumbnail bar -->
          <div class="flex gap-3 mt-4 overflow-x-auto">
            <img
              v-for="(img, i) in images"
              :key="i"
              :src="img"
              @click="activeImage = i"
              class="h-16 rounded border cursor-pointer transition duration-200"
              :class="
                i === activeImage
                  ? 'ring-2 ring-blue-400'
                  : 'opacity-70 hover:opacity-100'
              "
            />
          </div>

          <!-- Caption -->
          <p class="text-sm text-gray-500 mt-2">
            {{
              project.imageCaptions?.[activeImage] ??
              `Preview ${activeImage + 1}`
            }}
          </p>
        </div>
      </div>

      <p class="text-gray-700 mb-4 leading-relaxed">
        {{ project.description }}
      </p>

      <div class="mt-10 text-sm text-gray-500">
        <strong>Tools:</strong> {{ project.tools }}
      </div>

      <ul class="list-disc mt-6 ml-6 text-gray-700 text-sm space-y-1">
        <li v-for="(point, index) in project.highlights" :key="index">
          {{ point }}
        </li>
      </ul>

      <!-- CTA -->
      <div class="mt-10">
        <router-link to="/" class="text-blue-600 underline hover:text-blue-800"
          >← Back to Home</router-link
        >
      </div>
    </div>

    <div v-else>
      <p class="text-red-500">Project not found.</p>
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
  imageCaptions: ["Homepage UI with hero CTA, partner logos, and program overview"],
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
];

// Get slug from route
const route = useRoute();
const slug = route.params.slug;

// Get selected project
// const project = computed(() => allProjects.find((p) => p.slug === slug));
</script>
