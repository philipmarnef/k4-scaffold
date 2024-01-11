module.exports = {
  content: [
  './html/site/**/*.php',
  ],
  safelist: [
  ],
  theme: {
    colors: {
    },
    fontFamily: {
    },
    screens: {
      'xs':   '375px',  /* smartphone */
      'sm':   '640px',  /* phablet | + 335 */
      'max-sm':  { 'max': '809px' },
      'md':   '810px',  /* tablet, portrait | + 170 */
      'lg':  '1024px',  /* tablet, landscape | + 214 */
      'xl':  '1366px',  /* laptop | + 342 */
      '2xl': '1680px',  /* desktop | + 314 */
      '3xl': '1920px',  /* large screens | + 240 */
      'touch': { 'raw': '(hover: none)' },
      'notouch':   { 'raw': '(hover: hover)' },
    },
    extend: {
    },
  },
  plugins: [],
}
