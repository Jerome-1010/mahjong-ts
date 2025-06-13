type Commitment = {
  title: string;
  description: string;
  createdAt: Date;
  deadline: Date;
  progress: number;
  status: 'fulfilled' | 'not fulfilled' | 'in progress';
  isImportant: boolean;
};
type Party = '自由民主党' | '民主党' | '公明党' | '日本維新の会' | '国民民主党' | '社民党' | 'れいわ新選組' | 'その他';

type Speech = {
  nameOfHouse: string;
  nameOfMeeting: string;
  issue: string;
  date: Date;
  speaker: string;
  speakerPosition: string;
  url: string;
};

type SpeechDetail = Speech & {
  speech: string;
};

type SpeechSummary = Speech & {
  summaryHeadline: string;
  summaryBody: string;
  details: SpeechDetail[];
};

type GiinCard = {
  imageUrl: string;
  name: string;
  party: Party;
  isIncumbent: boolean;
  commitments: Commitment[];
  speechSummaries: SpeechSummary[];
};
