const accessToken = 'BQAZJtYXuyt27N7lYT1OEtxWEwMdnB3OJhbfb8BB7qzi-40o8Up0JWUItBf2I3K7DcRbZD9PtL1s0Vu9KvInubLHPRv1BVgiq21PHB-JXwLS3EI887tfrAw5SpN-_VvL-F4m5PLrXTmY0bERnNdQbwal8swxfEChLn3t2aS3xewLLQ'

fetch('https://api.spotify.com/v1/playlists/3kIykIdSSGZcgU7NsA2aZA', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));