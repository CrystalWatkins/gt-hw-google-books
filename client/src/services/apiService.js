import http from "./httpService";

export function searchResults (bookName) {
    return http.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
}