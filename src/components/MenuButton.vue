<template lang="html">
  <button class="btn" :class="{ 'btn--open': isOpen }">
    <svg class="svg svg--close" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="#626262"/></svg>

    <svg class="svg svg--open" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" fill="#626262"/></svg>
  </button>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn {
    background: none;
    border: none;

    display: block;
    width: 43px;
    height: 43px;

    position: relative;
    outline: none;

    @include mq($from: tablet) {
      display: none;
    }

    &--open {
      .svg--close {
        opacity: 0;
        transform: rotate(-180deg);
      }

      .svg--open {
        opacity: 1;
        transform: rotate(-180deg);
      }
    }
  }

  .svg {
    width: 30px;
    height: 30px;

    transition: transform 0.15s;

    position: absolute;
    top: calc(50% - 15px);
    left: calc(50% - 15px);

    &--open {
      opacity: 0;
    }
  }
</style>
