import faker from 'faker'
faker.locale = 'es'

function userGenerate(id) {
  return {
    id,
    nombre: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    image: faker.image.avatar(),
  }
}

export { userGenerate }