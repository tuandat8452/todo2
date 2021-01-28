import {
    getListTask,
    deleteTaskAPI,
    addTaskAPI,
    getTaskByIdAPI,
    updateTaskAPI

} from "./taskservice.js";
import Task from "./task.js";

const getEle = (id) => {
    return document.getElementById(id);
};

const taoBang = (arr) => {
    if (arr && arr.length > 0) {
        let content = "";
        arr.forEach((item) => {
            content = `
            <li>
            <span>${item.textTask}</span>
            <div class="buttons">
                <button class="remove" onclick="deleteTask(${item.id})";>
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="complete" onclick="updateTask(${item.id})";>
                    <i class="far fa-check-circle"></i>
                    <i class="fas fa-check-circle"></i>
                </button>
            </div>
            </li>
            `;
            if (item.status === "todo") {
                getEle("todo").innerHTML = content;
            } else if (item.status === "completed") {
                getEle("completed").innerHTML = content;
            }
        });
    }
}

const getTaskList = () => {
    getListTask()
        .then((result) => {
            taoBang(result.data);
        })
}

getTaskList();

getEle("addItem").addEventListener("click", () => {
    const textTask = getEle("newTask").value;
    let status = "todo";

    const task = new Task("", textTask, status);
    addTaskAPI(task)
        .then((result) => {
            alert("Add task success");
            getListTask();
        })
});

window.deleteTask = deleteTask;

function deleteTask(id) {
    deleteTaskAPI(id).then((result) => {
        alert("Delete success");
        getTaskList();
    });
}

window.updateTask = updateTask;

function updateTask(id) {
    getTaskByIdAPI(id)
        .then((result) => {
            const textTask = result.data.textTask;
            let status = result.data.status;
            if (status === "todo") {
                status = "completed";
            } else if (status === "completed") {
                status = "todo";
            }
            const task = new Task(id, textTask, status);
            updateTaskAPI(task).then((result) => {
                alert("Change status success");
                getTaskList();
            });
        });
}