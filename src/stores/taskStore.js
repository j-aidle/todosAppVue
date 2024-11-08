import { defineStore } from "pinia";
import { ref, watch } from "vue";


export const useTaskStore = defineStore('tasks', () => {
    const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || []);

    const addTask = (task) => {
        tasks.value.push(task);
    };

    const removeTask = (id) => {
        tasks.value = tasks.value.filter(task => task.id !== id);
    };

    watch(tasks, (newTasks) => {
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    }, {deep:true});

    return {tasks,addTask,removeTask};

});