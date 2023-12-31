"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRole() {
    return true;
}
var user = {
    _id: '123',
    name: 'Mr. Admin',
    email: 'admin@gmail.com',
    adminKey: '431245f4e',
    editAccess: getRole,
    role: function () {
        return 'Admin';
    }
};
console.log(user.editAccess());
