import { Client, Account, Databases} from 'appwrite';

export const client = new Client();

const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const ENDPOINT = import.meta.env.VITE_APP_ENDPOINT
// const PROJECT_ID = import.meta.env.VITE_DOCKER_PROJECT_ID;
// const ENDPOINT = import.meta.env.VITE_DOCKER_ENDPOINT

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
