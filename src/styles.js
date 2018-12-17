import { StyleSheet } from 'react-native';

import Color from '~/config/Color';

const styles = StyleSheet.create({
  navigator: {
    flex: 0.1,
    backgroundColor: Color.white,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNavigator: {
    marginTop: 30,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Color.lightRed,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default styles;
