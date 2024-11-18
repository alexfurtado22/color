import { ThemeColorToggle } from '@/components/theme-color-toggle'
import { ThemeModeToggle } from '@/components/theme-mode-toggle'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='grid grid-cols-2 items-center justify-center'>
      <div className='col-span-3 flex items-center justify-between gap-4 holder max-md:flex-col'>
        <div>
          <Image
            className='h-[228] w-[248] dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/skull2.svg'
            alt='Next.js Logo'
            width={247} // Replace 100 with the desired width
            height={228}
            priority
          />
        </div>
        <p className='rounded-lg border border-gray-300 bg-zinc-200 px-3 py-5 text-fluid-00 text-primary dark:border-neutral-800 dark:bg-zinc-800/30'>
          Get started by colors&nbsp;
        </p>
        <div className='flex items-center justify-center gap-1'>
          <ThemeColorToggle />
          <ThemeModeToggle />
        </div>
      </div>
      <div className='grid-adapt-mixin col-span-3 items-center justify-center holder section @sm:max-md:grid-cols-1'>
        <div className='row-span-3 grid grid-rows-subgrid border-2 border-primary p-2 text-center'>
          <h3 className='text-fluid-base text-primary'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-fluid-00'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, minima error. Nemo ea
            autem possimus voluptatum sequi hic commodi asperiores!
          </p>
          <Image
            className='h[500] w-[500] items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/logo.svg'
            alt='Next.js Logo'
            width={500} // Replace 100 with the desired width
            height={500}
            priority
          />
        </div>
        <div className='row-span-3 grid grid-rows-subgrid border-2 border-primary p-2 text-center'>
          <h3 className='text-fluid-base text-primary'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-fluid-00'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, minima error. Nemo ea
            autem possimus voluptatum sequi hic commodi asperiores!
          </p>
          <Image
            className='h[500] w-[500] items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/logo.svg'
            alt='Next.js Logo'
            width={500} // Replace 100 with the desired width
            height={500}
            priority
          />
        </div>
        <div className='row-span-3 grid grid-rows-subgrid border-2 border-primary p-2 text-center'>
          <h3 className='text-fluid-base text-primary'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-fluid-00'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, minima error. Nemo ea
            autem possimus voluptatum sequi hic commodi asperiores!
          </p>
          <Image
            className='h[500] w-[500] items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/logo.svg'
            alt='Next.js Logo'
            width={500} // Replace 100 with the desired width
            height={500}
            priority
          />
        </div>
        <div className='row-span-3 grid grid-rows-subgrid border-2 border-primary p-2 text-center'>
          <h3 className='text-fluid-base text-primary'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-fluid-00'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, minima error. Nemo ea
            autem possimus voluptatum sequi hic commodi asperiores!
          </p>
          <Image
            className='h[500] w-[500] items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/logo.svg'
            alt='Next.js Logo'
            width={500} // Replace 100 with the desired width
            height={500}
            priority
          />
        </div>
        <div className='row-span-3 grid grid-rows-subgrid border-2 border-primary p-2 text-center'>
          <h3 className='text-fluid-base text-primary'>Lorem ipsum dolor sit amet.</h3>
          <p className='text-fluid-00'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, minima error. Nemo ea
            autem possimus voluptatum sequi hic commodi asperiores!
          </p>
          <Image
            className='h[500] w-[500] items-center dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            src='/skull2.svg'
            alt='Next.js Logo'
            width={500} // Replace 100 with the desired width
            height={500}
            priority
          />
        </div>
      </div>
    </main>
  )
}
