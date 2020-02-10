function getBoxerByIdFromURL() {
  const params = new Map(location.search.slice(1).split('&').map(keyValuePair => keyValuePair.split('=')))
  const boxerId = params.get('id');
  console.log(boxerId)
  return boxerId;
};
