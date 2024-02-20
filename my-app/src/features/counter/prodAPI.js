import axios from 'axios';
// const MY_SERVER = "http://localhost:4000/prods"
const MY_SERVER = "http://127.0.0.1:8000/products/"

export function fetchProds() {
    return axios.get(MY_SERVER);
}

export function createProd(prodData) {
    return axios.post(MY_SERVER, prodData);
}

export function deleteProd(prodId) {
    const url = `${MY_SERVER}/${prodId}`;
    return axios.delete(url);
}

export function updateProd(updatedData , prodId ) {
    // console.log(prodId, updatedData);
    const url = `${MY_SERVER}/${prodId}`;
    return axios.put(url, updatedData);
}