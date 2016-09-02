export function scSearch(query) {
  const clientId = 'b24a338a276aec295fcedba78abc93e9'

  return fetch(`http://api.soundcloud.com/tracks?client_id=${clientId}&q=${query}&limit=15`, {
    method: 'GET'
  }).then((res) => res.json())
}
