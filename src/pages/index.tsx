import Filter from '../components/filter';

type Props = {
  darkMode: boolean;
};

export default function Home({ darkMode }: Props) {
  return (
    <div>
      <Filter darkMode={darkMode} />
    </div>
  );
}
