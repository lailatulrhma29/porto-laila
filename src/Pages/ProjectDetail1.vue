<template>
  <section class="px-6 py-16  text-left max-w-5xl mx-auto space-y-16">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold mb-4">AQMS Dashboard Redesign</h1>
      <p class="text-gray-700 text-lg">
        Improving the user experience for real-time environmental monitoring.
      </p>
    </div>

    <!-- Hero Image -->
    <div data-aos="fade-up">
      <img :src="dashboard" class="rounded-lg shadow w-full" alt="AQMS Dashboard" />
    </div>

    <!-- Intro Description -->
    <div class="space-y-4 text-gray-700 leading-relaxed" data-aos="fade-up">
      <p>
        The AQMS (Air Quality Monitoring System) Dashboard is a real-time monitoring interface designed
        to help users track environmental indicators efficiently. The interface was initially complex and inconsistent.
        This redesign focused on clarity, speed, and visual cohesion.
      </p>
      <p>
        My contributions involved UI/UX improvement, implementing dynamic components in Vue.js, and connecting
        the dashboard with backend APIs. Collaboration with the engineering team was key to ensure feasibility and
        quick iterations.
      </p>
    </div>

    <!-- Process Steps -->
    <div class="bg-gray-50 p-6 rounded-lg shadow" data-aos="fade-up">
      <h2 class="text-xl font-semibold mb-4">Project Timeline</h2>
      <ol class="list-decimal ml-5 space-y-2 text-sm text-gray-700">
        <li><strong>Research & Audit:</strong> Studied current UI and gathered user complaints.</li>
        <li><strong>Wireframing:</strong> Created low-fidelity mockups based on task priority.</li>
        <li><strong>Design System:</strong> Standardized typography, spacing, and color hierarchy.</li>
        <li><strong>Development:</strong> Built responsive components using Vue.js and Tailwind CSS.</li>
        <li><strong>Testing:</strong> Conducted feedback loops with QA and live sensors data.</li>
      </ol>
    </div>

    <!-- Image Pair -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
      <img :src="datahistory" class="rounded-lg shadow w-full" alt="Data History Module" />
      <img :src="maintenance" class="rounded-lg shadow w-full" alt="Maintenance Module" />
    </div>

    <!-- Testimonial / Highlight Box -->
    <div class="bg-yellow-50 p-6 rounded-lg text-sm text-gray-800 shadow" data-aos="fade-up">
      <p>
        “Lailatul was quick to adapt and brought clean, functional UI to life. Her understanding of both user
        needs and technical constraints made her a key contributor to this project.”
      </p>
      <div class="text-right mt-2 text-gray-500">— Team Lead, AQMS Project</div>
    </div>

    <!-- Key Takeaways -->
    <div data-aos="fade-up">
      <h2 class="text-2xl font-semibold mb-4">Key Takeaways</h2>
      <ul class="list-disc ml-5 space-y-2 text-gray-800 text-base">
        <li>
          <strong>Strategic MVP planning:</strong> Helped prevent scope creep and meet tight timelines.
        </li>
        <li>
          <strong>Iterative design:</strong> Frequent testing and feedback improved the overall usability.
        </li>
        <li>
          <strong>Close tech-design collaboration:</strong> Reduced rework and aligned feature delivery.
        </li>
      </ul>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16" data-aos="fade-up">
      <p class="text-lg font-medium">Curious about the process or want to collaborate?</p>
      <router-link
        to="/contact"
        class="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition"
      >
        Let’s talk →
      </router-link>
    </div>

    <!-- Back -->
    <div class="mt-12 text-center">
      <router-link to="/" class="text-blue-600 underline hover:text-blue-800">← Back to home</router-link>
    </div>
  </section>
</template>

<script setup>
import dashboard from '@/assets/AQMS/dashboardaqms.png'
import datahistory from '@/assets/AQMS/datahistory.png'
import maintenance from '@/assets/AQMS/maintenance.png'
</script>