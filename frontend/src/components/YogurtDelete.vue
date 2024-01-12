<template>
  <div class="container">
    <h1 class="title">ヨーグルトを削除</h1>
    <div class="field">
      <label class="label">削除するヨーグルトを選択</label>
      <div class="control">
        <div class="select">
          <select v-model="selectedYogurt">
            <option v-for="yogurt in yogurts" :key="yogurt.id" :value="yogurt.id">
              {{ yogurt.name }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <button class="button is-danger" @click="deleteYogurt">削除</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      yogurts: [], // 一覧データ
      selectedYogurt: null // 選択されたヨーグルトのID
    };
  },
  mounted() {
    this.fetchYogurts();
  },
  methods: {
    fetchYogurts() {
      axios.get('/api/yogurts')
        .then(response => {
          this.yogurts = response.data;
        })
        .catch(error => {
          console.error('ヨーグルトの取得に失敗しました', error);
        });
    },
    deleteYogurt() {
      if (!this.selectedYogurt) {
        alert('ヨーグルトを選択してください');
        return;
      }

      axios.delete(`/api/yogurts/${this.selectedYogurt}`)
        .then(() => {
          alert('ヨーグルトが削除されました');
          this.fetchYogurts(); // リストを更新
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
