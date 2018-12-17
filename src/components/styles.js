import { StyleSheet } from 'react-native';

import Color from '~/config/Color';

const styles = StyleSheet.create({
  containerFirst: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
    marginTop: 0,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: Color.white,
    marginTop: 20,
    borderRadius: 5,
  },

  header: {
    flex: 1,
    width: '100%',
    height: 50,
    padding: 10,
    borderBottomWidth: 0.2,
    borderBottomColor: Color.lightGray,
    borderRadius: 12,
  },
  title: {
    fontWeight: 'bold',
  },
  author: {
    color: Color.darkGray,
    fontSize: 10,
  },
  description: {
    fontSize: 12,
  },

  body: {
    flex: 1,
    width: '100%',
    height: 100,
    padding: 10,
  },
});

export default styles;
