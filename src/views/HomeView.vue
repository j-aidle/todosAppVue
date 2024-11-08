<template>
  <TodoList />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/HelloWorld.vue';
import TodoList from '@/components/TodoList.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    TodoList,
  },
});
</script>
