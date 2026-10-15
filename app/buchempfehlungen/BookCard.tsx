'use client';

import { useLayoutEffect, useRef, useState } from 'react';

type Book = {
  title: string;
  age: string;
  author: string;
  publisher: string;
  price: string;
  image: string;
  text: string[];
};

type Phase = 'plain' | 'off' | 'in';

export function BookCard({
  book,
  imageFirst,
  colorClass,
}: {
  book: Book;
  imageFirst: boolean;
  colorClass: string;
}) {
  const card = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>('plain');

  useLayoutEffect(() => {
    const element = card.current;
    if (!element) return;

    const inView = () => {
      const box = element.getBoundingClientRect();
      return box.top < window.innerHeight * 0.85 && box.bottom > 0;
    };

    setPhase('off');

    if (inView()) {
      const frame = requestAnimationFrame(() => setPhase('in'));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setPhase('in');
        observer.disconnect();
      },
      { threshold: 0.2 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fromSide = imageFirst ? 'lg:-translate-x-10 lg:opacity-0' : 'lg:translate-x-10 lg:opacity-0';
  const motion =
    phase === 'off' ? fromSide : phase === 'in' ? 'translate-x-0 opacity-100' : '';

  return (
    <article
      ref={card}
      className={`-mx-6 border-y border-stone-300 px-6 py-12 text-left text-stone-900 transition duration-700 ease-out sm:px-10 lg:mx-0 lg:border lg:px-14 lg:py-16 motion-reduce:translate-x-0 motion-reduce:opacity-100 ${colorClass} ${motion}`}
    >
      <div
        className={`grid items-start gap-10 lg:items-center lg:gap-0 ${
          imageFirst
            ? 'lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)]'
            : 'lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]'
        }`}
      >
        <figure
          className={`text-center lg:px-4 ${
            imageFirst
              ? 'lg:border-r lg:border-stone-300'
              : 'lg:order-2 lg:border-l lg:border-stone-300'
          }`}
        >
          <img src={book.image} alt={book.title} className="mx-auto w-44" />
          <figcaption className="mt-4 text-sm leading-relaxed">
            <p>{book.author}</p>
            <p className="text-stone-600">{book.publisher}</p>
            <p className="text-stone-600">{book.price}</p>
          </figcaption>
        </figure>
        <div className={`lg:px-10 ${imageFirst ? '' : 'lg:order-1'}`}>
          <p className="text-sm text-stone-500">{book.age}</p>
          <h2 className="mt-2 w-fit border-b border-[#c4a574] pb-2 font-serif text-2xl leading-snug">
            {book.title}
          </h2>
          {book.text.map((paragraph) => (
            <p key={paragraph} className="mt-6 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
