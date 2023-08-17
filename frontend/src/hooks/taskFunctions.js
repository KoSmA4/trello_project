// import httpClient from "@/services/http.service";
// import axios from "axios";
// import {onMounted, ref} from "vue";
//
// // export function deleteTask(task){
// //     const {status, data} = await httpClient.delete(`task/${task.id}`, {});
// //       if (status === 204) {
// //         this.tasks.splice(this.tasks.indexOf(task), 1)
// //       }
// // }
//
// export function taskListFunctions() {
//     const tasks = ref([])
//     const getPosts = async () => {
//         const {status, data} = await httpClient.get('task');
//         if (status === 200) {
//
//             tasks.value = data;debugger
//         }
//         return tasks
//     }
//     onMounted(getPosts)
//     return getPosts
// }

import httpClient from "@/services/http.service";
import {onMounted, ref} from "vue";

export function taskListFunctions() {
    const tasks = ref([])
    const deleteTask = async task => {
        const { status } = await httpClient.delete(`task/${task.value.task.id}`, {});
        if (status === 204) {
            tasks.value.splice(tasks.value.indexOf(task), 1);
        }
    };

    const addTask = async () => {
        const { status, data } = await httpClient.post('task', {});
        if (status === 201) {
            tasks.value.unshift(data);
        }
    };

    const noteUpdated = async task => {
        const { status } = await httpClient.put(`task/${task.value.task.id}`, task);
    };

    const fetchTasks = async () => {
        const { status, data } = await httpClient.get('task');
        if (status === 200) {
            tasks.value = data;
        }
    };

    onMounted(fetchTasks);

    return {
        tasks,
        deleteTask,
        addTask,
        noteUpdated
    };
}