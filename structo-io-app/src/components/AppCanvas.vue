<template>
  <div class="canvas-container">
    <div class="canvas-sidebar">
      <div class="test-item"></div>
      <div class="test-item"></div>
      <div class="test-item"></div>
      <div class="test-item"></div>
      <div class="test-item"></div>
      <div class="test-item"></div>
    </div>
    <div class="canvas"></div>
  </div>
</template>
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
}

.canvas {
  display: flex;
  border-radius: 25px;
  box-shadow: var(--box-shadow-200);
}

.canvas-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  position: absolute;
  top: 0;
  bottom: 0;
}

.test-item {
  width: 6rem;
  height: 3rem;
  background-color: aliceblue;
}
</style>
