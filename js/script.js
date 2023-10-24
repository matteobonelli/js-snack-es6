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