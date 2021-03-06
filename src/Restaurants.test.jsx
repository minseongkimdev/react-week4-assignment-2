import React from 'react';

import { render } from '@testing-library/react';

import Restaurants from './Restaurants';

describe('Restaurants', () => {
  const restaurants = [
    {
      id: 1, title: '김밥제국', category: '분식', address: '서울시 강남구 역삼동',
    },
  ];

  it('Render Restaurants Title', () => {
    const { getByText } = render((
      <Restaurants restaurants={restaurants} />
    ));

    expect(getByText(/김밥제국/)).not.toBeNull();
  });
});
