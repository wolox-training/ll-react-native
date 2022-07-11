import React from 'react';
import { SafeAreaView } from 'react-native';
import Book from '@app/components/Book';
import { BOOKS_MOCK } from '@constants/mockBooks';

function Home() {
  return (
    <SafeAreaView>
      <Book {...BOOKS_MOCK[0]} />
    </SafeAreaView>
  );
}
export default Home;
