<script setup lang="ts">
import UiCard from "@/components/Ui/UiCard.vue";
import FSearch from "@/components/Form/FSearch/FSearch.vue";
</script>

<template>
<div class="index-page">
  <div class="index-page__wrapper">
    <ui-card>
      <f-search/>
    </ui-card>
  </div>
</div>
</template>

<style scoped lang="scss">
.index-page {
  padding: 20px;
}

.index-page__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
