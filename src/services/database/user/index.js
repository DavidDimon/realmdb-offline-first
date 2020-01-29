import { openRealm } from '@services/database/utils'

const userSchema = {
  name: 'User',
  properties: {
    name: 'string',
    age: { type: 'int', default: 0 },
  },
}

class UserDB {
  constructor() {}

  async batchCreate(list = []) {
    const realmInstance = await openRealm({ schema: [userSchema] })
    if (!list) return
    try {
      realmInstance.write(() => {
        list.map(item => realmInstance.create('User', item))
      })
    } catch (error) {
      console.warn('ERROR_BATCH_USERS -> ', error)
    }
  }

  async getAll() {
    const instance = await openRealm({ schema: [userSchema] })
    return instance ? instance.objects('User') : []
  }
}

export { UserDB }
