<script setup lang="ts">
useSeoMeta({
  title: "Tim Pengajar - SD Muhammadiyah 01 Ambulu",
  description:
    "Profil tenaga pengajar SD Muhammadiyah 1 Ambulu. Tim pendidik profesional yang berdedikasi membentuk generasi Robbani.",
  ogTitle: "Tim Pengajar - SD Muhammadiyah 01 Ambulu",
  ogDescription:
    "Pilar kecemerlangan — tim pendidik profesional SD Muhammadiyah 01 Ambulu.",
});

import type { ApiTeacher } from '~/composables/api/types'

const { data: teachersData } = await useTeachers()
const teachers = computed<ApiTeacher[]>(() => teachersData.value?.data ?? [])
const principal = computed(() => teachers.value.find(t => t.position?.toLowerCase().includes('kepala') || t.position?.toLowerCase().includes('principal')) ?? null)
const otherTeachers = computed(() => teachers.value.filter(t => t !== principal.value))
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section
      class="mb-16 text-center md:text-left max-w-7xl mx-auto px-6 pt-12"
    >
      <div
        class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-container/20 border border-secondary/20 mb-6"
      >
        <span
          class="text-secondary font-label font-bold text-[10px] uppercase tracking-widest"
          >Akademik</span
        >
      </div>
      <h1
        class="text-primary font-headline font-extrabold text-4xl md:text-6xl tracking-tight leading-tight mb-6"
      >
        Tim Pengajar <br />
        <span class="text-secondary">Pilar Kecemerlangan</span>
      </h1>
      <p
        class="text-on-surface-variant font-body text-xl max-w-2xl leading-relaxed italic"
      >
        "Kami mendedikasikan diri untuk membimbing tunas bangsa dengan
        integritas spiritual dan kemajuan intelektual."
      </p>
    </section>

    <!-- Teachers Grid -->
    <section class="max-w-7xl mx-auto px-6 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Principal Card (Featured) -->
        <div v-if="principal"
          class="lg:col-span-3 grid md:grid-cols-5 bg-surface-container-lowest rounded-xl overflow-hidden shadow-ambient border border-outline-variant/10"
        >
          <div class="md:col-span-2 relative h-80 md:h-auto overflow-hidden">
            <img
              v-if="principal.photo"
              :src="principal.photo"
              :alt="principal.name"
              class="w-full h-full object-cover"
            />
            <div v-else class="w-full h-full bg-secondary-container flex items-center justify-center">
              <AppIcon name="person" class="text-6xl text-secondary" />
            </div>
            <div
              class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"
            />
          </div>
          <div class="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
            <span
              class="text-secondary font-label font-bold text-xs uppercase tracking-widest mb-2"
              >{{ principal.position }}</span
            >
            <h2
              class="text-primary font-headline font-bold text-3xl mb-4 italic"
            >
              {{ principal.name }}
            </h2>
            <div class="w-12 h-1 bg-secondary mb-6" />
            <p v-if="principal.bio"
              class="text-on-surface font-body text-xl italic leading-relaxed mb-6"
            >
              "{{ principal.bio }}"
            </p>
          </div>
        </div>

        <!-- Teacher Cards -->
        <TeacherCard
          v-for="teacher in otherTeachers"
          :key="teacher.id"
          :name="teacher.name"
          :role="teacher.position ?? ''"
          :subject="teacher.subject ?? ''"
          :quote="teacher.bio ?? ''"
          :image="teacher.photo ?? ''"
        />
      </div>
    </section>
  </div>
</template>
