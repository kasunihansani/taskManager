//Import Node.js's "readline" module
import { createInterface } from 'readline';

//Creating readline interface to ask questions and get user input in the terminal
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Wraps "rl.question()" inside a Promise to use "await" later
//When user types somthing, it resolves the answer
function ask(question) {
    return new Promise(resolve => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}


const tasks = []; //Stores task names
const completed = []; //Store true or false for each task(true = completed)

//main() function
//Runs the program in a loop until user selects Exit
async function main() {
    console.log("Welcome to Task Manager!");
    while (true) {

        //Print menu
        console.log("\n1. List tasks");
        console.log("2. Add new task");
        console.log("3. Mark task as complete");
        console.log("4. Delete task");
        console.log("5. Exit");

        //Get user choice
        let num = await ask("Enter your choice: "); // Wait for a input
        num = parseInt(num);// Convert string to int
        
        //Handle the menu according to user input
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
        }
    }
    rl.close(); //Close readline
}

main();

//Show list of tasks
function listTask() {

    //Inform if the list is empty
    if (tasks.length === 0) {
        console.log("\nList is empty");
        return;
    }

    //Show the list of tasks
    else {

        //Print each task
        console.log("\nYour Tasks: ");
        for (let i = 0; i < tasks.length; i++) {

            //Show whether the task is completed [X] or not [X]
            let mark;

            if (completed[i]===true) {
                mark = "[X]";
            }
            else{
                mark = "[ ]";
            }
            console.log(`${i+1}. ${mark} ${tasks[i]}`);//Print formatted task


            /* If use forEach.
            tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
            });*/

        }
    }
}

//Add new task
async function addTask() {

    let newTask = await ask("\nEnter new task name: ");
    tasks.push(newTask);
    completed.push(false); //New task is not completed
    console.log("✅ Task added!\n");

}

//Mark tasks as complete
async function completeTask() {
    let num = await ask("Enter task number to mark complete: ");
    num = parseInt(num);

    //Validate number
    if (num < 1 || num > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    completed[num-1] = true;//Set the completed task true
    console.log(`✅ Task ${num} marked as complete!\n`);
}

//Delete tasks
async function deleteTask() {
    let num = await ask("Enter task number to delete: ");
    num = parseInt(num);

    //Validate number
    if (num < 1 || num > tasks.length) {
        console.log("Invalid task number.");
        return;
    }

    tasks.splice(num - 1, 1); //Remove the item at index
    completed.splice(num - 1, 1);//Removes the relevent completed status

    console.log(`🗑️  Task ${num} is deleted\n`);//Confirm the deletion
}
