import { handlers } from "./handlers";
import { setupServer } from "msw/node";

const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
