import YogurtAddForm from "./YogurtAddForm.vue";

export default {
  title: "YogurtAddForm",
  component: YogurtAddForm,
};

const Template = (args) => ({
  components: { YogurtAddForm },
  setup() {
    return { args };
  },
  template: '<yogurt-add-form v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  // ここに必要なpropsや初期状態のデータを設定
};
