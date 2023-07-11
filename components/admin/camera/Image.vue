<template>
    <li>
        <h2 class="flex justify-between items-center">
            <span>{{ score }}</span>
            <div class="flex gap-x-2 text-base">
                <button type="button" @click="handleEdit">✏️</button>
                <button type="button" @click="handleDelete">❌</button>
            </div>
        </h2>
        <img
            :src="path || '/ari.png'"
            :alt="`${score}등 이미지`"
            class="mx-auto"
        />
    </li>
    <input type="file" class="hidden" ref="$input" @change="handleUpload" />
</template>

<script setup>
import {
    ref as storageRef,
    deleteObject,
    getStorage,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { useFirebaseStorage, useStorageFileUrl, useStorageFile } from "vuefire";
import { modalStore, dbStore } from "~/stores";
import { storeToRefs } from "pinia";

const props = defineProps({
    index: {
        default: 0,
        type: Number,
    },
    name: {
        default: "",
        type: String,
    },
});

const modal = modalStore();
const db = dbStore();
const { data } = storeToRefs(db);

const $input = ref();

const score = computed(() => props.index + 1);
const path = ref("");

const storage = useFirebaseStorage();

function seededRandom(time) {
    const x = Math.sin(time++) * 10000;
    return Math.floor((x - Math.floor(x)) * 10000000000000);
}

async function getImage(gift) {
    const image = storageRef(storage, gift);
    const { url, promise } = useStorageFileUrl(image);

    await promise.value;

    path.value = url.value;
}

function actionDelete() {
    const name = props.name;
    const image = storageRef(storage, name);

    deleteObject(image)
        .then(() => {
            path.value = "";
        })
        .catch((error) => alert(`에러! ${error}`));

    db.updateDB(
        "list",
        data.value.list.map((item) => (item === name ? "" : item)),
    );
}

function handleDelete() {
    modal.setModal(
        {
            name: "mdi:alert-circle",
            color: "red",
        },
        "삭제?",
        actionDelete,
    );
}

function handleEdit() {
    if (props.name) {
        // 이미 누가 먹은 사진일경우

        db.updateDB(
            "list",
            data.value.list.map((item) => (item === name ? "" : item)),
        );
    }

    $input.value.click();
}

function handleUpload(event) {
    let time = new Date().getTime();
    time = seededRandom(time);

    const file = event.target.files[0];
    const extension = file.name.split(".").at(-1);
    const name = `${time}.${extension}`;
    const image = storageRef(storage, `/${name}`);

    const metadata = {
        contentType: file.type,
    };

    const uploadTask = uploadBytesResumable(image, file, metadata);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log("Upload is " + progress + "% done");
        },
        (error) => {
            console.log("Upload failed:", error);
        },
        () => {
            // Handle successful uploads on complete
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                path.value = downloadURL;

                db.updateDB(
                    "list",
                    data.value.list.map((item, index) =>
                        index === 2 - props.index ? name : item,
                    ),
                );
            });
        },
    );
}

watch(props.name, (to, from) => {
    if (to !== "") {
        getImage(to);
    }
});

onBeforeMount(() => {
    getImage(props.name);
});
</script>

<style lang="scss"></style>
