<template>
  <div class="map-container">
    <l-map ref="map" v-model:zoom="zoom" :center="mapCenter">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-circle-marker
        v-for="(university, index) in universities"
        :key="index"
        :lat-lng="[university.lat, university.lng]"
        :radius="this.zoom * Math.sqrt(university.number_of_students) * 3"
        :color="university.number_of_students ? 'red' : 'transparent'"
      >
        <l-popup> 
          <i>{{ university.name }}</i>
          
          <br />
          {{university.number_of_students}}
          <span v-if="university.number_of_students > 1">
            rapporter fra {{ this.input_program }}
          </span>
          <span v-else>
            rapport fra {{ this.input_program }}
          </span>

        </l-popup>
      </l-circle-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import axios from "axios";

export default {
  components: {
    LMap,
    LTileLayer,
    LCircleMarker,
    LPopup,
  },
  data() {
    return {
      zoom: 2,
      mapCenter: [47.41322, -1.219482],
      universities: [],
      input_program: "datateknologi",
    };
  },
  async mounted() {
    try {
      this.fetchInputProgram();
      const response = await axios.get("/api/university");
      this.universities = response.data.map((university) => {
        return {
          lat: parseFloat(university.lat),
          lng: parseFloat(university.lng),
          number_of_students: JSON.parse(
            university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
          )[this.input_program],
          name: university.name, // Include the university name
        };
      });
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  },
  methods: {
    fetchInputProgram() {
      axios
        .get("/api/input_program")
        .then((response) => {
          this.input_program = response.data["text"];
          console.log(response);
        })
        .catch((error) => {
          console.error("Error fetching input_program:", error);
        });
    },
  },
};
</script>



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
.map-container {
  height: 60vh;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Center horizontally */
}
</style>
