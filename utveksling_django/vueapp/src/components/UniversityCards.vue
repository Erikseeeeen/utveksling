<template>
  <div>
    <transition-group name="list" tag="div" @before-enter="beforeEnter" @enter="enter">
      <div
        v-for="(university, index) in sortedUniversities"
        :key="university.number_id"
        :data-index="index"
        @mouseover="scaleUpCard(index)"
        @mouseleave="resetCardScale(index)"
      >
        <div class="slide-card" v-show="showCard">
          <div v-if="university.number_of_students > 0" class="card" style="max-width: 1000px; margin: 0 auto;">
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">{{ university.name }}</h2>
                  <p class="subtitle is-6">{{ university.city }}, {{ university.country }}</p>

                  <transition name="fade" mode="out-in">
                    <span v-if="last_input_program !== null" :key="last_input_program">
                      <p class="subtitle is-6 is-pulled-right">
                        rapport{{ getReportPluralSuffix(university.number_of_students) }} fra <br />
                        {{ last_input_program }}
                      </p>
                      <p class="title is-1 is-pulled-right" style="margin-right: 0.4rem;">{{ university.number_of_students }}</p>
                    </span>
                  </transition>
                  
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
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = 'translateX(30px)';
    },
    enter(el, done) {
      const delay = el.dataset.index * 100; // Add a dataset index to the div
      setTimeout(() => {
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        el.style.opacity = 1;
        el.style.transform = 'translateX(0)';
        el.addEventListener('transitionend', done);
      }, delay);
    },
    // (Existing methods remain the same)
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
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;

}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
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
