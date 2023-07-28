<template>
  <div class="map-container">
    <l-map ref="map" v-model:zoom="zoom" :center="mapCenter">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>

      <l-circle-marker
        v-for="university in filteredUniversities"
        :key="university.number_id"
        :lat-lng="[university.lat, university.lng]"
        :radius="Math.pow(university.number_of_students, 0.7) * 6"
        :color="'red'"
        :ref="'marker-' + university.number_id"
        @click="handlePopupChanged(university, university.number_id)"
      >
        <l-popup @remove="handlePopupChanged(undefined)">
          <i>{{ university.name }}</i>
          <br />
          {{ university.number_of_students }}
          <span v-if="university.number_of_students > 1">
            rapporter fra {{ last_input_program }}
          </span>
          <span v-else>
            rapport fra {{ last_input_program }}
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
      openedPopupNumberId: null, // To keep track of the currently opened popup's NumberId
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
    popup_university: {
      type: Object,
      required: false,
      default: null,
    },
  },
  computed: {
    filteredUniversities() {
      return this.universities.filter(
        (university) => university.name !== "" && university.number_of_students > 0
      );
    },
  },
  watch: {
    popup_university(newUniversity) {
      if(newUniversity == undefined) {
        this.closePopups(newUniversity);
      }
      if (newUniversity) {
        this.openPopupIfNeeded(newUniversity);
      }
    },
  },
  methods: {
    handlePopupChanged(university, number_id) {
      // Emit a custom event when the circle-marker is clicked and pass the university data
      this.$emit("set-popup-university", university);
      this.openedPopupNumberId = number_id; // Update the opened popup NumberId
    },
    openPopupIfNeeded(university) {
      const popupNumberId = university.number_id;
      if (popupNumberId !== this.openedPopupNumberId) {
        const markerRef = this.$refs['marker-' + popupNumberId];
        markerRef[0].leafletObject.openPopup()
      }
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto; /* Center horizontally */
}
</style>