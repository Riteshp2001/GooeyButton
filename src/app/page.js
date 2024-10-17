import Image from "next/image";

export default function Home() {
  return (
    import GooeyButton from '@/components/GooeyButton';

    export default function Home() {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-100 dark:bg-gray-900">
          <h1 className="text-4xl font-bold mb-8">A Gooey button</h1>
          <p className="text-xl mb-8">Hover to experience! (single element)</p>
          <div className="mb-8">
            <GooeyButton />
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Inspired by <em>(and svg filter copied from)</em>{' '}
            <a
              href="https://codepen.io/thebabydino/pen/NWVdKaG"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Ana's codepen
            </a>
            , go give her a ❤️!
          </p>
        </main>
      );
    }
  );
}
