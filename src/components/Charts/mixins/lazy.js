export const canUseIntersection = !!window.IntersectionObserver;
const observer = new window.IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const fnIndex = el.dataset.fnIndex;
      // to do render
      observeFnMap[fnIndex]();
      observer.unobserve(entry.target);
      delete observeFnMap[fnIndex];
    }
  });
});

const observeFnMap = {};
let keyIndex = 0;
export const addObserver = (target, fn) => {
  keyIndex += 1;
  observeFnMap[keyIndex] = fn;
  target.dataset.fnIndex = keyIndex;
  observer.observe(target);
};

export const useLazyMixin = {
  watch: {
    // eslint-disable-next-line space-before-function-paren
    chartData() {
      this.initChart();
    },
  },
  mounted() {
    if (canUseIntersection && this.$refs.chartItem) {
      addObserver(this.$refs.chartItem, this.initChart);
    } else {
      this.initChart();
    }
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
};
