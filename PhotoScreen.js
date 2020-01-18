import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import styles from './styles/photoScreenStyle';

const PhotoScreen = ({ currentPhoto }) => {
    return (
        <Image source={{uri: currentPhoto}} style={styles.photo}/>
    );
}

const getStore = state => ({
    currentPhoto: state.currentPhoto,
})

PhotoScreen.propTypes = {
    currentPhoto: PropTypes.string.isRequired,
}

export default connect(getStore)(PhotoScreen);