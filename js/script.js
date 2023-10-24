const vipList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

const seatMarker = vipList.map((element, index) => {
    const vip = {
        tableName : 'Tavolo Vip',
        guestName : element,
        place : index + 1
    };

    return vip
})

console.log(seatMarker)

const students = [
    {
        id : 213,
        name : 'Marco della Rovere',
        grades : 78
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84
    },
]

 const nameStudentsList = students.map((element) => element.name.toUpperCase())

 console.log(nameStudentsList);

 const gradesMoreThan70 = students.filter((element) => element.grades > 70)

 console.log(gradesMoreThan70)

