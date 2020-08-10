import http from "./httpService";

export function getAllBooks () {
    return http.get("https://gt-hw-react-google-books.herokuapp.com/api/books")
}

export function saveBook (title, authors, description, image, link) {
    const object = {title: title, authors: authors, description: description, image: image, link:link}   
    return http.post("https://gt-hw-react-google-books.herokuapp.com/api/books", object) 
}

export function getBookById (id) {
    return http.get(`https://gt-hw-react-google-books.herokuapp.com/api/books/${id}`)
}

export function deleteBookById (id) {
    return http.delete(`https://gt-hw-react-google-books.herokuapp.com/api/books/${id}`)
}

