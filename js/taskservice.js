const getListTask = () => {
    return axios({
        url: "https://6001827508587400174dad0a.mockapi.io/api/todo",
        method: "GET",
    });
}

const deleteTaskAPI = (id) => {
    return axios({
        url: `https://6001827508587400174dad0a.mockapi.io/api/todo/${id}`,
        method: "DELETE",
    });
}

const addTaskAPI = (task) => {
    return axios({
        url: "https://6001827508587400174dad0a.mockapi.io/api/todo",
        method: "POST",
        data: task,
    });
}

const getTaskByIdAPI = (id) => {
    return axios({
        url: `https://6001827508587400174dad0a.mockapi.io/api/todo/${id}`,
        method: "GET",
    });
}

const updateTaskAPI = (task) => {
    return axios({
        url: `https://6001827508587400174dad0a.mockapi.io/api/todo/${task.id}`,
        method: "PUT",
        data: task,
    });
}

export {
    getListTask,
    deleteTaskAPI,
    addTaskAPI,
    getTaskByIdAPI,
    updateTaskAPI,
};