<template>
    <div>{{ user.isFirst ? "처음이다" : "아니다" }}</div>
</template>
<script setup>
import { userStore } from "~/stores/user";
import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useCollection, useDocument } from "vuefire";

const user = userStore();

const db = getFirestore();
const docs = doc(collection(db, "gifticon"), "aE9hnKqUPt5bp757ycQg");
const gifticon = useDocument(docs);

onMounted(() => {
    const { first } = gifticon.value;

    user.setFirst(first);

    updateDoc(docs, { first: !first });
});
</script>
