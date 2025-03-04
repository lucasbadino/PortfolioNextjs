import { Cover } from '../components/Cover';

export default function Home() {
  return (
    <main className="flex min-h-[100vh] h-full bg-no-repeat bg gradient-cover">
      <Cover />
      <p>Introduction</p>
    </main>
  );
}
