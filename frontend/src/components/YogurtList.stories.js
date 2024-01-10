import YogurtList from "./YogurtList.vue";

export default {
  title: "YogurtList",
  component: YogurtList,
};

const Template = (args, { argTypes }) => ({
  components: { YogurtList },
  props: Object.keys(argTypes),
  template: '<yogurt-list v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
  yogurts: [
    { id: 1, name: "ストロベリーヨーグルト", price: 100 },
    { id: 2, name: "ブルーベリーヨーグルト", price: 120 },
    { id: 3, name: "バナナヨーグルト", price: 130 },
    { id: 4, name: "オレンジヨーグルト", price: 140 },
    { id: 5, name: "アップルヨーグルト", price: 150 },
  ],
};
