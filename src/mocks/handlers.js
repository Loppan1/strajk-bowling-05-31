import { http, HttpResponse } from 'msw';

const booking = {
    "when": "2024-06-02T18:15",
    "lanes": "1",
    "people": "1",
    "shoes": [
      "42"
    ],
    "price": 220,
    "id": "STR6869ALYZ",
    "active": true
  }

export const handlers = [

  http.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com/', () => {
    return HttpResponse.json(booking);
  }),
];