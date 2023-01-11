// Define the tasks and their properties
const tasks = [
    { name: 'Task A', duration: 30, predecessor: null, successor: ['Task B', 'Task C', 'Task D'] },
    { name: 'Task B', duration: 5, predecessor: ['Task A'], successor: ['Task E', 'Task F', 'Task G'] },
    { name: 'Task C', duration: 30, predecessor: ['Task A'], successor: ['Task F', 'Task G'] },
    { name: 'Task D', duration: 20, predecessor: ['Task A'], successor: ['Task G'] },
    { name: 'Task E', duration: 40, predecessor: ['Task B'], successor: ['Task H'] },
    { name: 'Task F', duration: 25, predecessor: ['Task B', 'Task C'], successor: ['Task H'] },
    { name: 'Task G', duration: 30, predecessor: ['Task B', 'Task C', 'Task D'], successor: ['Task H'] },
    { name: 'Task H', duration: 30, predecessor: ['Task E', 'Task F', 'Task G'], successor: null },
];

let eft = {} //Earliest Finish Time of each task
let est = {} //Earliest Start Time of each task
let lst = {} //Latest Start Time of each task
let lft = {} //Latest Finish Time of each task

//Start time
eft["Task A"] = tasks[0].duration;
est["Task A"] = 0;

//Calculating earliest time
for (let i = 1; i < tasks.length; i++) {
    let task = tasks[i]
    let pred = task.predecessor[0];
    est[task.name] = eft[pred]
    eft[task.name] = est[task.name] + task.duration
}

//Calculating latest time
let last = tasks[tasks.length - 1].name;
lft[last] = eft[last]
lst[last] = lft[last] - tasks.find(val => val.name === last).duration

for (let i = tasks.length - 2; i >= 0; i--) {
    let task = tasks[i]
    let suc = task.successor[0];
    lft[task.name] = lst[suc]
    lst[task.name] = lft[task.name] - task.duration
}

//Calculating critical path
let criticalPath = []

tasks.forEach(task => {
    if (est[task.name] === lst[task.name] && eft[task.name] === lft[task.name]) {
        criticalPath.push(task.name)
    }
})

console.log("Critical Path is : ", criticalPath);

let duration = 0;
criticalPath.forEach((task) => {
    let currentTask = tasks.find(val => val.name === task);
    duration += currentTask.duration;
});
console.log("Duration of the project is: ", duration);