<template>
  <div class="card" draggable @click="handleCardClick">
    <input type="checkbox" class="hidden-checkbox" :checked="isChecked" @change="handleSelection(yogurt)" />
    <header class="card-header">
      <p class="card-header-title">{{ yogurt.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
        価格: ￥{{ yogurt.price }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    yogurt: {
      type: Object,
      required: true
    }
  },
  computed: {
    isChecked() {
      return this.yogurt.id === this.$store.state.selectedYogurt?.id;
    },
  },
  methods: {
    handleSelection(yogurt) {
      if (this.isChecked) {
        this.$store.commit('SET_SELECTED_YOGURT', null);
      } else {
        this.$store.dispatch('selectYogurt', yogurt);
      }
    },
    handleCardClick() {
      this.handleSelection(this.yogurt);
    }
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
  transition: transform 0.3s ease;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.card:hover {
  transform: translateY(-5px);
}

.hidden-checkbox {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
</style>
