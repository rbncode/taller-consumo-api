<script>
import axios from "axios";

export default {
  data() {
    return {
      mangas: [],
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
        this.mangas = [manga.data.data];

        this.loading = false;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Mangas</h1>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="manga in mangas" :key="manga.mal_id">
          Title: {{ manga.title }}, Chapters: {{ manga.chapters }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
