import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'lightblue',
    },
    error: {
      color: "red",
    },
    smallPhotosList: {
      flex: 1,
      height: 120,
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'flex-start',
      marginLeft: 20
    },
    list: {
      flex: 1,
      alignSelf: 'flex-start',
      width: Dimensions.get('window').width,
    },
    photoInfo: {
      marginLeft: 20,
      height: 120,
      justifyContent: 'center',
    },
    photoName: {
      fontSize: 16,
      color: 'green',
      fontWeight: '700',
    },
    authorName: {
        marginTop: 20,
    }
  });

  export default styles;