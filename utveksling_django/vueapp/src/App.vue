<script>
import LeafletMap from './components/LeafletMap.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    LeafletMap
  },
  data() {
    return {
      coordinates: []
    };
  },
  async mounted() {
    try {
      // Print "hello world"
      console.log('Hello world!');

      const response = await axios.get('/api/university'); // Replace with your API endpoint URL
      this.coordinates = response.data;
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  },
}
</script>

<template>
  <div>
    <leaflet-map :coordinates="coordinates" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
