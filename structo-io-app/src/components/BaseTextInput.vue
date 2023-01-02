<template>
  <div class="container">
    <div v-if="!isEditing" class="text-container" @click="handleTextClick">{{ text }}</div>
    <div v-else class="input-container">
      <input v-model="text" type="text" />
      <BaseIcon @click="isEditing = false" name="Check" size="30px" />
      <BaseIcon @click="isEditing = false" name="Close" size="25px" />
    </div>
  </div>
</template>
<script setup lang="ts">
import BaseIcon from './BaseIcon.vue'
import { ref, computed, defineEmits } from 'vue'

type Props = {
  text?: string
}

const isEditing = ref(false)

const props = withDefaults(defineProps<Props>(), { text: '' })
const emit = defineEmits(['update:text'])

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
</style>
