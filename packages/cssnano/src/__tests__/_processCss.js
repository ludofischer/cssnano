import postcss from 'postcss';
import cssnano from '..';

export default function processCss(fixture, expected, options = {}) {
  return () =>
    postcss([cssnano])
      .process(fixture, options)
      .then(({ css }) => {
        expect(css).toBe(expected);
      });
}

export function passthrough(fixture, options = {}) {
  return processCss(fixture, fixture, options);
}
