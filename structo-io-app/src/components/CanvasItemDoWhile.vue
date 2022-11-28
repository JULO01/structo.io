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
.item-container {
  border-radius: 10px;
  min-height: 18vh;
  min-width: 22vw;
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
}
.item-childzone {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -2px;
  margin-right: -2px;
  height: fit-content;
  min-height: 80%;
  align-self: flex-end;
  width: fit-content;
  min-width: 90%;
  margin-left: 2rem;

  border-radius: 10px;
}
.item-argument {
  min-height: 2rem;
  height: fit-content;
}
.example-child {
  width: 10rem;
  height: 10rem;
  border: 1px solid cyan;
}
</style>
