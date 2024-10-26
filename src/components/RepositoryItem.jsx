import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 5,
  },
  language: {
    marginTop: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#0366d6',
    color: 'white',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
});

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <View style={styles.info}>
      <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.fullName}>{repository.fullName}</Text>
        <Text style={styles.description}>{repository.description}</Text>
        <Text style={styles.language}>{repository.language}</Text>
      </View>
    </View>
  </View>
);

export default RepositoryItem;
