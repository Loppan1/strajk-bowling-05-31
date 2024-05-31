import { setupServer } from 'msw/node';
import { rest } from 'msw';

// Mock handlers for your API endpoints
const handlers = [
  rest.post('https://h5jbtjv6if.execute-api.eu-north-1.amazonaws.com', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        active: true,
        message: 'Booking confirmed!',
      })
    );
  }),
];

// Setup server
const server = setupServer(...handlers);

export { server, rest };