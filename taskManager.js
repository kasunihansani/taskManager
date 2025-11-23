//creating readline interface
import readline from 'readline';
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask(question) {
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

let j = 0;
const tasks = [];
let task;
async function main() {
    console.log("Welcome to Task Manager!\n");
    while (true) {

        console.log("1. List tasks");
        console.log("2. Add new task");
        console.log("3. Mark task as complete");
        console.log("4. Delete task");
        console.log("5. Exit \n");

        let num = await ask("Enter your choice: ");

        if (num === "1") {
            listTask();
        }
        else if (num === "2") {
            await addTask();
        }
        else if (num === "3") {
            await markAsComplete();
        }
        else if (num === "4") {
            await deleteTask();
        }
        else if (num === "5") {
            console.log("\nThank You!\n");
            break;
        }
        else {
            console.log("\nInvalid input. Try Again.\n");
            break;
        }
    }
    rl.close();
}


main();

function listTask() {
    if (tasks.length === 0) {
        console.log("List is empty");
    }
    else {
        for (let i = 0; i < tasks.length; i++) {

            if (i == j - 1) {
                console.log(`${j}. [X] ${tasks[i]}`);
                j = 0;
            }
            console.log(`${i + 1}. [ ] ${tasks[i]}`);
            console.log();
            /* If use forEach.
            tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
            });*/

        }
    }
}

async function addTask() {

    let newTask = await ask("Enter new task name: ");
    tasks.push(newTask);
    console.log("✅ Task added!\n");

}

async function markAsComplete() {
    let num = await ask("Enter task number to mark complete: ");
    console.log(`✅ Task ${num} marked as complete!\n`);
    j = num;
}

async function deleteTask() {
    let num = await ask("Enter task number to delete: ");
    if (num < 1 || num > tasks.length) {
        console.log("Invalid task number.");
    }

    tasks.splice(num - 1, 1);
    console.log(`🗑️ Task ${num} is deleted`);
}
