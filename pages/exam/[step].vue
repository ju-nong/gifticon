<template>
    <ExamHeader />
    <ul class="question-container flex flex-col gap-y-8 py-6">
        <li
            v-for="(item, index) in data.item.slice(step * 4, (step + 1) * 4)"
            :key="index"
        >
            <p>{{ item.question }}</p>
            <ul class="flex flex-col gap-y-2 pt-2">
                <li
                    v-for="(example, exampleIndex) in item.examples"
                    :key="exampleIndex"
                    class="pl-2"
                >
                    <button
                        class="text-sm"
                        @click="handleSetChoice(index, exampleIndex)"
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
        v-if="step === 2"
        class="primary-button"
        @click="router.replace('/result')"
    >
        제출
    </button>
    <button
        v-else
        class="primary-button"
        @click="router.replace(`/exam/${step + 2}`)"
    >
        다음
    </button>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { examStore } from "~/stores";

const exam = examStore();
const { step, data } = storeToRefs(exam);

const router = useRouter();
const route = useRoute();

const handleSetChoice = (index, choice) =>
    exam.setChoice(step.value * 4 + index, choice);

onMounted(() => {
    console.log(route.params.step);
    exam.setStep(route.params.step - 1);
});
</script>

<style lang="scss"></style>
