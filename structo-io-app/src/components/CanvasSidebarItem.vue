<template>
  <div class="item-container">
    <div class="item" draggable="true"></div>
    <div class="item-title">do-while</div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.item-container {
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}
html:not(.dark) .item {
  background-color: var(--editor-tool-background-light);
}

html.dark .item {
  background-color: var(--editor-tool-background-dark);
}

.item {
  width: 7rem;
  height: 4rem;
  border-radius: 0.7rem;
  cursor: pointer;

  box-shadow: var(--box-shadow-400);
  transition-duration: 300ms;
}

.item:hover {
  border: 3px solid rgb(var(--color-primary-500));
  box-shadow: var(--box-shadow-600);

  width: 8.75rem;
  height: 5rem;
}

.item-title {
  align-self: center;
  font-size: var(--fs-editor-tool-item);
}
</style>
