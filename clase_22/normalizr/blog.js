// import de la libreria y el json
const { normalize, denormalize, schema } = require("normalizr");
const blogJson = require("./json/blog.json");
const util = require('util')

// crear los schemas para normalizar la data

const authorSchema = new schema.Entity('authors')

const commentSchema = new schema.Entity('comments')

const postSchema = new schema.Entity('posts', {
    author: authorSchema,
    comments: [commentSchema]
})

// print

const print = (obj) => {
    console.log('obj sin util', obj)
    console.log('obj con util', util.inspect(obj, true, 12, true))
    console.log('obj con util 2', util.inspect(obj, false, 12, false))
}

console.log('Normalizado---------------------------------')
const normalizedPosts = normalize(blogJson, postSchema)
print(normalizedPosts)
console.log('Normalizado---------------------------------')


console.log(JSON.stringify(blogJson).length)

console.log(JSON.stringify(normalizedPosts).length)

