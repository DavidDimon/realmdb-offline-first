import Realm from 'realm'

export const openRealm = params =>
  new Promise((resolve, reject) => {
    Realm.open(params)
      .then(realm => resolve(realm))
      .catch(error => reject(error))
  })
