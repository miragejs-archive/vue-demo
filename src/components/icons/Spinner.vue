<template lang="html">
  <svg
    :class="iconClass"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    version="1.1"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    xml:space="preserve"
  >
    <circle cx="50" cy="20" r="10" />
    <circle cx="28.8" cy="28.8" r="9" />
    <circle cx="20" cy="50" r="8" />
    <circle cx="28.8" cy="71.2" r="7" />
    <circle cx="50" cy="80" r="6" />
    <circle cx="71.2" cy="71.2" r="5" />
    <circle cx="80" cy="50" r="4" />
    <circle cx="71.2" cy="28.8" r="3" />
  </svg>
</template>

<script>
export default {
  props: ["iconClass"]
};
</script>
