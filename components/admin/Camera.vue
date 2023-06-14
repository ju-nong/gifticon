<template>
    <div class="admin-container-main-camera">
        <ul>
            <li v-for="(item, index) in list" :key="index">
                <h2>{{ index + 1 }}등</h2>
                <!-- :src="getStorageImageURL(item)" -->
                <!-- :src="`https://firebasestorage.googleapis.com/v0/b/gifticon-55f87.appspot.com/o/${item}?alt=media&token=a2ec5714-0333-4d6d-adf3-b91a58572694`" -->
                <img
                    :alt="`${index + 1}등 이미지`"
                    @click="handleDelete(item)"
                />
            </li>
        </ul>
    </div>
</template>

<script setup>
import { dbStore } from "~/stores";
import { storeToRefs } from "pinia";
import { ref as storageRef, deleteObject, getStorage } from "firebase/storage";
import { useFirebaseStorage, useStorageFileUrl, useStorageFile } from "vuefire";

const db = dbStore();
const { data } = storeToRefs(db);

// const list = computed(() => data.value?.list?.slice()?.reverse());
const list = ref([]);

function getStorageImageURL(name) {
    const storage = useFirebaseStorage();

    const image = storageRef(storage, name);
    const { url } = useStorageFileUrl(image);

    return url.value;
}

function handleDelete(name) {
    const tStorage = getStorage();
    const image = storageRef(tStorage, name);

    deleteObject(image)
        .then(() => {
            console.log("success");
        })
        .catch((error) => {
            console.log(error);
        });
}

onMounted(() => {
    console.log(data.value.list);
});
</script>

<style lang="scss">
.admin-container-main-camera {
    > ul {
        > li {
            padding: 8px;

            &:not(:first-child) {
                border-top: 1px solid #eee;
            }

            h2 {
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 8px;
            }

            img {
                cursor: pointer;
            }
        }
    }
}
</style>
