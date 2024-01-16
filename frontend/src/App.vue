<template>
  <div id="app" class="app-container">
    <header class="header">
      <h1>datemi_farm</h1>
    </header>
    <div class="main-content">
      <!-- 一覧エリア -->
      <section class="yogurt-list-area">
        <yogurt-list />
      </section>

      <!-- 追加/更新/削除エリア -->
      <div class="edit-areas">
        <yogurt-add-form />
        <yogurt-update-form />
        <yogurt-delete />
      </div>
    </div>
  </div>
</template>

<script>
import YogurtAddForm from './components/YogurtAddForm.vue';
import YogurtList from './components/YogurtList.vue';
import YogurtUpdateForm from './components/YogurtUpdateForm.vue';
import YogurtDelete from './components/YogurtDelete.vue';

export default {
  name: 'App',
  components: {
    YogurtAddForm,
    YogurtList,
    YogurtUpdateForm,
    YogurtDelete
  },
};
</script>

<style>
.app-container {
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #f8f9fa;
  padding: 10px;
  text-align: center;
}

.main-content {
  display: flex;
  height: 100vh;
}

.yogurt-list-area {
  flex: 1;
  overflow-y: auto;
}

.edit-areas {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
