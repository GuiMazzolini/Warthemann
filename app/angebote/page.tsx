import Link from 'next/link';
import { groups } from './groups';


export default function Angebote() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16 text-center">
      <h1 className="font-serif text-4xl">Angebote</h1>
      <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm justify-center">
        {groups.map((group) => (
          <a key={group.id} href={`#${group.id}`} className="underline">
            {group.nav}
          </a>
        ))}
      </nav>

      <div className="mt-12 space-y-14">
        {groups.map((group) => {

          return (
            <section
              key={group.id}
              id={group.id}
              className="scroll-mt-8 border border-stone-300 bg-[#c4a574] p-2"
            >
              <div className="border border-stone-300 bg-white px-8 py-12 text-stone-900 sm:px-14 sm:py-16">
                <h2 className="mx-auto w-fit border-b border-[#c4a574] pb-2 text-center font-serif text-2xl">
                  {group.title}
                </h2>
                <div className="relative mt-12">
                  <div
                    className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-stone-300 sm:block"
                    aria-hidden="true"
                  />
                  <ul className="grid gap-8 text-center sm:grid-cols-2 sm:gap-x-16 sm:text-left">
                    {group.offers.map((offer) => (
                      <li key={offer.title}>
                        <h3 className="mx-auto w-fit border-b border-[#c4a574] pb-1 font-serif text-lg sm:mx-0">
                          {offer.title}
                        </h3>
                        {offer.line ? (
                          <p className="mt-2 text-sm leading-relaxed text-stone-600">{offer.line}</p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <p className="mt-14 border-t border-stone-300 pt-10">
        Das ist nur eine Auswahl aus meinem Angebot, gerne können wir gemeinsam ganz
        individuell und aktuell ein Konzept für Sie und/oder Ihre Einrichtung erstellen!{' '}
        <Link href="/kontakt" className="underline">
          Anfrage schreiben
        </Link>
      </p>
    </main>
  );
}
