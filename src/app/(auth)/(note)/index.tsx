import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useNotes from '../../../../hooks/use-notes'
import NoteItem from '../../../../components/note_item';
import {FontAwesome} from "@expo/vector-icons"

const Home = () => {
  const {notes, error, reload, isLoading} = useNotes();

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={reload}>
          <Text style={styles.refreshButtonText}>Refresh</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Notes</Text>
        <TouchableOpacity style={styles.refreshButton} onPress={reload}>
          <Text style={styles.refreshButtonText}>
            <FontAwesome size={30} name='refresh' />
          </Text>
        </TouchableOpacity>
      </View>
      {
        isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size='large' color='#008080' />
          </View>
        ) : (
      <FlatList showsVerticalScrollIndicator={false} data={notes} keyExtractor={(item) => item.id.toString()} numColumns={1} contentContainerStyle={styles.noteList} renderItem={({item}) => (<NoteItem note={item} />)} />
        )
      }
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#008080',
    paddingVertical: 16,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  noteList: {
    padding: 16
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  errorText: {
    fontSize: 18,
    marginBottom: 16,
    color: '#ff0000',
  },
  refreshButton: {
    backgroundColor: '#008080',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})