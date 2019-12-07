/** TODO */
/** Duplicate of variables.less for now need to change both files */

const baseFontSize = 16;
const spaceDefault = 20;
const space = 1;
const breakpoints = {
  widthXSmall: (420 / baseFontSize),
  widthSmall: (544 / baseFontSize),
  widthMedium: (768 / baseFontSize),
  widthLarge: (920 / baseFontSize),
  widthXLarge: (1200 / baseFontSize),
};

export default {
  fonts: {
    baseFontSize,
    basePath: '/Assets',
    fontFamilyPrimary: 'barlow Helvetica Arial sans-serif',
    fontFamilySecondary: 'ubuntu Helvetica Arial serif',
    fontHeading: "ubuntu-bold",
    fontSubHeading: "barlow-bold"
  },
  container: {
    widthContainer: '1204px'
  },
  texts: {
    textSizeXSmall: '12px',
    textSizeSmall:  '14px',
    textSizeMedium: '16px',
    textSizeLarge:  '18px',
    textSizeXLarge: '20px'
  },
  colors: {
    backgroundColor: '#1A237E',
    backgroundGradient: 'linear-gradient(to bottom, rgba(255,0,0,0) 0%, rgba(255,0,0,.35) 100%)',
    colorBlack: '#000',
    colorWhite: '#fff',
    colorBlue: '#1A237E',
    colorTurquoise: '#41FFF5',
    colorPink: '#EC407A',
    colorText: '#fff',
    colorTextLight: '#aaa'
  },
  links: {
    colorLink: '#fff',
    colorLinkHover: '#ccc'
  },
  space: {
    spaceDefault: `${spaceDefault}px`,
    spaceXSmall:  `${spaceDefault / 2}px`,
    spaceSmall:   `${spaceDefault / 1.5}px`,
    spaceMedium:  `${spaceDefault}px`,
    spaceLarge:   `${spaceDefault * 1.5}px`,
    spaceXLarge:  `${spaceDefault * 2}px`,
    space: `${space}em`,
    spaceAndHalf:   `${space * 1.5}em`,
    spaceDouble:   `${space * 2}em`,
    spaceTriple:   `${space * 3}em`,
    spaceQuad:   `${space * 4}em`,
    spaceHalf:   `${space / 2}em`,
    spaceQuarter:  `${space / 4}em`,
  },
  breakpoints,
  media: {
    bpXSmall: `only screen and (min-width: ${breakpoints.widthXSmall}em), print`,
    bpSmall: `only screen and (min-width: ${breakpoints.widthSmall}em), print`,
    bpMedium: `only screen and (min-width: ${breakpoints.widthMedium}em), print`,
    bpLarge: `only screen and (min-width: ${breakpoints.widthLarge}em), print`,
    bpXLarge: `only screen and (min-width: ${breakpoints.widthXLarge}em)`,
    bpMediumMax: `only screen and (max-width: ${breakpoints.widthMedium}em), print`
  },
  prefixes: {
    prefixXSmall: "xsm-",
    prefixSmall: "sm-",
    prefixMedium: "md-",
    prefixLarge: "lg-",
    prefixXLarge: "xlg-",
  },
  menu: {
    menuTransition: 'left .4s ease-in-out',
  },
  gutter: {
    gutterSize: '24px' // needs to be in pixels
  }
}
