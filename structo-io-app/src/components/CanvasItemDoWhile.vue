<template>
  <div class="item-container">
    <div class="item-childzone">
      <div class="example-child"></div>
    </div>
    <div class="item-argument"></div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped>
.item-container {
  border-radius: 10px;
  min-width: var(--min-width-editor-item);
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  padding-left: 1.5rem;
}
.item-childzone {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -1px;
  margin-right: -2px;
  min-height: var(--min-height-editor-childzone);
  align-self: flex-end;
  width: fit-content;
  min-width: 100%;
  border-radius: 10px;
}
.item-argument {
  min-height: var(--min-height-editor-argument);
  height: fit-content;
}
</style>
