<template>
  <div v-if="this.last_input_program != ''">
    <transition-group name="list" tag="div">
      <div
        v-for="(university, index) in popupFilterUniversities"
        :key="university.number_id"
        :data-index="index"
        style="cursor: pointer; margin-bottom: 0;"
        @click="console.log((popup_university == undefined || popup_university.number_id !== university.number_id)); (popup_university == undefined || popup_university.number_id !== university.number_id) ? this.$emit('set-popup-university', university) : this.$emit('set-popup-university', undefined)"
        @mouseover="scaleUpCard(index)"
        @mouseleave="resetCardScale(index)"
        >
        <div class="slide-card" v-show="showCard">
          <div v-if="university.number_of_students > 0" class="card" style="max-width: 1000px; margin: 0 auto;">
            <div class="card-content" 
            :style="[ 
              popup_university && popup_university.number_id === university.number_id ?
              { 'border': '10px solid #dbdbdb', 'border-radius' : '5px', 'order' : '-1'} : '',
            ]">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">{{ university.name }}</h2>
                  <p class="subtitle is-6">{{ university.city }}, {{ university.country }}</p>

                  <span v-if="last_input_program !== null" :key="last_input_program">
                    <p class="subtitle is-6 is-pulled-right">
                      rapport{{ getReportPluralSuffix(university.number_of_students) }} fra <br />
                      {{ last_input_program }}
                    </p>
                    <p class="title is-1 is-pulled-right" style="margin-right: 0.4rem;">{{ university.number_of_students }}</p>
                  </span>
                  
                  <details v-if="popup_university && popup_university.number_id === university.number_id" :open="university === popup_university" style="pointer-events: none">
                    <!-- <summary>
                        <span style="display: inline-block; cursor: pointer;">Detaljer</span>
                    </summary> -->
                    <summary style="display:block">
                      
                    </summary>
                    <template v-for="(keyValuePair, index) in Object.entries(getCategorizedReports(university)).reverse()" :key="index">
                      <h2 style="font-size:1.5rem; font-weight:bold">{{ keyValuePair[0] }}</h2>
                      <a v-for="report_id in keyValuePair[1]"
                      :key="report_id"
                      :href="getReportUrl(report_id)"
                      style="pointer-events: auto; margin-left: 0.5rem;">
                        rapport {{ report_id }}
                        <br />
                      </a>
                      <br/>
                    </template>
                  </details>
                </div>
              </div>
            </div>
            <footer class="card-footer"></footer>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>



<script>
export default {
  name: 'UniversityCards',
  data() {
    return {
      showCard: false, // Initialize to false, it will be toggled to true after mounted.
    };
  },
  mounted() {
    // Wait for the initial rendering and then show the card with a delay
    setTimeout(() => {
      this.showCard = true;
    }, 200); // Adjust the delay value as needed
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
    },
  },
  computed: {
    sortedUniversities() {
      // Sort the universities by their number_of_students property in descending order
      return this.universities.slice().sort((a, b) => b.number_of_students - a.number_of_students);
    },
    popupFilterUniversities() {
      // if popup_university is not undefined, return popup_university in a list
      return this.popup_university ? [this.popup_university] : this.sortedUniversities;
    },
  },
  watch: {
    universities: {
      deep: true,
      handler() {
        // When the universities prop changes, the animation will be triggered.
      },
    },
  },
  methods: {
    scaleUpCard(index) {
      const el = this.$el.querySelectorAll('.slide-card')[index];
      el.style.transition = 'transform 0.3s ease';
      el.style.transform = 'scale(1.007)';
    },
    resetCardScale(index) {
      const el = this.$el.querySelectorAll('.slide-card')[index];
      el.style.transition = 'transform 0.3s ease';
      el.style.transform = 'scale(1)';
    },
    getCategorizedReports(university) {
      const categorized = {};
      university.report_id_list.forEach((report) => {
        const year = report.year;
        if (!categorized[year]) {
          categorized[year] = [];
        }
        categorized[year].push(report.report_id);
      });
      return categorized;
    },
    getReportPluralSuffix(count) {
      return count > 1 ? "er" : "";
    },
    getReportUrl(report_id) {
      return `https://www.ntnu.no/studier/studier_i_utlandet/rapport/report_view.php?report_id=${report_id}&language=no`;
    },
  },
};
</script>


<style>
.container {
  display: flex;
}
</style>

<!-- :class="{ 'highlight-card': popup_university && popup_university.number_id === university.number_id }" -->
