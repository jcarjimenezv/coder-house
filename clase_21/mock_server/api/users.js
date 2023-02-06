import MemoryContainer from '../containers/MemoryContainer.js'
import { userGenerate } from '../utils/usersGenerator.js'
import { idGenerate } from '../utils/idsGenerator.js'

class ApiUsersMock extends MemoryContainer {
    constructor() { super() }

    popular(cant = 50) {
        const news = []
        for (let i = 0; i < cant; i++) {
            const newUser = userGenerate(idGenerate())
            const saved = this.guardar(newUser)
            news.push(saved)
        }
        return news
    }
}

export default ApiUsersMock