'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import { Icons } from './icon';

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4  md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <div className="h-6 w-6 bg-neutral-100 border-neutral-300 border dark:bg-white rounded-md flex items-center justify-center p-1">
          <Icons.logo className="h-5 w-5 text-black " />
        </div>

        <span className=" font-bold lg:inline-block">Aurion UI</span>
      </span>
      <nav className=" items-center gap-4 text-sm xl:gap-6 hidden md:flex">
        <Link
          href="/docs/installation"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/docs/installation' ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Docs
        </span>

        <Link
          href="/blocks"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/blocks') ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Blocks
        </span>
        <Link href="/blog" className={cn(
          'transition-colors hover:text-foreground/80',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/80',
        )}>
          Blogs
        </span>

        <Link
          href="/colors"
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/colors') ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          Colors
        </span>
      </nav>
    </div>
  );
}
