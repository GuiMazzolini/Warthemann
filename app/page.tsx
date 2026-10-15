import Link from 'next/link';
import { Kamishibai, StorySuitcase, WorldJourney } from './components/OfferIcons';

const offers = [
  {
    title: 'Für Kitas',
    line: 'Der Erzählkoffer geht auf.',
    href: '/angebote#kitas',
    icon: StorySuitcase,
  },
  {
    title: 'Für Schulen',
    line: 'In 90 Minuten um die Welt.',
    href: '/angebote#grundschule',
    icon: WorldJourney,
  },
  {
    title: 'Für Fortbildungen',
    line: 'Vorlesen, Kamishibai, neue Bücher.',
    href: '/angebote#fortbildungen',
    icon: Kamishibai,
  },
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-2 sm:px-6 py-16">
      <div className="mt-8 flex flex-col items-center gap-8 lg:flex-row lg:items-center">
        <img
          src="/andrea.jpg"
          alt="Andrea Warthemann"
          className="w-50 shrink-0 rounded-sm object-cover sm:w-70"
        />
        <figure className="max-w-xl text-left">
        <blockquote className="font-serif text-3xl leading-snug text-stone-900 sm:text-4xl">
          <p>
            <span className="mr-1 font-serif text-5xl leading-none text-stone-400" aria-hidden="true">
              „
            </span>
            Viele Wege führen in die Welt der Bücher, man muss nur den passenden finden!
          </p>
        </blockquote>
          <figcaption className="mt-5 text-sm tracking-wide text-stone-600">
            Andrea Warthemann
            <span className="mt-1 block">
              Buchhändlerin und Literaturpädagogin
            </span>
          </figcaption>
        </figure>
      </div>

      <div className="-mx-2 mt-14 space-y-6 border-t border-stone-300 bg-card px-6 py-12 pt-10 text-left text-lg leading-relaxed text-stone-900 sm:-mx-6 sm:px-10 lg:mx-0 lg:px-14 lg:py-16">
        <p>
          <span className="float-left mr-2 font-serif text-5xl leading-none text-[#c4a574]">
            S
          </span>
          eit vielen Jahren engagiere ich mich beruflich als Buchhändlerin
          für das Lesen und die Leseförderung. Im November 2017 habe ich meine
          zusätzliche Ausbildung als Literaturpädagogin abgeschlossen
          (Akademie für kulturelle Bildung des Bundes und Landes
          Nordrhein-Westfalen in Remscheid). Diese besondere Qualifikation
          ergänzt meine bisherige Arbeit in Schulen und Kindergärten.
        </p>
        <p>
          <span className="float-left mr-2 font-serif text-5xl leading-none text-[#c4a574]">
            A
          </span>
          ls Literaturpädagogin entwickle ich unterschiedliche Konzepte, mit
          denen ich abwechslungsreich, spielerisch, ohne Benotung und unter
          Einbeziehung der Kinder/Jugendlichen zum Lesen motiviere. Das kann
          ein „Book-Casting“, eine „Reise in 90 Minuten mit Büchern um die
          Welt“, ein „Bücher-Duell“ oder ein „Geschichtenkoffer“ sein. Es
          gilt, die Vielfalt der Bücherwelt aufzuzeigen und die Lust auf das
          Buch und die Sprache zu wecken. So werden nicht nur sprachliche
          Kompetenzen gestärkt, sondern auch soziale, z.B. Empathiefähigkeit.
        </p>
        <p>
          <span className="float-left mr-2 font-serif text-5xl leading-none text-[#c4a574]">
            U
          </span>
          m mich mit anderen LiteraturvermittlerInnen auszutauschen, mich zu
          informieren und fortzubilden bin ich Mitglied im Arbeitskreis für
          Jugendliteratur e.V., München und im Netzwerk Literaturpädagogik.
        </p>
      </div>
      <section className="mt-16 border-t border-stone-300 pt-10">
        <h2 className="font-serif text-2xl text-stone-900">Angebote</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-3">
          {offers.map((offer) => {
            const Icon = offer.icon;

            return (
              <li key={offer.title}>
                <Link
                  href={offer.href}
                  className="flex h-full flex-col border border-stone-200 bg-card px-5 py-6 text-stone-900 items-center"
                >
                  <Icon/>
                  <span className="mt-4 text-lg">{offer.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-stone-600">
                    {offer.line}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <p className="mt-8 text-stone-700">
          Passt eines davon zu Ihrer Gruppe? Schreiben Sie mir Alter und Anlass.{' '}
          <Link href="/kontakt" className="text-stone-900 underline">
            Anfrage schreiben
          </Link>
        </p>
      </section>
    </main>
  );
}
