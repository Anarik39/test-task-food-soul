<script setup lang="ts">
import { ref } from "vue";
import type { TTimeout } from "@/types/general";
import NominatimResults from "@/components/Nominatim/NominatimResults/NominatimResults.vue";
import { useNominatimStore } from "@/stores/nominatim";
import type { ISearchSuggestion } from "@/types/nominatim";

const props = defineProps<{
  searchValue: string
}>()

const emit = defineEmits<{
  (e: 'update:searchValue', value: string): void
}>()

const results = ref<ISearchSuggestion[]>([])
const timeout = ref<TTimeout>()

const changeValue = (event: Event) => {
  const value = event.target?.value || '';

  emit('update:searchValue', value);
}

const nominatimSuggestions = () => {
  clearTimeout(timeout.value);

  timeout.value = setTimeout(async ()=> {
    try {
      const data = await useNominatimStore().fetchSearch(props.searchValue)

      results.value = data || [];
    } catch (error) {
      if(error instanceof Error) {
        results.value = [];
      }
    }
  }, 350)
}
</script>

<template>
<label class="nominatim-search">
  <span>Поле поиска </span>

  <input :value="searchValue"
         placeholder="поиск"
         @input="changeValue"
         @keyup="nominatimSuggestions"
  >

  <nominatim-results :results="results" class="nominatim-search__results"/>
</label>
</template>

<style scoped lang="scss">
.nominatim-search__results {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid black;
}
</style>
