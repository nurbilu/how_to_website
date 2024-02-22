import axios from 'axios'
const MY_SERVER = "http://127.0.0.1:8000/login/"

// login
export function login(userData) {
    console.log(userData);
    return axios.post(MY_SERVER, userData);
}

// logout
export function logout(userData) {
    axios.post(MY_SERVER, userData)
        .then(() => {
            window.location.reload();
        })
        .catch(error => {
            console.error(error);
        });
}