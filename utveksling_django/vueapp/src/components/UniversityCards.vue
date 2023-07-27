<template>
<div>
    <div v-for="university in this.universities" :key="university.id">
    <div v-if="getNumberOfStudents(university) > 0" class="card" style="max-width: 1000px; margin: 0 auto;">
        {{console.log(university)}}
        <div class="card-content">
        <div class="media">
            <div class="media-content">
            <h2 class="title is-4">{{ university.name }}</h2>
            <p class="subtitle is-6">{{ university.city }}, {{ university.country }}</p>
            <p class="subtitle is-6 is-pulled-right clickable">
                rapport{{ getReportPluralSuffix(getNumberOfStudents(university)) }} fra <br />
                {{ selected_program }}
            </p>
            <p class="title is-1 is-pulled-right" style="margin-right: 0.4rem;">{{ getNumberOfStudents(university) }}</p>

            <details>
                <summary>Rapporter</summary>
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
</template>

<script>
export default {
name: 'UniversityCards',
props: {
    universities: {
    type: Array,
    required: true,
    },
    selected_program: {
    type: String,
    required: true,
    },
},
methods: {
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

<style scoped>
    .card-content .clickable {
        cursor: pointer;
    }
</style>
