<template>
  <div class="item-container">
    <div
      class="case-triangle"
      ref="caseStatements"
      :style="{ gridColumn: `${index + 1} / ${index + 1}` }"
      v-for="(item, index) in testItems"
      :key="index"
    >
      {{ item }}
    </div>
    <div class="else-triangle" ref="elseStatement">
      <div class="svg-container">
        <svg :height="firstRowHeight" :width="elseStatementWidth" xmlns="http://www.w3.org/2000/svg">
          <line
            stroke="var(--color-text-active)"
            stroke-width="2"
            x1="0"
            :x2="elseStatementWidth"
            y2="0"
            :y1="firstRowHeight"
          ></line>
        </svg>
      </div>
    </div>
    <div
      :style="{ gridColumn: `${index + 1} / ${index + 1}` }"
      class="case-statement"
      :key="index"
      v-for="(item, index) in testItems"
    >
      <BaseTextInput v-model:text="testStatements[index]" />
    </div>
    <div class="else-statement">
      <BaseTextInput v-model:text="elseStatementText" />
    </div>
    <div class="svg-container">
      <svg :height="firstRowHeight" :width="caseStatementsWidth" xmlns="http://www.w3.org/2000/svg">
        <line
          stroke="var(--color-text-active)"
          stroke-width="2"
          x1="0"
          :x2="caseStatementsWidth"
          y1="0"
          :y2="firstRowHeight"
        ></line>
      </svg>
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseTextInput from './BaseTextInput.vue'
import { ref, computed, onMounted } from 'vue'
// index des items in data-id oderso mitgeben, und in ::after pseudo element verwenden

const ifTrees = ref<HTMLElement[]>()
const ifTreeContainer = ref<HTMLElement>()

const elseStatementText = ref('Else')
const testStatements = ref(['Condition', 'Condition', 'COndition'])
const testItems = ref([4, 4, 4])
const caseStatements = ref<HTMLElement[]>()
const elseStatement = ref<HTMLElement>()

const firstRowHeight = computed(() => {
  if (!elseStatement.value) return '0px'
  return elseStatement.value.clientHeight.toString() + 'px'
})

const elseStatementWidth = computed(() => {
  if (!elseStatement.value) return '0'
  return elseStatement.value.clientWidth + 'px'
})

const caseStatementsWidth = computed(() => {
  console.log('computing')
  if (!caseStatements.value) return
  let width = 0
  caseStatements.value.forEach((div) => {
    width += div.clientWidth
  })
  return width.toString() + 'px'
})

const templateColumnStyle = computed(() => {
  return `repeat(${testItems.value.length + 1}, 1fr)`
})
</script>
<style scoped>
.case-triangle {
  z-index: 200;
  display: flex;
  align-items: flex-end;
  border-right: 1px solid var(--color-text-active);
}
.item-container {
  display: grid;
  grid-template-rows: 3rem auto;
  grid-template-columns: v-bind(templateColumnStyle);
}
.item-container {
  position: relative;
  width: 30rem;
  height: 30rem;
}
.svg-container {
  position: absolute;
  top: 0;
  bottom: 100%;
  left: 0;
  right: 100%;
}

.else-triangle {
  position: relative;
  grid-column-end: -1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.case-statement {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-row: 2;
  height: 3rem;
  border-bottom: 1px solid var(--color-text-active);
  border-right: 1px solid var(--color-text-active);
}
.else-statement {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  grid-row: 2;
  grid-column-end: -1;
  border-bottom: 1px solid var(--color-text-active);
  height: 3rem;
}
</style>
