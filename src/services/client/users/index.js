import axios from 'axios'

import { userRequests } from '@services/client/constants'
import { UserDB } from '@services/database/user'

const instance = axios.create({
  baseURL: 'https://random-persons.herokuapp.com',
})

export const getUsers = async () => {
  const userDB = new UserDB()

  const result = await userDB.getAll()
  if (result.length > 0) {
    return result
  }

  const { data } = await instance.get(userRequests.GET_USERS)
  userDB.batchCreate(data.data)
  return data.data
}
