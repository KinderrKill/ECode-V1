import internal from 'stream';
import { PocketBaseRecord } from './../../lib/pocketBase';

export interface ContactFormRecord extends PocketBaseRecord {
  name: string;
  email: string;
  subject: string;
  content: string;
}
