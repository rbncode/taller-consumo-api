<script>
import axios from "axios";

export default {
  data() {
    return {
      countries: [],
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
          "https://countriesnow.space/api/v0.1/countries/population"
        );
        this.countries = response.data.data.map((country) => {
          return {
            name: country.country,
            code: country.country.substring(0, 3).toUpperCase(), // Using the first 3 letters of the country name as the code
          };
        });
        this.loading = false;
      } catch (error) {
        console.error("Error fetching data", error);
      }
    },
  },
};
</script>

<template></template>

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
