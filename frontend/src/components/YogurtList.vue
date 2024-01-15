<template>
  <div class="container">
    <h1 class="title">ヨーグルト一覧</h1>
    <div v-if="isLoading">データ読み込み中...</div>
    <div v-else>
      <draggable v-model="yogurts" item-key="id" @start="drag = true" @end="drag = false">
        <template #item="{ element }">
          <yogurt-card :yogurt="element" />
        </template>
      </draggable>
    </div>
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
      isLoading: true,
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
          this.isLoading = false;
        })
        .catch(error => {
          console.error('ヨーグルトの取得に失敗しました', error);
          this.isLoading = false;
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
