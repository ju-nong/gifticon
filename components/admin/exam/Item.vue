<template>
    <li>
        <h1>
            <span>{{ props.index + 1 }}.</span>
            <input type="text" v-model="$question" />
        </h1>
        <ul>
            <li v-for="(_, index) in $exams" :key="index">
                <span>{{ index + 1 }}</span>
                <input type="text" v-model="$exams[index]" />
            </li>
        </ul>
        <p>정답 <input type="tel" v-model="$answer" /></p>
    </li>
</template>

<script setup>
const props = defineProps({
    exam: Object,
    index: Number,
});

const $question = ref(props.exam.question);
const $exams = ref(props.exam.examples);
const $answer = ref(props.exam.answer);

watch(
    $exams,
    (to, from) => {
        console.log(to);
    },
    { deep: true },
);
</script>

<style lang="scss"></style>
