import type { Metadata } from 'next';
import Title from './components/Title';
import Head from 'next/head';
import Corner from './components/decor/Corner';
import DemoButton from './components/DemoButton';
import TextInput from './components/TextInput';

export const metadata: Metadata = {
  title: 'EssayInsight',
  description: 'some description',
};

export default function Home() {
  return (
    <div className="m-0 p-0 box-border ">
      <Head>
        <title>EssayInsight</title>
      </Head>
      <main className="bg-color=F5F5C6">
        <Corner />
        <header>
          <Title />
        </header>
        <section>
          <DemoButton />
          <TextInput />
        </section>
      </main>
    </div>
  );
}
