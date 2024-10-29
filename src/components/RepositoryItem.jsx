import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  textContainer: {
    flexShrink: 1,
    marginLeft: 15,
  },
  fullName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#586069',
    marginVertical: 4,
  },
  language: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#0366d6',
    color: 'white',
    borderRadius: 4,
    alignSelf: 'flex-start',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
  statCount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 12,
    color: '#586069',
  },
  githubButton: {
    backgroundColor: '#000',
    color: '#ffffff',
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 8,
    textAlign: 'center',
    marginTop: 15,
    fontSize: 16,
  }
});

// Helper function to format counts (e.g., 8439 to "8.4k")
const formatCount = (count) => {
  return count >= 1000 ? (count / 1000).toFixed(1) + 'k' : count.toString();
};




const RepositoryItem = ({ repository }) => (
  // const {navigate} = useNavigate();

  <View style={styles.container}>
    <View style={styles.infoContainer}>
      <Image style={styles.avatar} source={{ uri: repository.ownerAvatarUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.fullName}>{repository.fullName}</Text>
        <Text style={styles.description}>{repository.description}</Text>
        <Text style={styles.language}>{repository.language}</Text>
      </View>
    </View>
    <View style={styles.statsContainer}>
      <View style={styles.statItem}>
        <Text style={styles.statCount}>{formatCount(repository.stargazersCount)}</Text>
        <Text style={styles.statLabel}>Stars</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statCount}>{formatCount(repository.forksCount)}</Text>
        <Text style={styles.statLabel}>Forks</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statCount}>{repository.reviewCount}</Text>
        <Text style={styles.statLabel}>Reviews</Text>
      </View>
      <View style={styles.statItem}>
        <Text style={styles.statCount}>{repository.ratingAverage}</Text>
        <Text style={styles.statLabel}>Rating</Text>
      </View>
    </View>
    <Pressable style={styles.githubButton}>Open in Github</Pressable>
  </View>
);

export default RepositoryItem;
