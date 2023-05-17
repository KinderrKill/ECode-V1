import PocketBase, { Record } from 'pocketbase';

const pocketBase = new PocketBase(import.meta.env.VITE_POCKET_BASE_URL);

export interface PocketBaseRecord extends Record {}

export default pocketBase;
