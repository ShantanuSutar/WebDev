// const sing = async () => {
//     // return 'LA LA LA LA '
//     throw 'ERROR!';
// }
// sing()
//     .then(data => {
//         console.log('PROMISE RESOLVED WITH: ', data);
//     })
//     .catch(err => {
//         console.log('OH NO PROMISE REJECTED', err);
//     })


const login = async (username, paswword) => {
    if (!username || !paswword) throw 'Missig Credentials!';
    if (paswword === 'jaihind') return 'WELCOME!'
    throw 'Invalid Password';
}

login('shantanu', 'jaihind')
    .then(msg => {
        console.log("LOGGED IN! SIR ")
        console.log(msg)
    })
    .catch(err => {
        console.log("ERROR!")
        console.log(err)
    })