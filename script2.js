const tasks = [
    { name: "Task 1", duration: 5, successors: ["Task 2"] },
    { name: "Task 2", duration: 10, successors: ["Task 3"] },
    { name: "Task 3", duration: 15, successors: ["Task 4"] },
    { name: "Task 4", duration: 12 }
];

const criticalPath = []
let maxDuration = 0;
tasks.forEach(task => {
    task.duration += task.predecessorDuration;
    if (task.duration > maxDuration) {
        maxDuration = task.duration;
        criticalPath = [task.name];
    } else if (task.duration === maxDuration) {
        criticalPath.push(task.name);
    }
});
console.log(`Duration: ${maxDuration}`);
console.log(`Critical Path: ${criticalPath.join(", ")}`);