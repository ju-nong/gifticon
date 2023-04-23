<template>
    <ExamHeader />
    <div>어서오고{{ step }}</div>
</template>

<script setup>
const route = useRoute();
const step = computed(() => route.params.step);

console.log(route.params.step);
</script>

<style lang="scss"></style>
