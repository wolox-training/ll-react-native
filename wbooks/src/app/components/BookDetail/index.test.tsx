import React from 'react';
import BookDetail from '@components/BookDetail';
import { render, screen } from '@testing-library/react-native';

import { MockedNavigator } from '../../../../__mocks__/Navigation';

const data = {
  title: 'Emmie Thiel',
  author: '',
  id: 10,
  year: ''
};

describe('BookDetail', () => {
  test('BookDetail', () => {
    render(<MockedNavigator component={BookDetail} params={data} />);
    const element = screen.getByText('Emmie Thiel');
    expect(element).not.toBeNull();
  });
  test('BookId', () => {
    render(<MockedNavigator component={BookDetail} params={data} />);
    const element = screen.queryByText('10') ? screen.queryByText('10') : null;
    expect(element).toBeNull();
  });
});
