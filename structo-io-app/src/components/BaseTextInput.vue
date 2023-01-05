<template>
  <div class="container">
    <div v-if="!isEditing" class="text-container" @click="handleTextClick">{{ text }}</div>
    <div v-else class="input-container">
      <input @focusout="handleEnter" @keyup.enter="handleEnter" @keyup.escape="handleEscape" v-model="text" type="text" ref="textInput" class="text-input" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, defineEmits, nextTick } from 'vue'

type Props = {
  text?: string
}

const props = withDefaults(defineProps<Props>(), { text: '' })
const emit = defineEmits(['update:text'])

const isEditing = ref(false)
const textInput = ref<HTMLElement>()
let savedTextValue = new String(props.text)

const text = computed({
  get() {
    return props.text
  },
  set(value: string) {
    emit('update:text', value)
  },
})

function handleTextClick() {
  isEditing.value = true
  nextTick(() => {
    if (!textInput.value) return
    textInput.value.focus()
  })
}

function handleEnter() {
  isEditing.value = false
  if (text.value == '') {
    text.value = 'Condition'
  }
  savedTextValue = new String(text.value)
}

function handleEscape() {
  isEditing.value = false
  text.value = savedTextValue.toString()
}
</script>
<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text-container {
  cursor: pointer;
}

.container {
  font-size: var(--fs-400);
}

.text-input {
  border: 2px solid var(--color-primary);
  outline: 0;
  border-radius: 0.3rem;
  transition: transform 0.2s ease;
  box-shadow: var(--box-shadow-100);
}
.text-input:focus {
  border: 2px solid var(--color-primary);
  outline: 0 !important;
}
</style>
