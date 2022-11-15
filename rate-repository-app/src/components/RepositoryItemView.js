import Text from './Text'
import useRepository from '../hooks/useRepository'
import RepositoryItem from './RepositoryItem'
import { useParams } from 'react-router-native'

// ? 10.19 view to individual RepositoryItem

const RepositoryItemView = () => {
    const { id } = useParams()
    const { repository } = useRepository(id)

    if(!repository) return <Text>Loading repo...</Text>

    return <RepositoryItem item={repository} showURLbutton={true} />
}

export default RepositoryItemView