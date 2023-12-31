type UserData = {
    name: string
    email: string
    rollNo: number
}

const data: UserData = {
    name: 'lyc',
    email: 'lyc.com',
    rollNo: 48
}

function printData(data: UserData) {
    console.log(data);
}

printData(data)