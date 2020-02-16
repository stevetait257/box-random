function getBoxerByIdFromURL() {
  const params = new Map(location.search.slice(1).split('&').map(keyValuePair => keyValuePair.split('=')))
  const boxerId = params.get('id');
  return boxerId;
};
