const MyComponent = {
  mounted() {
    console.log("my component mounted haha");
  },
  data() {
    return { count: 0 };
  },
  template: `<div>count is {{ count }}</div>`,
};

module.exports = MyComponent;
