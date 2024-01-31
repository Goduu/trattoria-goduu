import Image from 'next/image';
import menu from './itens.json';
import { FC } from 'react';
import { Serving } from './Serving';
import { Categories } from './Categories';

type ItemProps = typeof menu[0];

export const Item: FC<ItemProps> = (props) => {
  const { title, description, categories, size, serving, price, photo } = props;
  return (
    <div className="flex gap-5 w-full">
      <div className='w-1/4'>
        <Image
          className='rounded-xl'
          src={photo}
          width={240}
          height={200}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className='flex gap-5'>
          <div className='text-2xl font-bold rounded-md border p-2'> {title} </div>
          <Categories categories={categories} />
        </div>
        <div className='text-lg max-w-screen-md'> {description} </div>
        <div className='flex gap-5'>
          <Serving serving={serving} />
          <div className='flex gap-5'>
            <span className='text-lg font-medium text-neutral-5'> {size}g</span>
            <span className='text-2xl font-bold text-neutral-5'>€{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}