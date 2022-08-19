import React from 'react';
import BookDetail from '@components/BookDetail';
import { render, screen, waitFor } from '@testing-library/react-native';

import { MockedNavigator } from '../../../../__mocks__/Navigation';
import BookList from '../BookList';

const data = {
  title: 'Emmie Thiel',
  author: '',
  id: 10,
  year: ''
};

render(<MockedNavigator component={BookDetail} params={data} />);
const element = screen.getByText('Emmie Thiel');
/* const id = screen.getByText('10'); */

function waitFor<T>(expectation: () => T, { timeout: number = 1000, interval: number = 50 }): Promise<T> {}

describe('BookDetail', () => {
  test('BookDetail', () => {
    expect(element).not.toBeNull();
  });
  test('waiting for an Banana to be ready', async () => {
    render(<BookList />);
    await waitFor(() => screen.getByText('10'));
  });
});
