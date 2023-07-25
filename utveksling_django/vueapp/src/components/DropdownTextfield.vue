<template>
  <div>
    <div class="input-container">
      <input class="styled-input" v-model="selectedProgram" @input="filterPrograms" placeholder="Skriv inn studieretning">
      <ul v-if="showDropdown && filteredPrograms.length > 0">
        <li v-for="program in filteredPrograms" :key="program.id" @click="selectProgram(program)">
          {{ program }}
        </li>
      </ul>
    </div>
    <button class="styled-button" @click="buttonClicked">Click Me</button>
    <input type="hidden" name="csrfmiddlewaretoken" :value="csrfToken" />
  </div>
</template>

  
<script>
import axios from 'axios';

export default {
  data() {
    return {
      programs: [],         // All program names from the database
      filteredPrograms: [], // Filtered program names based on user input
      selectedProgram: '',  // Currently selected program name
      csrfToken: null,
      showDropdown: true,   // Flag to control the visibility of the dropdown
    };
  },
  methods: {
    filterPrograms() {
      // Check if this.selectedProgram is defined and a string
      if (typeof this.selectedProgram === 'string' && this.selectedProgram.trim() !== '') {
        const filterText = this.selectedProgram.toLowerCase();
        this.filteredPrograms = this.programs.filter(program =>
          program.toLowerCase().includes(filterText)
        );
      } else {
        // If this.selectedProgram is not a valid string, show all programs
        this.filteredPrograms = this.programs;
      }
    },
    buttonClicked() {
      const headers = { "X-CSRFToken": this.csrfToken };
      axios
      .post("/api/input_program/", { text: this.selectedProgram }, { headers })
      .then((response) => {
        console.log(response.data.message);
        location.reload();
      });
    },
    selectProgram(programName) {
      // Update selectedProgram when a program is clicked in the dropdown
      this.selectedProgram = programName;
      this.showDropdown = false;
    },
    fetchPrograms() {
      // Fetch program names from Django backend using API endpoint
      axios.get('/api/program')
        .then(response => {
          this.programs = response.data.map(program => program.name);
        })
        .catch(error => {
          console.error('Error fetching program names:', error);
        });
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    },
  },
  created()
  {
    this.csrfToken = this.getCookie("csrftoken");
  },
  mounted() {
    this.fetchPrograms();
  },
};
</script>

<style>
/* Some basic styles for the dropdown */
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
}

li {
  cursor: pointer;
  padding: 5px;
}

li:hover {
  background-color: #f0f0f0;
}
/* Add your custom styles here */
.input-container {
  position: relative;
}

.styled-input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 16px;
}

.styled-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.styled-button:hover {
  background-color: #0056b3;
}

/* Additional styles for the dropdown list (you can customize this as well) */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
}

li {
  padding: 8px 12px;
  cursor: pointer;
}

li:hover {
  background-color: #ddd;
}
</style>