<template>
  <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css">
  </head>
  <div class="app-container" style="margin-top: 1.3rem;"> <!-- Added a class for centering -->
    <div class="centered-container" style="margin-bottom: 1rem;">
      <utveksling-logo />
    </div>
    <div class="centered-container"> <!-- Added a class for centering -->
      <leaflet-map :universities="this.universities" :last_input_program="this.last_input_program" :popup_university="this.popup_university" @set-popup-university="handleSetPopupUniversity"/>
    </div>
    <div class="centered-container" style="margin-top: 1rem;"> <!-- Added a class for centering -->
      <dropdown-textfield :program_strings="this.programs.map(program => program.name)"  @last-input-program="handleTextFieldEvent"/>
    </div>
    <div class="centered-container" style="margin-top: 1rem; margin-bottom: 6rem;"> <!-- Added a class for centering -->
      <university-cards
      :last_input_program="this.last_input_program"
      :universities="this.universities"
      :popup_university="this.popup_university"
      @set-popup-university="handleSetPopupUniversity"/>
    </div>
  </div>
</template>



<script>
import LeafletMap from './components/LeafletMap.vue'
import DropdownTextfield from './components/DropdownTextfield.vue'
import UtvekslingLogo from './components/UtvekslingLogo.vue'
import UniversityCards from './components/UniversityCards.vue'
import UniversitiesCsv from './universities.csv'
import ProgramsCsv from './programs.csv'

export default {
  name: 'App',
  data() {
    return {
      last_input_program: '',
      universities: [],
      programs: [],
      popup_university: null, // Initialize popup_university to null
    }
  },
  async mounted() {
    await this.read_universities();
    await this.read_programs();
  },
  components: {
    LeafletMap,
    DropdownTextfield,
    UtvekslingLogo,
    UniversityCards,
  },
  methods: {
    handleSetPopupUniversity(university) {
      this.popup_university = university;
    },
    handleTextFieldEvent(event) {
      this.last_input_program = event.name
      this.read_universities();
    },
    parseProgramsCSV(csvText) {
      const csvData = this.$papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      });

      let programs = csvData.data.map((record) => {
          return {
            name: record['program'],
          };
        });
      return programs;
    },
    parseUniversityCSV(csvText) {
      const csvData = this.$papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
      });

      let universities = csvData.data.map((record, i) => {
          return {
            lat: record['lat'],
            lng: record['lng'],
            number_id: i,
            city: record['city'],
            country: record['country'],
            report_id_list: JSON.parse(record['programs'].replace(/'/g, '"').replace(/,}/g, "}"))[this.last_input_program],
            number_of_students: JSON.parse(record['programs'].replace(/'/g, '"').replace(/,}/g, "}"))[this.last_input_program] ? JSON.parse(JSON.stringify(JSON.parse(record['programs'].replace(/'/g, '"').replace(/,}/g, "}"))[this.last_input_program])).length : 0,
            name: record['name'],
          };
        });
      return universities;
    },
    async read_programs() {
      try {
        this.programs = this.parseProgramsCSV(ProgramsCsv);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    },
    async read_universities() {
      try {
        this.universities = this.parseUniversityCSV(UniversitiesCsv);
        // Sort this.universities by number_of_students
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