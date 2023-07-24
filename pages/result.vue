<template>
    <h1 class="title">시험 결과</h1>
    <div class="flex flex-col gap-y-2 py-4">
        <p class="text-lg">
            오! 너의 점수는 <span class="text-2xl font-bold">{{ score }}</span
            >점이야
        </p>
        <p class="pt-2">문제 푸느라 수고했어</p>
        <p>나중에 내가 얼마나 맞혔는지 확인해볼게</p>
        <p class="pb-6">어 생일 축하하고 여기 생일선물 가져가</p>
        <button class="primary-button" @click="handlePick">🎁 보기</button>
    </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { examStore, userStore, dbStore } from "~/stores";

const exam = examStore();
const { data } = storeToRefs(exam);

const score = ref();

const user = userStore();

const db = dbStore();

const router = useRouter();

function handlePick() {
    const cloneScore = score.value;

    if (cloneScore <= 33) {
        user.setPick(0);
    } else if (cloneScore <= 66) {
        user.setPick(1);
    } else {
        user.setPick(2);
    }

    router.replace("/pick");
}

onBeforeMount(() => {
    const examples = data.value.item;
    let answerCount = 0;

    for (let i = 0; i < examples.length; i++) {
        const { answer, choice } = examples[i];

        if (answer === choice) {
            answerCount++;
        }
    }

    score.value = Math.round((answerCount / examples.length) * 100);
    db.updateDB("score", score.value);
    exam.updateDB("item", examples);
});
</script>

<style lang="scss"></style>
