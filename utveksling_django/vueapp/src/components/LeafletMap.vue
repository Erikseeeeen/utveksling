<template>
  <div style="height:800px; width:1000px">

    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <!-- Loop through the universities and place markers on the map -->
      <!-- <l-marker v-for="(coord, index) in universities" :key="index" :lat-lng="[coord.lat, coord.lng]"></l-marker> -->
      <!-- Radius should be the square root of university.number_of_students -->
      <l-circle-marker
        v-for="(university, index) in universities"
        :key="index"
        :lat-lng="[university.lat, university.lng]"
        :radius="Math.sqrt(university.number_of_students) * 5"
        :color="university.number_of_students ? 'red' : 'transparent'"
      ></l-circle-marker>
    </l-map>
  </div>
</template>



<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker } from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
  },
  data() {
    return {
      zoom: 2,
      mapCenter: [0, 0], // Default center universities
      universities: [], // Array to store the fetched universities
    };
  },
  async mounted() {
    // Fetch the list of universities from Django backend
    try {
      const response = await axios.get("/api/university"); // Replace with your Django API endpoint URL

      // for each university in response.data, print university.lng
      // response.data.forEach((university) => {

      //   // console.log(university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}"));
      //   console.log(JSON.parse(university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}"))["datateknologi"])
        

      //   // if(university.programs_serialized.replace(/'/g, '"')[255] == "'")
      //   // {
      //   //   // console.log(university.programs_serialized);
      //   // }
      // });
      

      this.universities = response.data.map((university) => {
        return {
          lat: parseFloat(university.lat),
          lng: parseFloat(university.lng),
          // university contains a dictionary 'dict' as a JSON string. Set the property number to the value of 'my number' in this serialized dict
          number_of_students: JSON.parse(university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}"))["kybernetikk og robotikk"],

        };
      });

    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  },
  methods: {
  },
};
</script>



<!-- <script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 2,
    };
  },
};
</script> -->

<!-- <script>
import LeafletMap from './components/LeafletMap.vue'
import axios from 'axios';

export default {
  name: 'App',
  components: {
    LeafletMap
  },
  data() {
    return {
      universities: []
    };
  },
  async mounted() {
    try {
      // Print "hello world"
      console.log('Hello world!');

      const response = await axios.get('/api/university'); // Replace with your API endpoint URL
      this.universities = response.data;
    } catch (error) {
      console.error('Error fetching universities:', error);
    }
  },
}
</script> -->







<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
