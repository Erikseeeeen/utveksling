<template>
  <div class="app-container" style="margin-top: 1.3rem;"> <!-- Added a class for centering -->
    <div class="centered-container" style="margin-bottom: 1rem;">
      <utveksling-logo />
    </div>
    <div class="centered-container"> <!-- Added a class for centering -->
      <leaflet-map :universities="this.universities" />
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <dropdown-textfield @selected-program="handleTextFieldEvent"/>
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <university-cards :selected_program="this.selected_program" :universities="this.universities" />
    </div>
  </div>
</template>



<script>
import LeafletMap from './components/LeafletMap.vue'
import DropdownTextfield from './components/DropdownTextfield.vue'
import UtvekslingLogo from './components/UtvekslingLogo.vue'
import UniversityCards from './components/UniversityCards.vue'
import axios from "axios";

export default {
  name: 'App',
  data() {
    return {
      selected_program: '',
      universities: [],
    }
  },
  async mounted() {
    try {
      const university_response = await axios.get("/api/university");
      this.universities = university_response.data.map((university) => {
        return {
          lat: parseFloat(university.lat),
          lng: parseFloat(university.lng),
          city: university.city,
          country: university.country,
          report_id_list: JSON.parse(
            university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
          )[this.selected_program],
          // report_id_list is a list of strings containing report ids. number_of_students is the length of this list.
          number_of_students: JSON.parse(
            university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
          )[this.selected_program] ? JSON.parse(JSON.stringify(JSON.parse(
            university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
          )[this.selected_program])).length : 0,
          name: university.name, // Include the university name
        };
      });
      // sort this.universities by number_of_students
      this.universities.sort((a, b) => {
        return b.number_of_students - a.number_of_students;
      });
    } catch (error) {
      console.error("Error fetching universities:", error);
    }
  },
  components: {
    LeafletMap,
    DropdownTextfield,
    UtvekslingLogo,
    UniversityCards,
  },
  methods: {
    handleTextFieldEvent(event) {
      this.selected_program = event.name
    },
  }
}
</script>