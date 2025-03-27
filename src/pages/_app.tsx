// pages/_app.tsx
import { ModalProvider } from '@/webstack/modal/ModalContext';
import "@/styles/global.css"; // ✅ Updated path

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <div className="bg-green-500 text-white p-4 rounded">
  Tailwind is alive 🎉
</div>
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp;