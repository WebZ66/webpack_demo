<template>
  <div>
    {{ name + '组件' }}
    {{ person.name }}
    <button @click="change(person)">点击修改</button>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
const name = ref<string>('hello')
interface Person {
  name: string
  age: number
}
interface Change {
  (person: Person): void
}
const person = reactive({ name: 'zds', age: 18 })
const change: Change = person => {
  console.log(person)
  person.name = 'xqq'
}
</script>

<style scoped></style>
