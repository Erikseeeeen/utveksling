<template>
  <div class="input-container">
    <input class="styled-input" v-model="selected_program" @input="filterPrograms" placeholder="Skriv inn studieretning">
    <!-- Placeholder should be set to selected_program, if it is not '' -->
    <ul v-if="showDropdown && filtered_programs.length > 0" class="dropdown-list">
      <li v-for="program in filtered_programs" :key="program.id" @click="selectProgram(program)">
        {{ program }}
      </li>
    </ul>
    </div>
    <div class="styled-button-container"> <!-- Add the new container for the button -->
      <button class="styled-button" @click="buttonClicked">Søk</button>
    </div>
    <input type="hidden" name="csrfmiddlewaretoken" :value="csrfToken" />
</template>
<script>
import axios from 'axios';

export default {
  
  data() {
    return {
      programs: [],         // All program names from the database
      filtered_programs: [], // Filtered program names based on user input
      selected_program: '',  // Currently selected program name
      csrfToken: null,
      showDropdown: true,   // Flag to control the visibility of the dropdown
    };
  },
  emits: ['last-input-program'],
  methods: {
    filterPrograms() {
      this.showDropdown = true;
      // Check if this.selected_program is defined and a string
      if (typeof this.selected_program === 'string' && this.selected_program.trim() !== '') {
        const filterText = this.selected_program.toLowerCase();
        this.filtered_programs = this.programs.filter(program =>
          program.toLowerCase().includes(filterText)
        );
      } else {
        // If this.selected_program is not a valid string, show all programs
        this.filtered_programs = this.programs;
      }
    },
    buttonClicked() {
      const headers = { "X-CSRFToken": this.csrfToken };
      axios
      .post("/api/input_program/", { text: this.selected_program }, { headers })
      .then((response) => {
        console.log(response.data.message);
        // location.reload();
      });
      this.$emit('last-input-program', { name: this.selected_program });
      
    },
    selectProgram(programName) {
      // Update selected_program when a program is clicked in the dropdown
      this.selected_program = programName;
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
    saveToLocalStorage() {
      localStorage.setItem('selected_program', this.selected_program);
    },
    loadFromLocalStorage() {
      this.selected_program = localStorage.getItem('selected_program') || '';
      this.$emit('selected-program', { name: this.selected_program });
    },
  },
  created() {
    this.csrfToken = this.getCookie("csrftoken");
    this.loadFromLocalStorage();
  },
  mounted() {
    this.fetchPrograms();
  },
  watch: {
    selected_program() {
      this.saveToLocalStorage();
    },
  },
};
</script>

<style scoped>
.dropdown-list {
  position: absolute;
  top: 100%; /* Position the dropdown below the input field */
  left: 25%;
  width: 50%;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1;
}


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
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
}

.styled-input {
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 50%;
  font-size: 1rem;
}

.styled-button-container {
  /* Create a new container style for the button and center it */
  display: flex;
  justify-content: center;
  margin-top: 8px; /* Add some spacing between the input and button */
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