// import de la libreria y el json
const { normalize, denormalize, schema } = require("normalizr");
const blog2Json = require("./json/blog2.json");
const util = require('util')


// crear los schemas para normalizar la data

const userSchema = new schema.Entity('users')

const commentSchema = new schema.Entity('comments')
const articlesSchema = new schema.Entity('articles', {
    author: userSchema,
    comments: [commentSchema]
})
const postSchema = new schema.Entity('posts',{
    posts: [articlesSchema]
})

const print = (obj) => console.log(util.inspect(obj, false, 12, true))

console.log(' ------------- OBJETO NORMALIZADO --------------- ')
const normalizedBlog2 = normalize(blog2Json, postSchema)
print(normalizedBlog2)

console.log(JSON.stringify(blog2Json).length)
console.log(' ------------- OBJETO NORMALIZADO lenght--------------- ')
console.log(JSON.stringify(normalizedBlog2).length)

console.log(' ------------- OBJETO DESNORMALIZADO --------------- ')
const desnormalizedBlog2 = denormalize(normalizedBlog2.result, postSchema, normalizedBlog2.entities)
print(desnormalizedBlog2)

console.log(' ------------- OBJETO NORMALIZADO lenght--------------- ')
console.log(JSON.stringify(desnormalizedBlog2).length)