import YogurtDelete from "./YogurtDelete.vue";

export default {
  title: "YogurtDelete",
  component: YogurtDelete,
};

const Template = (args, { argTypes }) => ({
  components: { YogurtDelete },
  setup() {
    return { args };
  },
  template: '<yogurt-delete v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // ここに必要なpropsや初期状態のデータを設定
  yogurts: [
    { id: 1, name: "ストロベリーヨーグルト", price: 100 },
    { id: 2, name: "ブルーベリーヨーグルト", price: 120 },
  ],
  // 他の必要なpropsをここに追加
};
