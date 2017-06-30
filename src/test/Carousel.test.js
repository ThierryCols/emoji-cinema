import React from 'react';
import Carousel from '../Carousel/Carousel';
import renderer from 'react-test-renderer';
import movieList from '../store'

it('renders correctly', () => {
  const tree = renderer.create(
    <Carousel
      movieList={movieList}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
