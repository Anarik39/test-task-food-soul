<script setup lang="ts">
import type { TSuggestion } from "@/types/nominatim";

interface IProps {
  item?: TSuggestion | null
}

withDefaults(defineProps<IProps>(), {
  item: null,
})
</script>

<template>
  <span>
    {{ item?.display_name }}
  </span>
</template>
