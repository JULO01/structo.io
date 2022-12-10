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
    <div class="canvas">
      <BaseEmptyContent v-if="false" url="src/assets/svg/drag.svg" display-text="Drag a node inside to get started!" alt="TODO: entfern mich" />
      <!-- <CanvasItemSwitchCase /> -->
      <!--<CanvasItemStatement />-->
      <!--<CanvasItemMethodBlock />-->
      <!--<CanvasItemDoWhile /> cleaned up -->
      <!--<CanvasItemWhileDo /> cleaned up -->
      <CanvasItemIfElse />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseEmptyContent from './BaseEmptyContent.vue'
import CanvasItemDoWhile from './CanvasItemDoWhile.vue'
import CanvasItemWhileDo from './CanvasItemWhileDo.vue'
import CanvasItemSwitchCase from './CanvasItemSwitchCase.vue'
import CanvasItemIfElse from './CanvasItemIfElse.vue'
import CanvasSidebarItem from './CanvasSidebarItem.vue'
import CanvasItemStatement from './CanvasItemStatement.vue'
import CanvasItemMethodBlock from './CanvasItemMethodBlock.vue'
</script>
<style scoped>
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
