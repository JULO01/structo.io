<template>
  <div class="background-overlay" v-show="elementIsHovered"></div>
  <div class="item-container" @mouseover="elementIsHovered = true" @mouseleave="elementIsHovered = false">
    <div class="edit-icons-container" v-show="elementIsHovered">
      <BaseIcon name="trash" size="30px" color="var(--editor-canvas-background-light)" />
    </div>
    <div class="item-argument-container triangle-background" data-colored="true">
      <div class="item-argument-if-display">
        <BaseTextInputVue class="if-input" v-model="ifStatement" />
      </div>
      <div class="item-argument">
        <BaseTextInputVue v-model="conditionStatement" />
      </div>
      <div class="item-argument-else-display">
        <BaseTextInputVue class="if-input" v-model="elseStatement" />
      </div>
    </div>
    <div class="item-childzone-container">
      <div
        class="item-childzone-if"
        :class="{ 'childzone-shown': store.$state.activeDragging && !ifChildType }"
        @drop.prevent="handleIfDrop"
        @dragenter.prevent="handleDragEnter"
        @dragover.prevent
        @dragleave="handleDragLeave"
      >
        <component v-if="requiredIfComponent != null" :is="requiredIfComponent"></component>
      </div>
      <div
        class="item-childzone-else"
        :class="{ 'childzone-shown': store.$state.activeDragging && !elseChildType }"
        @drop.prevent="handleElseDrop"
        @dragenter.prevent="handleDragEnter"
        @dragleave="handleDragLeave"
        @dragover.prevent
      >
        <component v-if="requiredElseComponent != null" :is="requiredElseComponent"></component>
      </div>
    </div>
    <div
      v-if="store.$state.activeDragging"
      class="item-childzone-after"
      :class="{ 'childzone-shown': store.$state.activeDragging && !afterChildType }"
      @drop.prevent="handleAfterDrop"
      @dragenter.prevent="handleDragEnter"
      @dragleave="handleDragLeave"
      @dragover.prevent
    ></div>
  </div>
  <component v-if="requiredAfterComponent != null" :is="requiredAfterComponent"></component>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { NodeType } from '../types/nodes'
import { useGlobalStore } from '../stores/globalStore'
// import canvasItems from '../utils/canvasItems'
import CanvasItemDoWhile from './CanvasItemDoWhile.vue'
import CanvasItemMethodBlock from './CanvasItemMethodBlock.vue'
import CanvasItemStatement from './CanvasItemStatement.vue'
import CanvasItemSwitchCase from './CanvasItemSwitchCase.vue'
import CanvasItemWhileDo from './CanvasItemWhileDo.vue'
import CanvasItemIfElse from './CanvasItemIfElse.vue'
import BaseTextInputVue from './BaseTextInput.vue'
import BaseIcon from './BaseIcon.vue'

const store = useGlobalStore()

const canvasItems = {
  'do-while': CanvasItemDoWhile,
  'method-block': CanvasItemMethodBlock,
  statement: CanvasItemStatement,
  'switch-case': CanvasItemSwitchCase,
  'while-do': CanvasItemWhileDo,
  'if-else': CanvasItemIfElse,
}

const ifStatement = ref('True')
const elseStatement = ref('False')
const conditionStatement = ref('Condition')

const ifChildType = ref<NodeType>()
const elseChildType = ref<NodeType>()
const afterChildType = ref<NodeType>()
const elementIsHovered = ref(false)

const requiredIfComponent = computed(() => {
  if (!ifChildType.value) return null
  return canvasItems[ifChildType.value]
})

const requiredElseComponent = computed(() => {
  if (!elseChildType.value) return null
  return canvasItems[elseChildType.value]
})

const requiredAfterComponent = computed(() => {
  if (!afterChildType.value) return null
  return canvasItems[afterChildType.value]
})

function handleIfDrop(event: DragEvent) {
  if (ifChildType.value) return
  const childType = event.dataTransfer?.getData('text/plain') as NodeType
  ifChildType.value = childType
}

function handleElseDrop(event: DragEvent) {
  if (elseChildType.value) return
  const childType = event.dataTransfer?.getData('text/plain') as NodeType
  elseChildType.value = childType
}

function handleAfterDrop(event: DragEvent) {
  if (elseChildType.value) return
  const childType = event.dataTransfer?.getData('text/plain') as NodeType
  afterChildType.value = childType
}

function handleDragEnter(event: DragEvent) {
  const target = event.target
  target.classList.add('childzone-dragover')
}

function handleDragLeave(event: DragEvent) {
  const target = event.target
  target.classList.remove('childzone-dragover')
}
</script>
<style scoped>
.item-argument-container {
  height: fit-content;
  position: relative;
  display: flex;
  flex-direction: row;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
}
.item-argument {
  font-size: var(--fs-editor-canvas-item);
  min-height: 4rem;
  min-width: 33%;
  max-width: fit-content;
  height: fit-content;
  display: flex;
  align-content: flex-end;
  justify-content: center;
}
.item-argument-if-display {
  font-size: var(--fs-editor-canvas-item);
  text-align: center;
  width: 33%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.item-argument-else-display {
  font-size: var(--fs-editor-canvas-item);
  width: 33%;
  text-align: center;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.item-container {
  /*border-radius: 10px;*/
  position: relative;
  background-color: var(--editor-canvas-background);
  min-width: var(--min-width-editor-item);
  height: fit-content;
  width: fit-content;

  display: flex;
  flex-direction: column;
  transition: all 0.2s ease;
}
.item-container:hover {
  z-index: 2;
  transform: scale(1.1, 1.1);
}
.item-childzone-container {
  min-height: var(--min-height-editor-childzone);
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
}
.item-childzone-if {
  grid-row: 1 / 1;
  grid-column: 1 / 1;
  display: flex;
  flex-direction: column;
}
.item-childzone-if::after {
  content: '';
  height: 100%;
  border-right: 2px solid;
  margin-right: -2px;
}

.childzone-shown {
  background-color: rgba(var(--color-primary-500), 0.1);
}
.childzone-dragover {
  background-color: rgba(var(--color-primary-500), 0.3);
}
html:not(.dark) .item-childzone-if::after {
  border-left: 2px solid var(--color-text-active-light);
}
html.dark .item-childzone-if::after {
  border-left: 2px solid var(--color-text-active-dark);
}
.item-childzone-else {
  grid-row: 1 / 1;
  grid-column: 2 / 2;
  display: flex;
  flex-direction: column;
}
.item-childzone-after {
  grid-column: 1/2;
  grid-row: 2/2;
  min-width: 100%;
  min-height: var(--min-height-editor-childzone);
  height: fit-content;
  border-top: 2px solid var(--color-text-active-light);
}
.example-child {
  width: 15rem;
  height: 10rem;
  border: 1px solid cyan;
}
.if-input {
  position: absolute;
}
.background-overlay {
  position: fixed;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
}
.edit-icons-container {
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
}
</style>
