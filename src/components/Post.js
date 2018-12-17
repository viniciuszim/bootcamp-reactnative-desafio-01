import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const Post = ({ post, index }) => (
  <Fragment>
    <View style={index === 0 ? styles.containerFirst : styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.author}>{post.author}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.description}>{post.description}</Text>
      </View>
    </View>
  </Fragment>
);

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Post;
