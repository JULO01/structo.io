<template>
  <div class="statement-item-container">
    <div class="item-statement">
      <BaseTextInput v-model:text="statementText" />
    </div>
    <div class="item-childzone"></div>
  </div>
</template>
<script setup lang="ts">
import BaseTextInput from './BaseTextInput.vue'
import { ref } from 'vue'

const statementText = ref('Statement')
</script>
<style scoped>
.statement-item-container {
  min-width: initial;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
}
.item-statement {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid var(--color-text-active);
  min-width: var(--min-width-editor-item);
  min-height: var(--min-height-editor-argument);
}

.item-childzone {
  border: none;
}
</style>
