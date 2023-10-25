<script setup lang="ts">
import type { TSuggestion } from "@/types/nominatim";
import NominatimResultsItem from "@/components/Nominatim/NominatimResults/NominatimResultsItem.vue";

interface IProps {
  results?: TSuggestion[]
}

withDefaults(defineProps<IProps>(), {
  results: () => [],
})
</script>

<template>
  <div v-if="results?.length">
    <h4>Результат поиска:</h4>

    <ul>
      <li v-for="item in results"
          :key="item.osm_id"
      >
        <nominatim-results-item :item="item"/>
      </li>
    </ul>
  </div>
</template>
