<template>
  <div class="item-container">
    <div class="item-argument"></div>
    <div class="item-childzone">
      <div class="example-child"></div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.item-container {
  border-radius: 10px;
  min-height: var(--min-height-editor-item);
  min-width: var(--min-width-editor-item);
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
}
html:not(.dark) .item-container {
  border: 2px solid var(--color-text-active-light);
}
html:not(.dark) .item-childzone {
  border: 2px solid var(--color-text-active-light);
}
html.dark .item-container {
  border: 2px solid var(--color-text-active-dark);
}
html.dark .item-childzone {
  border: 2px solid var(--color-text-active-dark);
}
html.dark .item-childzone:hover {
  border: 2px solid var(--color-primary);
}
html:not(.dark) .item-childzone:hover {
  border: 2px solid var(--color-primary);
}

.item-childzone {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: -2px;
  margin-right: -2px;
  height: fit-content;
  min-height: var(--min-gtheight-editor-item-childzone);
  align-self: flex-end;
  width: fit-content;
  min-width: 80%;
  margin-left: 2rem;
  margin-top: auto;

  border-radius: 10px;
}
.item-argument {
  min-height: var(--min-height-editor-argument);
  height: fit-content;
}
.example-child {
  width: 10rem;
  height: 3rem;
  border: 1px solid cyan;
}
</style>
