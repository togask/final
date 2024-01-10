import YogurtCard from "./YogurtCard.vue";

export default {
  title: "YogurtCard",
  component: YogurtCard,
};

const Template = (args) => ({
  components: { YogurtCard },
  setup() {
    return { args };
  },
  template: '<yogurt-card v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  yogurt: {
    id: 1,
    name: "ストロベリーヨーグルト",
    price: 100,
  },
};
