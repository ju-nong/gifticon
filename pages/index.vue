<template>
    <h1 class="title">
        어 그래 누군진 모르겠지만<br />
        생일 축하한다🎉
    </h1>
    <div class="form-container flex flex-col p-2 mt-2">
        <label>
            <p>이름</p>
            <input
                type="text"
                placeholder="그래 니 이름 적어라"
                v-model.trim="name"
            />
        </label>
        <label>
            <p>생년월일</p>
            <input type="text" placeholder="YYMMDD" v-model.trim="date" />
        </label>
        <button
            class="p-2 bg-[#1A88E9] text-xl font-semibold text-white rounded-lg mt-2"
            @click="handleStart"
        >
            드가자
        </button>
    </div>
</template>

<script setup>
import { userStore, dbStore, snackbarStore } from "~/stores";
import { storeToRefs } from "pinia";
import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

const user = userStore();
const { block } = storeToRefs(user);

const db = dbStore();
const { getData: data } = storeToRefs(db);

const name = ref();
const date = ref();

const snackbar = snackbarStore();

async function handleStart() {
    // console.log(name.value);
    // console.log(date.value);

    snackbar.addSnackbar({
        type: "check",
        message: "오 ss생일 축하해",
    });
    // await db.setUse();
}

onMounted(() => {
    if (block.value) {
        user.setBlock(false);
    }
});
</script>

<style lang="scss">
.form-container {
    label {
        padding-bottom: 0.5rem;
        p {
            padding: 0.5rem 0px;
            font-weight: 600;
        }
        input {
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid #ccc;
        }
    }

    button {
        box-shadow: 8px 8px 20px #d1e7f9, -8px -8px 20px #fff;
    }
}
</style>
