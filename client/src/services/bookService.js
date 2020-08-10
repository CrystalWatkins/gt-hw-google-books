import http from "./httpService";

export function getAllBooks () {
    return http.get("http://localhost:3001/api/books")
}

export function saveBook (title, authors, description, image, link) {
    const object = {title: title, authors: authors, description: description, image: image, link:link}   
    return http.post("http://localhost:3001/api/books", object) 
}

export function getBookById (id) {
    return http.get(`http://localhost:3001/api/books/${id}`)
}

export function deleteBookById (id) {
    return http.delete(`http://localhost:3001/api/books/${id}`)
}