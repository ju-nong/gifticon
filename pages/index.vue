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
                v-model.trim="vName"
            />
        </label>
        <label>
            <p>생년월일</p>
            <input
                type="text"
                placeholder="YYMMDD"
                v-model.trim="vDate"
                @keyup.enter="handleUse"
            />
        </label>
        <button class="primary-button mt-2" @click="handleLogin">드가자</button>
    </div>
</template>

<script setup>
import { userStore, dbStore, snackbarStore } from "~/stores";
import { storeToRefs } from "pinia";
import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useDocument } from "vuefire";

const router = useRouter();

const user = userStore();
const { login } = storeToRefs(user);

const db = dbStore();
const { getData: data } = storeToRefs(db);

const vName = ref();
const vDate = ref();

const snackbar = snackbarStore();

const checkEmpty = () => vName.value === "" || vDate.value === "";

function checkData() {
    const isEmpty = checkEmpty();

    if (isEmpty) {
        return {
            type: "danger",
            message: "이름이랑 생년월일 다 적어라 ⌨️",
        };
    }

    const { birthday, name, login } = data.value;

    if (vName.value === name && vDate.value === birthday) {
        if (!login) {
            return { type: "check", message: "🎉 와 생일 축하해! 🎉" };
        } else {
            return { type: "danger", message: "이미 한 번 받은거임 ✋" };
        }
    } else {
        return { type: "danger", message: "너 생일 아니잖아 🔫" };
    }
}

async function handleLogin() {
    const { type, message } = checkData();

    snackbar.addSnackbar({
        type,
        message,
    });

    if (type === "check") {
        user.setLogin(true);

        // await db.updateDB("login", true);

        router.replace("/intro");
    }
}

onMounted(() => {});
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
