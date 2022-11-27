<template>
  <div class="item-container">
    <div class="item" ref="elementToMove" draggable="true" @touchstart.prevent="handleTouchStart" @touchmove.prevent="handleTouchMove" @touchend.prevent="handleTouchEnd"></div>
    <div class="item-title">do-while</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const elementToMove = ref<HTMLElement>()
let initialX = ''
let initialY = ''

function handleTouchStart(event: any) {
  if (!elementToMove.value) return
  initialX = elementToMove.value.style.left
  initialY = elementToMove.value.style.top

  elementToMove.value.style.position = 'fixed'
  elementToMove.value.style.transitionDuration = 'initial'
}

function handleTouchMove(event: any) {
  if (!elementToMove.value) return

  const touchLocation = event.targetTouches[0]
  elementToMove.value.style.left = touchLocation.pageX - 56 + 'px'
  elementToMove.value.style.top = touchLocation.pageY - 32 + 'px'
}

function handleTouchEnd(event: any) {
  if (!elementToMove.value) return

  elementToMove.value.style.position = 'initial'
  elementToMove.value.style.left = initialX
  elementToMove.value.style.top = initialY
}

/*function handleTouchStart(event: any) {
  if (!elementToMove.value) return
  console.log(event)
}*/

/*function handleTouchMove(event: any) {
  if (!elementToMove.value) return
  if (event.clientX) {
    // mousemove
    moving.style.left = event.clientX - moving.clientWidth / 2
    moving.style.top = event.clientY - moving.clientHeight / 2
  } else {
    // touchmove - assuming a single touchpoint
    moving.style.left = event.changedTouches[0].clientX - moving.clientWidth / 2
    moving.style.top = event.changedTouches[0].clientY - moving.clientHeight / 2
  }
}*/
</script>
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
