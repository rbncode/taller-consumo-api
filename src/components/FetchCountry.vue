<script>
import axios from "axios";

export default {
  data() {
    return {
      code: null,
      country: null,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "https://countriesnow.space/api/v0.1/countries/population"
        );
        const data = response.data;
        this.code = data.code;
        this.country = data.country;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<template>
  <div id="info">
    <p>Code: {{ code }}</p>
    <p>Country: {{ country }}</p>
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
