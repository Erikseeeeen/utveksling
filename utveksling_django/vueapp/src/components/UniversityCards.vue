<template>
  <div>
    <transition-group name="list" tag="div">
      <div v-for="university in sortedUniversities" :key="university.number_id">
        <div class="slide-card"> <!-- Wrap the card content with a container div -->
          <div v-if="getNumberOfStudents(university) > 0" class="card" style="max-width: 1000px; margin: 0 auto;">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">{{ university.name }}</h2>
                  <p class="subtitle is-6">{{ university.city }}, {{ university.country }}</p>

                  <p class="subtitle is-6 is-pulled-right">
                    rapport{{ getReportPluralSuffix(getNumberOfStudents(university)) }} fra <br />
                    {{ last_input_program }}
                  </p>
                  <p class="title is-1 is-pulled-right" style="margin-right: 0.4rem;">{{ getNumberOfStudents(university) }}</p>
                  
                  <details>
                    <summary>
                        <span style="display: inline-block; cursor: pointer;">Rapporter</span>
                    </summary>
                    <p>
                    <a v-for="report_id in getReportIdList(university)" :key="report_id" :href="getReportUrl(report_id)">
                        rapport {{ report_id }}
                        <br />
                    </a>
                    <br />
                    </p>
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
  props: {
    universities: {
      type: Array,
      required: true,
    },
    last_input_program: {
      type: String,
      required: true,
    },
  },
  computed: {
    sortedUniversities() {
      // Sort the universities by their number_of_students property in descending order
      return this.universities.slice().sort((a, b) => b.number_of_students - a.number_of_students);
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
    // (Existing methods remain the same)
    getNumberOfStudents(university) {
      return university.number_of_students || 0;
    },
    getReportIdList(university) {
      return university.report_id_list || [];
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
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
