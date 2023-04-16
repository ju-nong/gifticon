<template>
    <div>어서오고</div>
    <button @click="firstUpdate">업데이트</button>
</template>
<script setup>
import { userStore } from "~/stores/user";
import { getFirestore, collection, doc, updateDoc } from "@firebase/firestore";
import { useCollection, useDocument } from "vuefire";

const db = getFirestore();

const docs = doc(collection(db, "gifticon"), "aE9hnKqUPt5bp757ycQg");
const gifticon = useDocument(docs);

console.log(gifticon.value.first);

async function firstUpdate() {
    await updateDoc(docs, { first: false });
    console.log(gifticon.value.first);
}
</script>
