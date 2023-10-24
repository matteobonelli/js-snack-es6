
const vipList = [ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']
const placeMarker = [];

vipList.forEach((vip, index) => {
    let vipObj = {
        tableName : 'Tavolo Vip',
        guestName : vip,
        place : index + 1
    }
    placeMarker.push(vipObj)
})

console.log(placeMarker)

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

 const grades70Id120 = students.filter((element) => element.grades > 70 && element.id > 120)

 console.log(grades70Id120)


/*
const nameList = ['pippo', 'PlUTO', 'Paperino']

const nameListFormatted = nameList.map((element) => {
    let firstLetter = element[0].toUpperCase()
    let newStr = element.substring(1)

    return firstLetter + newStr.toLowerCase()
    
})
console.log(nameListFormatted)



const animals = [
    {
        nome : 'leone',
        famiglia : 'felidi',
        classe : 'mammiferi'
    },
    {
        nome : 'cane',
        famiglia : 'canidi',
        classe : 'mammiferi'
    },
    {
        nome : 'gallina',
        famiglia : 'fasianidi',
        classe : 'uccelli'
    }
];

const mammiferi = animals.filter((element) => element.classe === 'mammiferi');

console.log(mammiferi)



const persons = [
    {
        name : 'Pietro',
        surname : 'Smusi',
        age : 41
    },
    {
        name : 'Orazio',
        surname : 'Grinzosi',
        age : 38
    },
    {
        name : 'Kenneth',
        surname : 'Caselli',
        age : 34
    },
    {
        name : 'Ventilatore',
        surname : 'Zephyr',
        age : 1
    }
];

 
 const canDrive = persons.map((person) => {
    let message;
    if(person.age < 18 || person.age > 90){
        message = `Non puoi guidare!`
    } else{
        message = `Puoi guidare!`
    }
    let personMessage = `Ciao, ${person.name} ${person.surname}, ${message}`
    return personMessage
});

console.log(canDrive)

*/
