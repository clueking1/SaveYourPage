import axios from 'axios'

export default {
    searchBooks: function(book) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    },

    overlayBook: function(id) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
    },

    savedBooks: function() {
        return axios.get('/api/books').then(res => res.data)
    },

    saveBook: function(id) {
        return axios.post(`/api/books/${id}`)
    },

    deleteBook: function(id) {
        return axios.delete(`/api/books/${id}`)
    }

}