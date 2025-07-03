import Echo from 'laravel-echo';
import Pusher from 'pusher-js';

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: 'pusher',
  key: 'ft6jmvkc2p6a8h0rp5ij', // from .env
  wsHost: 'localhost',        // same as REVERB_HOST
  wsPort: 8080,               // same as REVERB_PORT
  forceTLS: false,
  encrypted: false,
  disableStats: true,
  enabledTransports: ['ws'],
  cluster: '', // 👈 important: explicitly set to empty string to avoid error
  authEndpoint: '/broadcasting/auth',
  auth: {
    headers: {
      'X-CSRF-TOKEN': document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content'),
    },
  },
});

export default echo;
