<template>
  <div class="app-container" style="margin-top: 1.3rem;"> <!-- Added a class for centering -->
    <div class="centered-container" style="margin-bottom: 1rem;">
      <utveksling-logo />
    </div>
    <div class="centered-container"> <!-- Added a class for centering -->
      <leaflet-map />
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <dropdown-textfield />
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <university-cards />
    </div>
  </div>
</template>



<script>
import LeafletMap from './components/LeafletMap.vue'
import DropdownTextfield from './components/DropdownTextfield.vue'
import UtvekslingLogo from './components/UtvekslingLogo.vue'
import UniversityCards from './components/UniversityCards.vue'

export default {
  name: 'App',
  components: {
    LeafletMap,
    DropdownTextfield,
    UtvekslingLogo,
    UniversityCards,
  },
}
</script>