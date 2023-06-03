interface homePageProps {
  count: number;
  doubleCount: number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
}

type LinkItem = {
  href: string;
  title: string;
  description: string;
};

interface LinksProps {
  items: LinkItem[];
  handleReduce: () => void;
}
