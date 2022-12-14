const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  frame: '1280px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const deviceSizes = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  frame: `(max-width: ${size.frame})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`
}

const defaultFeedUrl = 'http://localhost:7000/posts'
const defaultAmountOfPosts = 3
const defaultRefreshIntervalMilisecs = 60000

export const defaultFeedParameters = {
  defaultFeedUrl,
  defaultAmountOfPosts,
  defaultRefreshIntervalMilisecs
}
