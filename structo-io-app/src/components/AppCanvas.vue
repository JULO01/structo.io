<template>
  <div class="canvas-container"></div>
</template>
<style scoped>
html:not(.dark) .canvas-container {
  background-color: var(--editor-canvas-background-light);
}
html.dark .canvas-container {
  background-color: var(--editor-canvas-background-dark);
}

.canvas-container {
  border-radius: 25px;
  box-shadow: var(--box-shadow-200);
}
</style>
