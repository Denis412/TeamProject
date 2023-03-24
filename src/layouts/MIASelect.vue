<template>
    <div style="max-width: 350px">
        <q-select class="select-input" borderless v-model="model" :options="options" label="Сортировка" />
    </div>
</template>

<script>
export default {

}
</script>

<style>
.select-input {
  max-width: 531px;
  background: rgba(83, 141, 255, 0.05);
  border-radius: 10px;
  font-size: 23px;
  padding-left: 15px;
}

@media (max-width: 800px) {
  .select-input {
    font-size: 16px;
  }
}

</style>