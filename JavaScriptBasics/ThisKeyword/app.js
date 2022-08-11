const cat = {
    name: 'Shantanu',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log(`${this.name} says MEOWWW `)
    }
}

const meow2 = cat.meow;