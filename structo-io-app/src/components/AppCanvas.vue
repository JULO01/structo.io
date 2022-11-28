<template>
  <div class="canvas-container">
    <div class="canvas-sidebar">
      <CanvasSidebarItem />
      <CanvasSidebarItem />
      <CanvasSidebarItem />
      <CanvasSidebarItem />
      <CanvasSidebarItem />
      <CanvasSidebarItem />
    </div>
    <div class="canvas">
      <BaseEmptyContent v-if="false" url="src/assets/svg/drag.svg" display-text="Drag a node inside to get started!" alt="TODO: entfern mich" />
      <CanvasItemWhileDo />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseEmptyContent from './BaseEmptyContent.vue'
import CanvasItemWhileDo from './CanvasItemWhileDo.vue'
import CanvasSidebarItem from './CanvasSidebarItem.vue'
</script>
<style scoped>
html:not(.dark) .canvas {
  background-color: var(--editor-canvas-background-light);
}
html.dark .canvas {
  background-color: var(--editor-canvas-background-dark);
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
</style>
