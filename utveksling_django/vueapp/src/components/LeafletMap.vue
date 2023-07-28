<template>
  <div class="map-container">
    <l-map ref="map" v-model:zoom="zoom" :center="mapCenter">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-circle-marker
        v-for="(university, index) in filteredUniversities"
        :key="index"
        :lat-lng="[university.lat, university.lng]"
        :radius="Math.sqrt(university.number_of_students) * 6"
        :color="university.number_of_students ? 'red' : 'transparent'"
      >
        <l-popup> 
          <i>{{ university.name }}</i>

          <br />
          {{university.number_of_students}}
          <span v-if="university.number_of_students > 1">
            rapporter fra {{ this.last_input_program }}
          </span>
          <span v-else>
            rapport fra {{ this.last_input_program }}
          </span>

        </l-popup>
      </l-circle-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LCircleMarker, LPopup } from "@vue-leaflet/vue-leaflet";

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
    };
  },
  props: {
    universities: {
    type: Array,
    required: true,
    },
    last_input_program: {
    type: String,
    required: true,
    },
  },
  computed: {
    filteredUniversities() {
      return this.universities.filter(university => university.name !== '');
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
