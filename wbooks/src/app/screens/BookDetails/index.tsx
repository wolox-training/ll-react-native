import React from 'react';
<<<<<<< HEAD:wbooks/src/app/screens/DatailsBook/index.tsx
import DetailsBook from '@app/components/BookDetail';
import Comment from '@app/components/Comments';
=======
import BookDetail from '@app/components/BookDetail';
>>>>>>> Card-7.2:wbooks/src/app/screens/BookDetails/index.tsx
import { View } from 'react-native';

import styles from './styles';

function BookDetails() {
  return (
    <View style={styles.screen}>
<<<<<<< HEAD:wbooks/src/app/screens/DatailsBook/index.tsx
      <DetailsBook />
      <Comment />
=======
      <BookDetail />
>>>>>>> Card-7.2:wbooks/src/app/screens/BookDetails/index.tsx
    </View>
  );
}
export default BookDetails;
