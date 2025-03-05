import { TransitionPage } from '@/components/TransitionPage';
import { Cover } from '../components/Cover';
import { Introduction } from '@/components/introduction';

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <Cover />
        <Introduction />
      </div>
    </main>
  );
}
