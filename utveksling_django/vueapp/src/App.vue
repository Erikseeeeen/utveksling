<template>
  <div class="app-container" style="margin-top: 1.3rem;"> <!-- Added a class for centering -->
    <div class="centered-container" style="margin-bottom: 1rem;">
      <utveksling-logo />
    </div>
    <div class="centered-container"> <!-- Added a class for centering -->
      <leaflet-map :universities="this.universities" />
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <dropdown-textfield @last-input-program="handleTextFieldEvent"/>
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <university-cards :last_input_program="this.last_input_program" :universities="this.universities" />
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
      last_input_program: '',
      universities: [],
    }
  },
  async mounted() {
    await this.fetch_universities();
  },
  components: {
    LeafletMap,
    DropdownTextfield,
    UtvekslingLogo,
    UniversityCards,
  },
  methods: {
    handleTextFieldEvent(event) {
      this.last_input_program = event.name
      this.fetch_universities();
    },
    async fetch_universities(){ // Define the fetch_universities method
      try {
        const university_response = await axios.get("/api/university");
        this.universities = university_response.data.map((university) => {
          return {
            lat: parseFloat(university.lat),
            lng: parseFloat(university.lng),
            number_id: university.number_id, // Include the university number_id
            city: university.city,
            country: university.country,
            report_id_list: JSON.parse(
              university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
            )[this.last_input_program],
            // report_id_list is a list of strings containing report ids. number_of_students is the length of this list.
            number_of_students: JSON.parse(
              university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
            )[this.last_input_program] ? JSON.parse(JSON.stringify(JSON.parse(
              university.programs_serialized.replace(/'/g, '"').replace(/,}/g, "}")
            )[this.last_input_program])).length : 0,
            name: university.name, // Include the university name
          };
        });
        // sort this.universities by number_of_students
        // this.universities.sort((a, b) => {
        //   return b.number_of_students - a.number_of_students;
        // });
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    },
  }
}
</script>