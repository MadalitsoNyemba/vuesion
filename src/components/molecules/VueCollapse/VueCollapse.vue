<template>
  <collapse-animation :duration="duration">
    <slot v-if="show" />
  </collapse-animation>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import CollapseAnimation from '@/components/animations/CollapseAnimation/CollapseAnimation.vue';
import { CollapseControlProps } from '@/components/Props';

export default defineComponent({
  name: 'VueCollapse',
  components: {
    CollapseAnimation,
  },
  props: {
    ...CollapseControlProps(),
  },
});
</script>
