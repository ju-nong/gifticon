<template>
    <ExamHeader />
    <ul class="question-container flex flex-col gap-y-8 py-6">
        <li v-for="(item, index) in config[step]" :key="index">
            <p>{{ item.question }}</p>
            <ul class="flex flex-col gap-y-2 pt-2">
                <li
                    v-for="(example, exampleIndex) in item.examples"
                    :key="exampleIndex"
                    class="pl-2"
                >
                    <button
                        class="text-sm"
                        @click="choice(index, exampleIndex)"
                    >
                        <Icon
                            :name="
                                item.choice === exampleIndex
                                    ? 'ic:round-radio-button-checked'
                                    : 'ic:round-radio-button-unchecked'
                            "
                            class="mr-1"
                        />
                        {{ example }}
                    </button>
                </li>
            </ul>
        </li>
    </ul>
    <button
        v-if="step === config.length - 1"
        class="primary-button"
        @click="router.replace('/result')"
    >
        제출
    </button>
    <button v-else class="primary-button" @click="nextStep">다음</button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { examStore } from "~/stores";

const exam = examStore();
const { step, config } = storeToRefs(exam);

const router = useRouter();
const route = useRoute();

function choice(question, example) {
    exam.setAnswer(step.value, question, example);
}

function nextStep() {
    router.replace(`/exam/${step.value + 2}`);
}

onMounted(() => {
    exam.setStep(route.params.step - 1);
});
</script>

<style lang="scss"></style>
