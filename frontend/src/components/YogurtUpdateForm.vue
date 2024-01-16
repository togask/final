<template>
  <div class="container">
    <h1 class="title">ヨーグルトを編集</h1>
    <div v-if="isYogurtSelected">
      <div class="field">
        <label class="label">商品名</label>
        <div class="control">
          <input class="input" type="text" v-model="editableYogurt.name" placeholder="ヨーグルトの名前">
        </div>
      </div>
      <div class="field">
        <label class="label">価格</label>
        <div class="control">
          <input class="input" type="number" v-model="editableYogurt.price" placeholder="ヨーグルトの価格">
        </div>
      </div>
      <div class="control">
        <button class="button is-primary" @click="updateYogurt">更新</button>
      </div>
    </div>
    <div v-else>ヨーグルトを選択してください。</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['selectedYogurt']),

    isYogurtSelected() {
      return this.selectedYogurt && this.selectedYogurt.id !== undefined;
    },
  },
  watch: {
    selectedYogurt: {
      immediate: true,
      handler(newVal) {
        if (newVal && newVal.id !== undefined) {
          this.editableYogurt = { ...newVal };
        } else {
          this.editableYogurt = null;
        }
      },
    },
  },
  methods: {
    updateYogurt() {
      this.$store.dispatch('updateYogurt', this.editableYogurt)
        .then(() => {
          alert('ヨーグルトが更新されました');
          this.editableYogurt = null;
          this.$store.commit('SET_SELECTED_YOGURT', null);
        })
        .catch(error => {
          console.error('ヨーグルトの更新に失敗しました', error);
        });
    },
  },
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
