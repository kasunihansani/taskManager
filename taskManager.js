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
const completed = [];
let task;

async function main() {
    console.log("Welcome to Task Manager!");
    while (true) {

        console.log("\n1. List tasks");
        console.log("2. Add new task");
        console.log("3. Mark task as complete");
        console.log("4. Delete task");
        console.log("5. Exit");

        let num = await ask("Enter your choice: ");
        num = parseInt(num);
        if (num === 1) {
            listTask();
        }
        else if (num === 2) {
            await addTask();
        }
        else if (num === 3) {
            await completeTask();
        }
        else if (num === 4) {
            await deleteTask();
        }
        else if (num === 5) {
            console.log("👋 Exiting program. Goodbye!\n");
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
        console.log("\nList is empty");
        return;
    }
    else {
        console.log("\nYour Tasks: ");
        for (let i = 0; i < tasks.length; i++) {

            let mark;

            if (completed[i]===true) {
                mark = "[X]";
            }
            else{
                mark = "[ ]";
            }
            console.log(`${i+1}. ${mark} ${tasks[i]}`);

            //console.log();
            /* If use forEach.
            tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
            });*/

        }
    }
}

async function addTask() {

    let newTask = await ask("\nEnter new task name: ");
    tasks.push(newTask);
    completed.push(false); //New task is not completed
    console.log("✅ Task added!\n");

}

async function completeTask() {
    let num = await ask("Enter task number to mark complete: ");
    num = parseInt(num);

    if (num < 1 || num > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    completed[num-1] = true;
    console.log(`✅ Task ${num} marked as complete!\n`);
}

async function deleteTask() {
    let num = await ask("Enter task number to delete: ");
    num = parseInt(num);

    if (num < 1 || num > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    tasks.splice(num - 1, 1);
    completed.splice(num - 1, 1);

    console.log(`🗑️ Task ${num} is deleted\n`);
}
