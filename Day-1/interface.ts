function getRole() {
    return true
}

interface User {
    readonly _id: string
    name: string
    email: string
}

interface Admin extends User {
    adminKey: string
    editAccess(): boolean
    role(): string
}
const user: Admin = {
    _id: '123',
    name: 'Mr. Admin',
    email: 'admin@gmail.com',
    adminKey: '431245f4e',
    editAccess: getRole,
    role: () => {
        return 'Admin'
    }
}
console.log(user.editAccess());

export { }