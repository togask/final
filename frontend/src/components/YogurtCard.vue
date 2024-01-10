<template>
  <div class="card" draggable>
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
  }
};
</script>

<style scoped>
.card {
  /* スタイル定義 */
  cursor: pointer;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
