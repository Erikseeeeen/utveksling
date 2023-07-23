<template>
  <div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<!-- <script>
// console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa');
import "leaflet/dist/leaflet.css";
import { LMarker, LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
  components: {
    LMap,
    LTileLayer,
  },
  name: 'LeafletMap',
  props: ['coordinates'],
  mounted() {
    this.initMap();
  },
  data() {
    return {
      zoom: 2,
    };
  },
  methods: {
    initMap() {
      this.map = LMap('map').setView([0, 0], 2);
      LTileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.addMarkers();
    },
    addMarkers() {
      this.coordinates.forEach(coord => {
        LMarker([coord.lat, coord.lng]).addTo(this.map);
      });
    }
  },
};
</script> -->
<script>
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
</script>

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
