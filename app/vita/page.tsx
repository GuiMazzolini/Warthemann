import { life } from './Vita';
import { courses } from './Vita';


export default function Vita() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <h1 className="text-center font-serif text-4xl">Vita</h1>

      <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
        <img
          src="/andrea.jpg"
          alt="Andrea Warthemann"
          className="w-48 shrink-0 rounded-sm object-cover sm:w-56"
        />
        <p className="max-w-xl text-left text-lg leading-relaxed">
          Seit Mai 2024 Buchhändlerin in Lindenberg im Allgäu, Buch Netzer Literatur & Café.
        </p>
      </div>

      <section className="mt-16 bg-card px-8 py-12 text-stone-900 sm:px-14 sm:py-16">
        <h2 className="font-serif text-2xl">Lebenslauf</h2>
        <ol className="mt-8 space-y-8 border-l border-stone-300 pl-8">
          {life.map((entry) => (
            <li key={entry.year}>
              <p className="font-serif text-[#c4a574]">{entry.year}</p>
              <p className="mt-1 leading-relaxed">{entry.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 bg-card px-8 py-12 text-stone-900 sm:px-14 sm:py-16">
        <h2 className="font-serif text-2xl">Fortbildungen</h2>
        <ul className="mt-8 space-y-6">
          {courses.map((entry) => (
            <li key={`${entry.year}-${entry.text}`}>
              <p className="text-sm opacity-70">{entry.year}</p>
              <p className="mt-1 leading-relaxed">{entry.text}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
