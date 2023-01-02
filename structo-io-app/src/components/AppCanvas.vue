<template>
  <div class="canvas-container">
    <div class="canvas-sidebar">
      <CanvasSidebarItem :type="'if-else'" />
      <CanvasSidebarItem :type="'do-while'" />
      <CanvasSidebarItem :type="'while-do'" />
      <CanvasSidebarItem :type="'statement'" />
      <CanvasSidebarItem :type="'method-block'" />
      <CanvasSidebarItem :type="'switch-case'" />
    </div>
    <div class="canvas" :class="{ 'childzone-shown': showDropHighlights }" @drop.prevent="handleDrop" @dragenter.prevent="handleDragEnter" @dragleave="handleDragLeave" @dragover.prevent>
      <component v-if="rootElementType != null" :is="rootElement" />
      <BaseEmptyContent v-if="rootElementType == null && !store.$state.activeDragging" url="src/assets/svg/drag.svg" display-text="Drag a node inside to get started!" alt="TODO: entfern mich" />
      <!--<CanvasItemIfElse /> -->
      <!--Todo: wrapper for all elements-->
      <!-- <CanvasItemSwitchCase /> -->
      <!--<CanvasItemStatement />-->
      <!--<CanvasItemMethodBlock />-->
      <!--<CanvasItemDoWhile /> cleaned up -->
      <!--<CanvasItemWhileDo /> cleaned up -->
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseEmptyContent from './BaseEmptyContent.vue'
import CanvasItemDoWhile from './CanvasItemDoWhile.vue'
import BaseTextInput from './BaseTextInput.vue'
import CanvasItemWhileDo from './CanvasItemWhileDo.vue'
import CanvasItemSwitchCase from './CanvasItemSwitchCase.vue'
import CanvasItemIfElse from './CanvasItemIfElse.vue'
import CanvasSidebarItem from './CanvasSidebarItem.vue'
import CanvasItemStatement from './CanvasItemStatement.vue'
import CanvasItemMethodBlock from './CanvasItemMethodBlock.vue'
import { ref, computed } from 'vue'
import { useGlobalStore } from '../stores/globalStore'
import { Node, NodeType } from '../types/nodes'

const store = useGlobalStore()

const canvasItems = {
  'do-while': CanvasItemDoWhile,
  'method-block': CanvasItemMethodBlock,
  statement: CanvasItemStatement,
  'switch-case': CanvasItemSwitchCase,
  'while-do': CanvasItemWhileDo,
  'if-else': CanvasItemIfElse,
}

const rootElementType = ref<NodeType | null>(null)
const rootElement = computed(() => {
  if (!rootElementType.value) return null
  return canvasItems[rootElementType.value]
})

const showDropHighlights = computed(() => {
  return rootElementType.value == null && store.$state.activeDragging
})

function handleDragEnter(event: DragEvent) {
  //TODO: highlight canvas background
  if (!showDropHighlights.value) return
  const target = event.target
  target.classList.add('childzone-dragover')
  return
}

function handleDragLeave(event: DragEvent) {
  if (!showDropHighlights.value) return
  const target = event.target
  target.classList.remove('childzone-dragover')
  //TODO: highlight canvas background
  return
}

function handleDrop(event: DragEvent) {
  if (rootElementType.value != null) return
  const childType = event.dataTransfer?.getData('text/plain') as NodeType
  rootElementType.value = childType
}
</script>
<style scoped>
.canvas {
  background-color: var(--editor-canvas-background);
}
.canvas-container {
  --padding-horizontal: clamp(1.5rem, 3vw, 2.5rem);
  --padding-horizontal-test: 1.5vw;

  position: relative;
  padding-left: var(--padding-horizontal);
  padding-right: var(--padding-horizontal);
  display: grid;
  flex-flow: column;
  height: 100%;
}

.canvas {
  border-radius: 25px;
  box-shadow: var(--box-shadow-200);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.canvas-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: absolute;
  top: 0;
  bottom: 0;
}
.childzone-shown {
  background-color: rgba(var(--color-primary-500), 0.1);
}

.childzone-dragover {
  background-color: rgba(var(--color-primary-500), 0.3);
}
</style>
