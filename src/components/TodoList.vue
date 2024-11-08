<template>
    <title>
    hola
    </title>
    <v-container>
        <v-row justify="center">
            <v-col col="12" md="8">
                <v-card class="pa-4" elevation="5">
                    <v-card-title class="text-h5 font-weight-bold mb-3">
                        To-Do List
                    </v-card-title>
                    <v-card-text>
                        <v-list>
                            <v-list-item 
                            v-for="task in taskStore.tasks" 
                            :key="task.id"
                            class="d-flex align-center justify-space-between"
                            >
                                <v-list-item-content>
                                    {{ task.text }}
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn small icon @click="removeTask(task.id)">
                                        <v-icon>mdi-delete</v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                        <v-divider class="my-3"></v-divider>
                        <v-text-field
                            v-model="newTask"
                            label="Add a new Task"
                            @keyup.enter="addNewTask"
                            clearable
                            outlined
                            dense
                        ></v-text-field>
                        <v-btn color="primary" class="mt-2" block @click="addNewTask">
                            Add Task
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import { ref } from 'vue';
    import { useTaskStore } from '@/stores/taskStore';

    const taskStore = useTaskStore();
    const newTask = ref("");

    const addNewTask = () => {
        if(newTask.value.trim() !== "") {
            taskStore.addTask({ id: Date.now(), text: newTask.value.trim() });
            newTask.value = "";
        }
    };

    const removeTask= (id) => {
        taskStore.removeTask(id);
    }

</script>