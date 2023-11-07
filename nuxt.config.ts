const {
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    MEASUREMENT_ID,
} = process.env;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // runtimeConfig
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
            apiKey: API_KEY,
            authDomain: AUTH_DOMAIN,
            databaseURL: DATABASE_URL,
            projectId: PROJECT_ID,
            storageBucket: STORAGE_BUCKET,
            messagingSenderId: MESSAGING_SENDER_ID,
            appId: APP_ID,
            measurementId: MEASUREMENT_ID,
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
