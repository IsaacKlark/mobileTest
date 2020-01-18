import PropTypes, { arrayOf } from 'prop-types';
import React from 'react';
import {
  View, 
  Text, 
  Button, 
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import * as store from './store/store';
import styles from './styles/mainScreenStyle';
import * as currentPhoto from './store/currentPhoto';

const HomeScreen = ({ 
  navigation, 
  smallPhoto, 
  getUrl,
  isLoaded,
  loading,
  error,
  setCurrentPhoto,
}) => {

  if (error) {
    return (
      <View>
        <Text style={styles.error}>
          Something was wrong
        </Text>
        <Button onPress={() => {getUrl()}} title="Load again"/>
      </View>
    )
  }

  if (!isLoaded) {
    return (
      <View style={styles.container}>
        <Button onPress={() => {getUrl()}} title="Load photos"/>
      </View>
    )
  }

  if (loading) {
    <Text style={styles.container}>...Loading</Text>
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.list}>
        {smallPhoto.map(photoWithData => (
          <View 
            key={photoWithData.urls.thumb} 
            style={styles.smallPhotosList}
          >
            <TouchableHighlight 
              onPress={() => {
                setCurrentPhoto(photoWithData.urls.full);
                navigation.navigate('Photo');

              }}
            >
              <Image source={{
                uri: photoWithData.urls.thumb, 
                width: 120, 
                height: 120
                }}
            />
            </TouchableHighlight>
            <View style={styles.photoInfo}>
              <Text style={styles.photoName}>
                {photoWithData.user.name}
              </Text>
              <Text style={styles.authorName}>
                author: {photoWithData.user.username}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView> 
    </View>
  );
}

const getStore = state => ({
  smallPhoto: state.smallPhoto,
  isLoaded: state.isLoaded,
  loading: state.loading,
  error: state.error,
})

const setStoreData = {
  getUrl: store.getUrl,
  setCurrentPhoto: currentPhoto.setCurrentPhoto,
}

HomeScreen.propTypes = {
  smallPhoto: PropTypes.arrayOf(PropTypes.any).isRequired,
  isLoaded: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  getUrl: PropTypes.func.isRequired,
  setCurrentPhoto: PropTypes.func.isRequired,
}

export default connect(getStore, setStoreData)(HomeScreen);