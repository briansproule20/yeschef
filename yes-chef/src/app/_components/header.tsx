import SignInButton from '@/app/_components/echo/sign-in-button';
import { isSignedIn } from '@/echo';
import { EchoTokens } from '@merit-systems/echo-next-sdk/client';
import Image from 'next/image';
import type { FC } from 'react';

interface HeaderProps {
  title?: string;
  className?: string;
}

const Header: FC<HeaderProps> = async ({
  title = 'My App',
  className = '',
}) => {
  const signedIn = await isSignedIn();

  return (
    <header
      className={`border-gray-200 border-b bg-white shadow-sm ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src="/yes-chef favicon.png"
              alt="Yes Chef"
              width={48}
              height={48}
              className="rounded"
            />
            <div className="flex items-center space-x-3">
              <h1 className="font-semibold text-gray-900 text-xl">{title}</h1>
              <span className="text-gray-500 text-sm font-medium">
                AI powered recipe suggestions, alterations
              </span>
            </div>
          </div>

          <nav className="flex items-center space-x-4">
            {!signedIn ? <SignInButton /> : <EchoTokens />}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
