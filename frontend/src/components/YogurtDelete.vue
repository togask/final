<template>
  <div class="container">
    <h1 class="title">ヨーグルトを削除</h1>
    <div v-if="selectedYogurt">
      <p>選択されたヨーグルト: {{ selectedYogurt.name }}</p>
      <button class="button is-danger" @click="deleteYogurt">削除</button>
    </div>
    <div v-else>
      ヨーグルトを選択してください。
    </div>    
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedYogurt']),
  },
  methods: {
    deleteYogurt() {
      if (!this.selectedYogurt) {
        alert('ヨーグルトを選択してください');
        return;
      }

      this.$store.dispatch('deleteYogurt', this.selectedYogurt.id)
        .then(() => {
          alert('ヨーグルトが削除されました');
          this.$store.commit('SET_SELECTED_YOGURT', null);
        })
        .catch(error => {
          console.error('ヨーグルトの削除に失敗しました', error);
        });
    }
  }
};
</script>

<style scoped>
.container {
  border: 1px solid #dbdbdb;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
}
</style>
