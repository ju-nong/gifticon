// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/tailwindcss",
        "nuxt-vuefire",
        "@pinia/nuxt",
        "@nuxtjs/google-fonts",
        "@morev/vue-transitions/nuxt",
        "nuxt-icon",
    ],
    css: ["~/assets/css/main.scss"],
    app: {
        head: {
            htmlAttrs: {
                lang: "ko",
            },
        },
    },
    vuefire: {
        auth: true,
        config: {
            apiKey: "AIzaSyDs6VbQvzrbg2fv6Wm-2qN_riLQbgIUqo0",
            authDomain: "gifticon-55f87.firebaseapp.com",
            databaseURL: "https://gifticon-55f87-default-rtdb.firebaseio.com",
            projectId: "gifticon-55f87",
            storageBucket: "gifticon-55f87.appspot.com",
            messagingSenderId: "790530841582",
            appId: "1:790530841582:web:2ab543f4f9ca088e824cff",
            measurementId: "G-TZLQ37YLET",
        },
    },
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            "defineStore", // import { defineStore } from 'pinia'
            ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
    googleFonts: {
        families: {
            "Nanum+Gothic": true,
            download: true,
        },
    },
});
