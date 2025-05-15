import { env } from '@/utilities/env';
import axios from 'axios';

const server = new Proxy(axios, {
  get: (axios, method) => {
    const ports = ['post', 'put', 'patch', 'delete', 'get'];

    if (ports.includes(method)) {
      return (url = '', body = {}, config = {}) =>
        axios({
          method,
          url: `/${url}`.replace(/^\/\//, '/'),
          baseURL: env('VITE_API_URL', 'http://localhost:3001'),
          [{ get: 'params' }[method] ?? 'data']: body,
          ...config,
        }).catch(({ response }) => response);
    }

    return axios[method];
  },
});

export async function root() {
  const { data } = await server.get('/');

  return data;
}
