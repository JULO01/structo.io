<template>
  <div class="sidebar-item-container">
    <div class="item" ref="elementToMove" draggable="true" @dragstart="handleDragStart" @touchstart.prevent="handleTouchStart" @touchmove.prevent="handleTouchMove" @touchend.prevent="handleTouchEnd">
      <img draggable="false" class="item-icon" :src="`src/assets/svg/shapes/${props.type + '-' + colorMode}.svg`" alt="" />
      <!-- <img class="item-icon" style="height: 80%; width: 80%; fill: red" :src="`src/assets/svg/shapes/IfRectangle.svg`" alt="Test, ich bin daTODOj" />-->
    </div>
    <div ref="itemTitle" class="item-title">{{ props.type }}</div>
  </div>
</template>

<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed, ref } from 'vue'
import { NodeType } from '../types/nodes'

type Props = {
  type: NodeType
}

const props = defineProps<Props>()
const elementToMove = ref<HTMLElement>()
const itemTitle = ref<HTMLElement>()

const isDark = useDark()

const colorMode = computed(() => {
  return isDark.value ? 'dark' : 'light'
})

let initialX = ''
let initialY = ''

function handleDragStart(event: DragEvent) {
  event.dataTransfer?.setData('text/plain', props.type)
}

function handleTouchStart(event: any) {
  if (!elementToMove.value) return

  initialX = elementToMove.value.style.left
  initialY = elementToMove.value.style.top

  elementToMove.value.style.position = 'fixed'

  if (!itemTitle.value) return
  itemTitle.value.classList.add('hidden')
}

function handleTouchMove(event: any) {
  if (!elementToMove.value) return
  elementToMove.value.style.transitionDuration = 'initial'

  const touchLocation = event.targetTouches[0]
  elementToMove.value.style.left = touchLocation.pageX - 56 + 'px'
  elementToMove.value.style.top = touchLocation.pageY - 32 + 'px'
}

function handleTouchEnd(event: any) {
  if (!elementToMove.value) return

  elementToMove.value.style.transitionDuration = '300ms'
  elementToMove.value.style.position = ''
  elementToMove.value.style.left = initialX
  elementToMove.value.style.top = initialY

  if (!itemTitle.value) return
  itemTitle.value.classList.remove('')
}
</script>
<style scoped>
.sidebar-item-container {
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
  display: flex;
  justify-content: center;
  align-items: center;
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

.item-icon {
  max-width: 80%;
  max-height: 80%;
}
.hidden {
  display: none;
}
</style>
