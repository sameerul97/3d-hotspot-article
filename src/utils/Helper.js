function getImagePath() {
  const url = window.location.href.split('/')[2]
  if (url === 'planetradio.co.uk' || url === 'creative.bauermedia.co.uk') {
    return '/iframe-test/index/'
  } else {
    // return "http://localhost/api";
    return ''
  }
}

export const IMAGE_PATH = getImagePath()
