import httpClient from "@/services/http.service";
import {onMounted, ref} from "vue";
import authService from "@/services/auth.service";
import router from "@/router/router";

export function userFunction(form) {
    const user = ref({})
    const users = ref([])

    async function getUsers() {
        const {status, data} = await httpClient.get('/user/get-users');
        if (status === 200) {
            users.value = data;
        }
    }

    async function getCurrentUser() {
        if (user.value) {
            const {status, data} = await httpClient.get('/user/data');
            if (status === 200) {
                user.value = data;
            }
        }
    }

    onMounted(getUsers(), getCurrentUser());
    return {users, user};
}