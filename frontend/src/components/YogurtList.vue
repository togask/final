<template>
  <div class="container">
    <h1 class="title">ヨーグルト一覧</h1>
    <div class="columns is-multiline">
      <div class="column is-one-quarter" v-for="yogurt in yogurts" :key="yogurt.id">
        <div class="card" @click="bringToFront(yogurt)">
          <div class="card-content">
            <p class="title">{{ yogurt.name }}</p>
            <p class="subtitle">￥{{ yogurt.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      yogurts: []
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
    bringToFront(yogurt) {
      this.yogurts = [yogurt, ...this.yogurts.filter(y => y.id !== yogurt.id)];
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

.card {
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

</style>
