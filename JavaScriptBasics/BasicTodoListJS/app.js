let task = prompt("What would you like to do?").toLowerCase()

let total = [];
while (task !== "quit" && task !== 'q') {

    if (task === "new") {
        const todo = prompt("Enter new task: ")
        total.push(todo)
        console.log(`${todo} added to list!`)
    }
    else if (task === 'list') {
        console.log("***************")

        for (let i = 0; i < total.length; i++) {
            console.log(`${i} : ${total[i]}`)
        }
        console.log('***************')
    }
    else if (task === 'delete') {
        const index = parseInt(prompt("Ok, enter an index number to delete"))

        if (!Number.isNaN(index)) {
            const deleted = total.splice(index, 1)
            console.log(`OK, deleted ${deleted[0]}`)
        } else {
            console.log("Unknown Index!")
        }
    }

    task = prompt("What would you like to do?").toLowerCase()
}
console.log("GoodBye!")