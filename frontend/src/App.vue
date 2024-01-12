<template>
  <div id="app">
    <!-- 追加エリア -->
    <section class="section">
      <yogurt-add-form />
    </section>

    <!-- 一覧エリア -->
    <section class="section">
      <yogurt-list />
    </section>

    <!-- 更新エリア -->
    <section class="section">
      <yogurt-update-form />
    </section>

    <!-- 削除エリア -->
    <section class="section">
      <yogurt-delete />
    </section>
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
  // その他のスクリプト...
};
</script>

<style>
/* 必要に応じてスタイルを追加 */
</style>
