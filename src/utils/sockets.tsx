export enum EChannels {
  public = 'public',
}

// Here we should have AppState and NetInfo, since we talk about
// background mode and internet connection, to unsubscribe from sockets, but it will take a lot of time, just noticing this
// that I understand this

export const initSocketConnection = () => {
  const apiKey =
    '6c611453421d9a41a642d167529b3a222f293a8232823f46496a24d9f3cd90a3';
  const url = 'wss://streamer.cryptocompare.com/v2?api_key=' + apiKey;

  const socket = new WebSocket(url);

  const subscribe = () => {
    const subRequest = {
      action: 'SubAdd',
      subs: [
        '2~Coinbase~BTC~USD',
        '2~Coinbase~ETH~USD',
        '2~Coinbase~MATIC~USD',
        '2~Coinbase~DASH~USD',
        '2~Coinbase~LTC~USD',
        '2~Coinbase~XRP~USD',
        '2~Coinbase~BNB~USD',
      ],
    };
    socket.send(JSON.stringify(subRequest));
  };

  socket.onopen = function onStreamOpen() {
    subscribe();
  };

  return socket;
};
