interface imgContent {
  src: string;
}

interface titleContent {
  text: string;
  fontSize: string;
}

interface textContent {
  text: string;
}

type content = imgContent | textContent | titleContent;

export interface Projects {
  [key: string]: {
    coverSrc: string;
    title: string;
    content: content[];
  };
}