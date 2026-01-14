
export interface Memory {
  id: number;
  title: string;
  description: string;
  gradient: string;
}

export interface PromiseItem {
  id: number;
  text: string;
}

export enum Section {
  Intro = 'intro',
  Letter = 'letter',
  Memories = 'memories',
  Reasons = 'reasons',
  Celebration = 'celebration',
  Promises = 'promises',
  Closing = 'closing'
}
