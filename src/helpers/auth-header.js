export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    user.token = undefined;

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}