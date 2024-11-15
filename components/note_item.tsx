import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Note } from '../types/types'

const NoteItem = ({note}: {note: Note}) => {
  return (
    <View style={styles.noteCard}>
      <Text style={styles.noteTitle}>{note.title}</Text>
      <Text style={styles.noteContent}>{note.body}</Text>
    </View>
  )
}

export default NoteItem

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginHorizontal: 8,
    marginVertical: 8,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  noteContent: {
    fontSize: 16,
    color: '#666'
  },
})