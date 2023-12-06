import type { Metadata } from 'next';
import Title from './components/Title';
import DemoButton from './components/DemoButton';
import TextInput from './components/TextInput';
import MoreInfo from './components/MoreInfo';
import CornerTop from './components/decor/CornerTop';
import CornerBottom from './components/decor/CornerBottom';

export const metadata: Metadata = {
  title: 'EssayInsight',
  description: 'some description',
};

export default function Home() {
  return (
    <div className="m-0 p-0 box-border ">
      <main className="flex flex-col h-screen">
        <CornerTop />
        <header>
          <Title />
        </header>
        <section className="flex flex-col items-center">
          <DemoButton />
          <TextInput />
        </section>
      </main>
    </div>
  );
}
