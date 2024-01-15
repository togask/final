<template>
  <div class="container">
    <h1 class="title">新しいヨーグルトを追加</h1>
    <div class="field">
      <label class="label">商品名</label>
      <div class="control">
        <input class="input" type="text" v-model="newYogurt.name" placeholder="ヨーグルトの名前">
      </div>
    </div>
    <div class="field">
      <label class="label">価格</label>
      <div class="control">
        <input class="input" type="number" v-model="newYogurt.price" placeholder="ヨーグルトの価格">
      </div>
    </div>
    <div class="control">
      <button class="button is-primary" @click="addYogurt">追加</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      newYogurt: {
        name: '',
        price: 0
      }
    };
  },
  methods: {
    addYogurt() {
      axios.post('/api/yogurts', this.newYogurt)
        .then(response => {
          this.$store.dispatch('addYogurt', response.data);
          
          alert('ヨーグルトが追加されました');
          this.newYogurt.name = '';
          this.newYogurt.price = 0;
        })
        .catch(error => {
          console.error('ヨーグルトの追加に失敗しました', error);
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
