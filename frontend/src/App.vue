<template>
  <NavBar />
  <main>
    <Header />
    <RouterView />
  </main>
</template>

<script setup>
import NavBar from '@/components/Navigation/NavBar.vue';
import Header from '@/components/Navigation/Header.vue';
</script>
