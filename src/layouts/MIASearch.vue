<template>
  <div style="max-width: 525px">
    <q-input
      class="search-input"
      placeholder="Поиск"
      borderless
      v-model="search"
    >
      <template v-slot:append>
        <q-icon class="search-icon" name="search" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {};
</script>

<style>
.search-input {
  max-width: 531px;
  background: #fff;
  border-radius: 10px;
  font-size: 23px;
  padding-left: 15px;
}
.search-icon {
  background: rgba(254, 179, 2, 0.7);
  color: #fff;
  font-size: 30px;
  height: 100%;
  width: 60px;
  border-radius: 10px;
}
</style>