import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';

const DetailsPage = ({ route }) => {
  const cardDetails = route.params.cardDetails;
  const imageSource = cardDetails.urlToImage
  ?  cardDetails.urlToImage
  : 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png';


  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />

      <Text style={styles.title}>{cardDetails.title}</Text>
      <Text style={styles.source}>{cardDetails.source.name}</Text>
      <Text style={styles.publishedAt}>
        Published on {new Date(cardDetails.publishedAt).toDateString()}
      </Text>
      <Text style={styles.description}>{cardDetails.description}</Text>
      <Text style={styles.content}>{cardDetails.content}</Text>
      <Text
        style={styles.url}
        onPress={()=>Linking.openURL(cardDetails.url)}
      >
        Read more
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
    
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  source: {
    fontSize: 18,
    color: '#666',
    marginBottom: 4,
  },
  publishedAt: {
    fontSize: 14,
    color: '#888',
    marginBottom: 16,
  },
  description: {
    fontSize: 20,
    marginBottom: 16,
    color: '#444',
  },
  content: {
    fontSize: 18,
    marginBottom: 16,
    lineHeight: 26,
    color: '#555',
  },
  url: {
    fontSize: 18,
    color: '#007bff',
    textDecorationLine: 'underline',
  },
});

export default DetailsPage;
