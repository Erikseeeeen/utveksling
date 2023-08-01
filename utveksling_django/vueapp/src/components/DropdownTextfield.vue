<template>
  <div class="input-container">
    <input class="styled-input" v-model="selected_program_string" @input="filterPrograms" placeholder="Søk etter studieretning">
    <!-- Placeholder should be set to selected_program_string, if it is not '' -->
    <ul v-if="showDropdown && filtered_programs.length > 0" class="dropdown-list">
      <li v-for="program in filtered_programs" :key="program.id" @click="selectProgram(program.name)">
        <span :style="{ textAlign: 'left', display: 'inline-block', width: '50%', wordBreak: 'break-all' }">
          {{ program.name }}
        </span>
        <span :style="{ textAlign: 'right', display: 'inline-block', width: '50%' }">
          {{ program.number }} rapporter
        </span>
      </li>
      <!-- <li v-for="program in filtered_programs" :key="program.id" @click="selectProgram(program.name)">
        
      </li> -->
    </ul>
    </div>
    <!-- <div class="styled-button-container"> 
      <button class="styled-button" @click="buttonClicked">Søk</button>
    </div> -->
    <input type="hidden" name="csrfmiddlewaretoken" :value="csrfToken" />
</template>
<script>

export default {
  
  data() {
    return {
      filtered_programs: [], // Filtered program names based on user input
      selected_program_string: '',  // Currently selected program name
      csrfToken: null,
      showDropdown: true,   // Flag to control the visibility of the dropdown
    };
  },
  props: {
    programs: {
      type: Array,
      required: true,
    },
  },
  emits: ['last-input-program'],
  computed: {
    
  },
  methods: {
    filterPrograms() {
      this.showDropdown = true;
      // Check if this.selected_programs is defined and a string
      if (typeof this.selected_program_string === 'string' && this.selected_program_string.trim() !== '') {
        const filterText = this.selected_program_string.toLowerCase();
        this.filtered_programs = this.programs.filter(program =>
          program.name.toLowerCase().includes(filterText)
        ).sort((a, b) => b.number - a.number);
      } else {
        // If this.selected_program is not a valid string, show all programs
        this.filtered_programs = this.programs;
      }
    },
    // buttonClicked() {
    //   this.$emit('last-input-program', { name: this.selected_program });
      
    // },
    selectProgram(programName) {
      // Update selected_program_string when a program is clicked in the dropdown
      this.selected_program_string = programName;
      this.$emit('last-input-program', { name: programName });
      this.showDropdown = false;
    },
    // getCookie(name) {
    //   const value = `; ${document.cookie}`;
    //   const parts = value.split(`; ${name}=`);
    //   if (parts.length === 2) return parts.pop().split(";").shift();
    // },
    saveToLocalStorage() {
      localStorage.setItem('last-input-program', this.selected_program_string);
    },
    loadFromLocalStorage() {
      this.selected_program_string = localStorage.getItem('selected_program_string') || '';
      this.$emit('last-input-program', { name: this.selected_program_string });
    },
  },
  created() {
    // this.csrfToken = this.getCookie("csrftoken");
    this.loadFromLocalStorage();
  },
  watch: {
    selected_program_string() {
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
  width: min(max(50%, 60rem), 95%);
  /* width: 100%; */
  font-size: 1rem;
}

.styled-button-container {
  /* Create a new container style for the button and center it */
  display: flex;
  justify-content: center;
  margin-top: 8px; /* Add some spacing between the input and button */
}

.styled-button {
  background-color: #008fbb;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.styled-button:hover {
  background-color: #77c2da;
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