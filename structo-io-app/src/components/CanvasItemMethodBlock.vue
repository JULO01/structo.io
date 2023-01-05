<template>
  <div class="method-item-container">
    <div class="item-statement">
      <BaseTextInput v-model:text="statementText" />
    </div>
    <div class="item-childzone">
      <div class="example-child"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import BaseTextInput from './BaseTextInput.vue'

const statementText = ref('Methodname')
</script>
<style scoped>
.method-item-container {
  min-width: initial;
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
}
.item-statement {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*border-radius: 10px;*/
  border: 2px solid var(--color-text-active);
  min-width: var(--min-width-editor-item);
  min-height: var(--min-height-editor-argument);
}
.item-statement::before {
  content: '';
  position: absolute;
  left: 10%;
  border-left: 2px solid var(--color-text-active);
  height: 100%;
}
.item-statement::after {
  content: '';
  position: absolute;
  left: 90%;
  border-left: 2px solid var(--color-text-active);
  height: 100%;
}
.item-childzone {
  border: none;
  /*TODO: etwas für dynamische childzones überlegen*/
}
</style>
