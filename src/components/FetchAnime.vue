<script>
import axios from "axios";

export default {
  data() {
    return {
      animes: [],
      error: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://api.jikan.moe/v4/random/manga"
        );
        this.animes = [response.data.data];
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Animes</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="anime in animes" :key="anime.mal_id">
          Title: {{ anime.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
