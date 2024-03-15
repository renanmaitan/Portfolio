interface imgContent {
  imageSrc: string;
  imageAlt: string;
}

interface titleContent {
  title: string;
  fontSize: string;
}

interface textContent {
  text: string;
}

interface urlContent {
  url: string;
  urlText: string;
}

type content = imgContent | textContent | titleContent | urlContent;

export interface Projects {
  [key: string]: {
    coverSrc: string;
    title: string;
    subtitle: string;
    content: content[];
  };
}