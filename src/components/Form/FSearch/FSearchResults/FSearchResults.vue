<script setup lang="ts">
import type { TSuggestion } from "@/types/search";
import FSearchResultsItem from "@/components/Form/FSearch/FSearchResults/FSearchResultsItem.vue";

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
        <f-search-results-item :item="item"/>
      </li>
    </ul>
  </div>
</template>
