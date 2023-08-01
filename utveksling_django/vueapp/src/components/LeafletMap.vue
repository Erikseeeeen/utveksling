<template>
  <div class="map-container">
    <l-map
    ref="map"
    v-model:zoom="zoom"
    :center="mapCenter"
    @zoomend="change_marker_radius"
    @ready="change_marker_radius">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
        class="map-tiles"
      ></l-tile-layer>

      <l-circle-marker
        v-for="university in filteredUniversities"
        :key="university.number_id"
        :lat-lng="[university.lat, university.lng]"
        :color="'red'"
        :ref="'marker-' + university.number_id"
        @click="handlePopupChanged(university.number_id)"
      >
      <l-popup @remove="handlePopupChanged(-1)">
          
        <b style="font-size: 1rem;">{{ university.name }}</b>
          <!-- <br />
          {{ university.number_of_students }}
          <span v-if="university.number_of_students > 1">
            rapporter fra {{ last_input_program }}
          </span>
          <span v-else>
            rapport fra {{ last_input_program }}
          </span> -->
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
    popup_university_id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    sortedUniversities() {
      // Sort the universities by their number_of_students property in descending order
      return this.universities.slice().sort((a, b) => a.number_of_students - b.number_of_students);
    },
    filteredUniversities() {
      return this.sortedUniversities.filter(
        (university) => university.name !== "" && university.number_of_students > 0
      );
    },
    popup_university(){
      return this.popup_university_id == -1 ? undefined : this.universities.find(university => university.number_id == this.popup_university_id);
    },
  },
  watch: {
    popup_university_id(new_university_id) {
      if(new_university_id == -1) {
        this.closePopups(new_university_id);
      }
      else {
        this.openPopup(new_university_id);
      }
    },
    filteredUniversities() {
      this.change_marker_radius();
      // Wait for a frame
      this.$nextTick(() => {
        this.change_marker_radius();
      });
    }
  },
  methods: {
    change_marker_radius(){
      this.filteredUniversities.forEach(university => {
        const markerRef = this.$refs['marker-' + university.number_id];
        if(markerRef && markerRef[0])
          markerRef[0].leafletObject.setRadius(this.radius_coefficient(university.number_of_students));
      });
    },
    radius_coefficient(number_of_students)
    {
      const mapRef = this.$refs['map'];
      const newzoom = mapRef.leafletObject.getZoom();
      // Return sqrt
      // return Math.pow(number_of_students, 0.5) / Math.pow(1.7, this.zoom);
      return Math.pow(number_of_students, 0.5) * Math.pow(newzoom, 1.2) * 1;

      // if(number_of_students == 1)
      //   return 1;
      // if(number_of_students <= 3)
      //   return 2;
      // if(number_of_students <= 7)
      //   return 3;
      // if(number_of_students <= 15)
      //   return 4;
      // return 5;
    },
    handlePopupChanged(university_id) {
      // Emit a custom event when the circle-marker is clicked and pass the university data
      this.$emit("set-popup-university", university_id);
    },
    openPopup(university_id) {
      console.log("openPopup");
      console.log(university_id);
      const markerRef = this.$refs['marker-' + university_id];
      console.log(markerRef);
      markerRef[0].leafletObject.openPopup()
    },
    closePopups() {
      const mapRef = this.$refs['map'];
      mapRef.leafletObject.closePopup();
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
  max-height: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Center horizontally */
}

.university-name {
  font-size: 1rem;
  font-weight: bold;
}
:root {
    --map-tiles-filter: brightness(0.6) invert(1) contrast(3) hue-rotate(200deg) saturate(0.3) brightness(0.7);
}


</style>