# 📌 Task Manager 

A simple and interactive **Console-based Task Manager Application** built using **Node.js**.  
Manage your daily tasks by adding, listing, completing, and deleting - all from the terminal! ✔️

---

## ✨ Features

### ✅ **What This Task Manager Does**
- Add new tasks  
- View all existing tasks  
- Mark tasks as completed  
- Delete tasks  
- Exit the application safely  

### 🚀 **Implemented Functionalities**
- Input handling using `readline`
- Tasks stored in arrays
- Completed tasks tracked using a second array (`completed[]`)
- Graceful handling of invalid inputs

### ⭐ **Additional Features**
- Emoji-based UI output  
- Clean formatted task list with checkboxes `[X]` and `[ ]`

---

## 🛠️ How to Run the Application

### 📌 **Node.js Version**
> **Node.js v24.11.1**   
Check your version:
```
node -v
```

### **📦 Install Dependencies**

This program uses only built-in Node.js modules, so no dependencies required.

### **▶️ Run the Program**

Inside your project folder:
```
node taskManager.js
```

### **🖥️ Example Output**
Welcome to Task Manager!

1. List tasks
2. Add new task
3. Mark task as complete
4. Delete task
5. Exit

Enter your choice: 2<br>
Enter new task name: Buy milk <br>
✅ Task added!

Your Tasks:<br>
1.`[ ]` Buy milk

### **⚠️ Notes / Limitations**
- Data is not saved after closing the program <br>
- No database or file storage added <br>
- Ideal for learning Node.js basics & Command Line Interface apps <br>
