import Filter from '../components/filter';

type Props = {
  darkMode: boolean;
};

export default function Home({ darkMode }: Props) {
  return (
    <div>
      <Filter darkMode={darkMode} />
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
    </div>
  );
}
