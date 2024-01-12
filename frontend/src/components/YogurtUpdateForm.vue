<template>
  <div class="container">
    <h1 class="title">ヨーグルトを編集</h1>
    <div v-if="selectedYogurt">
      <div class="field">
        <label class="label">商品名</label>
        <div class="control">
          <input class="input" type="text" v-model="selectedYogurt.name" placeholder="ヨーグルトの名前">
        </div>
      </div>
      <div class="field">
        <label class="label">価格</label>
        <div class="control">
          <input class="input" type="number" v-model="selectedYogurt.price" placeholder="ヨーグルトの価格">
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
import axios from 'axios';

export default {
  data() {
    return {
      selectedYogurt: null
    };
  },
  methods: {
    updateYogurt() {
      axios.put(`/api/yogurts/${this.selectedYogurt.id}`, this.selectedYogurt)
        .then(() => {
          alert('ヨーグルトが更新されました');
          // 必要に応じてデータの再読み込みや通知を行う
        })
        .catch(error => {
          console.error('ヨーグルトの更新に失敗しました', error);
          alert('エラーが発生しました');
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
