<template>
    <h1>
        Utveksling
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
</template>



<script>

export default {
name: 'UniversityCards',
components: {
}
}
</script>