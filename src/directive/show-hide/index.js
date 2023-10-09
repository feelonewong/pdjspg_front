import Vue from 'vue'

Vue.directive('expand', {
    bind(el, binding) {
      el.addEventListener('click', () => {
        const isVisible = el.style.display !== 'none';
        el.style.display = isVisible ? 'none' : '';
      });
    },
    update(el, binding) {
      const isVisible = binding.value;
      el.style.display = isVisible ? '' : 'none';
    }
  });
  