import React from 'react'
import { FlatList } from 'react-native'
import { Container, Text } from './styles'

import { getUsers } from '@services/client/users'

const Home = () => {
  const [users, setUsers] = React.useState([])

  const loadUsers = async () => {
    const data = await getUsers()
    setUsers(data)
  }

  React.useEffect(() => {
    loadUsers()
  }, [])

  return (
    <Container>
      <Text>{`count users: ${users.length}`}</Text>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <Text key={`user_${index}`}>{`${item.name} / ${item.age}`}</Text>
        )}
      />
    </Container>
  )
}

export default Home
