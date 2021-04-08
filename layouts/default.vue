<template  >
  <div class="bg-black">
    <div class="flex justify-center py-3 border-b-0">
    </div>
    <nuxt />
    <div class="flex justify-center py-5 border-t-0">
    </div>
  </div>
</template>
<style>
a {
  @apply px-2 text-center text-sm;
}
.nuxt-link-exact-active {
  @apply text-green-600;
}

/*global page transition*/
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>

<style scoped lang="scss">
img {
  transition: all ease 0.15s;
  opacity: 0;
  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
