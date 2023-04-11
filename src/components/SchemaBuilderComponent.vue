<template>
  <div>
    <ul>
      <li v-for="(field, index) in fields" :key="index">
        <strong>{{ field.name }}:</strong> {{ field.value }}
        <tree-view :fields="field.childFields" v-if="field.childFields" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:'hlx-schema-builder',
    props: {
        fields: Array
    }
}
</script>

<style>

</style>