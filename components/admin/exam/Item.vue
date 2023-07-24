<template>
    <h1>
        <span>{{ props.index + 1 }}.</span>
        <div class="exam-input" contenteditable="true" ref="$question">{{ props.exam.question }}</div>
    </h1>
    <ul>
        <li v-for="(exam, index) in props.exam.examples" :key="index">
            <span>{{ index + 1 }}</span>
            <div class="exam-input" contenteditable="true" ref="$exams">{{ exam }}</div>
        </li>
    </ul>
    <div class="flex justify-between">
        <p>정답 
            <div class="exam-input" contenteditable="true" ref="$answer">{{props.exam.answer + 1}}</div>
        </p>
        <button @click="handleUpdateExam">✔️</button>
    </div>
</template>

<script setup>
const props = defineProps({
    exam: Object,
    index: Number,
});

const emits = defineEmits(['handleUpdateExam'])

const $question = ref();
const $exams = ref();
const $answer = ref();

function handleUpdateExam(){
    const config = {};

    const exams = $exams.value;
    const examples = [];
    
    config.question = $question.value.innerText;

    for(let i = 0; i < exams.length; i++){
        examples.push(exams[i].innerText);
    }
    config.examples = examples;

    config.answer = Number($answer.value.innerText) - 1;


    emits('handleUpdateExam', {index:props.index, config});
}
</script>

<style lang="scss">
.admin-container-main-exam {
    > ul {
        > li {
            display: flex;
            flex-direction: column;
            &:not(&:last-child) {
                border-bottom: 1px solid #eee;
            }

            &:not(&:first-child) {
                padding-top: 0.5rem;
            }

            .exam-input {
                display: inline;
                outline: none;
            }

            > h1 {
                > span {
                    color: rgb(26 136 233);
                    font-weight: 700;
                    font-size: 18px;
                    margin-right: 0.25rem;
                }
            }
            > ul {
                padding: 0.5rem 0 0.5rem 1rem;
                > li {
                    span {
                        margin-right: 0.25rem;
                    }
                }
            }
            > p {
                padding: 0 0 0.5rem 0.5rem;
            }
        }
    }
}
</style>
