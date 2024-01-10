import YogurtUpdateForm from "./YogurtUpdateForm.vue";

export default {
  title: "YogurtUpdateForm",
  component: YogurtUpdateForm,
};

const Template = (args, { argTypes }) => ({
  components: { YogurtUpdateForm },
  setup() {
    return { args };
  },
  template: '<yogurt-update-form v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  yogurt: {
    id: 1,
    name: "ストロベリーヨーグルト",
    price: 100,
  },
  // 他の必要なpropsをここに追加
};
