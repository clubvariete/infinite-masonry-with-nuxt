export default {
  /*
   ** Deployment target
   ** Doc: https://nuxtjs.org/guides/features/deployment-targets
   */
  target: "static",
  /*
   ** Headers of the page
   ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
   */
  head: {
    title: "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  components: [
    "~/components/ui/card",
    "~/components/ui/typography",
    "~/components/svg",
  ],
  /*
   ** Storybook Config
   */
  storybook: {
    port: 4000,
    stories: ["~/components/**/*.stories.mdx"],
    webpackFinal(config) {
      return config;
    },
  },
  /*
   ** Nuxt.js modules
   ** Doc: https://nuxtjs.org/guides/configuration-glossary/configuration-modules
   */
  modules: ["@nuxt/content"],
  content: {
    // Disable for security reason on CodeSandBox
    liveEdit: true,
  },
  /*
   ** Build time modules
   */
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    configPath: "~/config/tailwind.config.js",
  },
  googleFonts: {
    families: {
      Roboto: true,
      "Roboto+Condensed": true,
    },
  purgeCSS: {    
    whitelist: ['dark-mode'],  
    },
  },
  /*
   ** Plugins to load before mounting the App
   ** Doc: https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: "~/plugins/vue-awesome" },
    { src: "~/plugins/vue-masonry-css", mode: "client" },
    { src: "~/plugins/vue-infinite-loading", mode: "client" },
    { src: "~/plugins/vue-aos", mode: "client" },
  ],
  /*
   ** Generate routes
   ** Add time between pages being generated to allow for any async functions to resolve
   */
  generate: {
    // choose to suit your project
    interval: 2000,
  },
  build: {
    transpile: [/vue-awesome/],
  },
};
