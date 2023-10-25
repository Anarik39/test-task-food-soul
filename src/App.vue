<script setup lang="ts">
import UiCard from "@/components/Ui/UiCard.vue";
import NominatimSearch from "@/components/Nominatim/NominatimSearch.vue";
import {ref} from "vue";

const currentGeo = ref<string>('')
</script>

<template>
<div class="index-page">
  <div class="index-page__wrapper">
    <ui-card>
     <nominatim-search v-model:search-value="currentGeo" />
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
