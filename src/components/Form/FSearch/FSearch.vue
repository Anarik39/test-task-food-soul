<script setup lang="ts">
import { useMainStore } from "@/stores/main";
import { ref } from "vue";
import type { TTimeout } from "@/types/general";
import type { TSuggestion } from "@/types/search";
import FSearchResults from "@/components/Form/FSearch/FSearchResults/FSearchResults.vue";

const results = ref<TSuggestion[]>([])
const timeout = ref<TTimeout>()
const querySearch = (e: Event) => {
  try {
    clearTimeout(timeout.value);

    const params = {
      q: e.target?.value || '',
      format: 'jsonv2'
    }

    timeout.value = setTimeout(async ()=> {
      const data = await useMainStore().get<TSuggestion[]>('https://nominatim.openstreetmap.org/search',  { params })

      results.value = data || [];
    }, 350)

  } catch (e: any) {
    console.log(e)
  }
}
</script>

<template>
<label class="search">
  <span>Поле поиска </span>

  <input @keyup="querySearch"
         placeholder="поиск"
  >

  <f-search-results :results="results" class="search__results"/>
</label>
</template>

<style scoped lang="scss">
.search__results {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid black;
}
</style>
