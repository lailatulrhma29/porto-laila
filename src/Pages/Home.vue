<template>
  <section class="min-h-screen px-6 py-16 bg-white text-center">
    <!-- Hero Section -->
    <div class="max-w-3xl mx-auto">
      <h1 class="text-5xl md:text-6xl font-light leading-tight">
        Hi, I'm
        <span class="bg-yellow-200 px-2 font-bold text-black">Laila</span>
      </h1>

      <h2 class="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
        <span class="text-black">I</span>

        <span class="text-transparent outline-text"> code, design, </span>
        <span class="text-black">& </span>
        <span class="text-transparent outline-text"> write </span>
      </h2>

      <p class="mt-6 text-gray-700 text-lg md:text-xl">
        Fullstack Developer (frontend-focused) passionate about building clean,
        functional interfaces. Exploring UI/UX. Fast learner, problem solver,
        and tech & design enthusiast.
      </p>
    </div>

    <!-- Section Divider -->
    <div class="mt-20 max-w-3xl mx-auto">
      <div class="text-sm tracking-wide text-gray-400 uppercase mb-2">
        My Recent Work
      </div>
    </div>

    <!-- Project Blocks -->
    <div class="space-y-10 mt-10">
      <div
        v-for="project in projects"
        :key="project.title"
        @click="goToDetail(project.slug)"
        class="max-w-5xl mx-auto flex flex-col md:flex-row overflow-hidden rounded-xl cursor-pointer hover:shadow-xl transition group"
        :class="project.bg"
      >
        <!-- Text -->
        <div class="md:w-1/2 p-8 flex flex-col justify-center text-left">
          <h3 class="text-2xl font-semibold group-hover:underline">
            {{ project.title }}
          </h3>
          <p class="text-gray-700 mt-2">{{ project.subtitle }}</p>
        </div>
        <!-- Image -->
        <div class="md:w-1/2">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

// Import image thumbnails
import dashboardaqms from "@/assets/AQMS/dashboardaqms.png";
import adminhomescola1 from "@/assets/scola/adminhomescola1.jpg";
import home from "@/assets/shopee/home.png";
import rentspace from "@/assets/rentspace/SS3.png";
import landingpage1 from "@/assets/eduwork/landingpage1.jpeg";

const router = useRouter();

const projects = [
  {
    title: "AQMS Dashboard",
    subtitle: "Real-time monitoring system for air quality.",
    image: dashboardaqms,
    slug: "aqms",
    bg: "bg-[#d9eafe]",
  },
  {
    title: "School Management System",
    subtitle: "Full CRUD dashboard for system administrators.",
    image: adminhomescola1,
    slug: "scola",
    bg: "bg-[#e4d9fb]",
  },
  {
    title: "Parcel Tracking UI",
    subtitle: "Modern interface for tracking parcel deliveries.",
    image: home,
    slug: "admin-panel",
    bg: "bg-[#fff6e5]",
  },
  // {
  //   title: "Landing Page",
  //   subtitle: "Responsive, modern layout for product presentation.",
  //   image: landingpage,
  //   slug: "landing-page",
  //   bg: "bg-[#fdf4ff]",
  // },
  {
    title: "Rent Space App",
    subtitle:
      "A web platform for browsing, booking, and managing shared workspaces.",
    image: rentspace,
    slug: "rent-space",
    bg: "bg-green-50",
  },
  {
    title: "Eduwork",
    subtitle: "Responsive, modern layout for product presentation.",
    image: landingpage1,
    slug: "landing-page",
    bg: "bg-[#e0f7ff]",
  },
];

function goToDetail(slug) {
  router.push(`/projects/${slug}`);
}
</script>

<style scoped>
.outline-text {
  color: transparent;
  -webkit-text-stroke: 1px black;
  font-weight: 700;
}
</style>
