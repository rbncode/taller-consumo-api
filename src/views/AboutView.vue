<script setup>
import FetchManga from "@/components/FetchManga.vue";
</script>

<template>
  <FetchManga msg="hi" />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
