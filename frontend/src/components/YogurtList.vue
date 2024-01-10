<template>
  <div class="container">
    <h1 class="title">ヨーグルト一覧</h1>
    <draggable v-model="yogurts" @start="drag = true" @end="drag = false">
        <div v-for="yogurt in yogurts" :key="yogurt.id">
          <yogurt-card :yogurt="yogurt" />
        </div>
      </draggable>
  </div>
</template>

<script>
import axios from 'axios';
import draggable from 'vuedraggable';
import YogurtCard from './YogurtCard.vue';

export default {
  components: {
    draggable,
    YogurtCard
  },
  data() {
    return {
      yogurts: [],
      drag: false
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
