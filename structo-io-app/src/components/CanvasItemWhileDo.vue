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
  min-height: 10vh;
  min-width: 15vw;
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
  min-height: 80%;
  align-self: flex-end;
  width: fit-content;
  min-width: 80%;
  margin-left: 2rem;

  border-radius: 10px;
}
.item-argument {
  min-height: 2rem;
  height: fit-content;
}
.example-child {
  width: 60rem;
  height: 30rem;
  border: 1px solid cyan;
}
</style>
