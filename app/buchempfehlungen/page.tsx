import { BookDoodles } from './BookDoodles';

const books = [
  {
    title: 'Die Prinzessin, die auszog, den Prinzen zu retten',
    age: 'Ab 8 Jahren',
    author: 'Eva Rottmann',
    publisher: 'Jacoby und Stuart',
    price: '12€',
    image: '/Rotmann.jpg',
    text: [
      '„Es war einmal eine Prinzessin. Die wohnte in einem Schloss. Wo auch sonst. Wir sind ja hier in einem Märchen. Gewisse Dinge sind in einem Märchen IMMER gleich. Das Schloss steht IMMER auf einem grünen Hügel…“ So beginnt diese feine Geschichte von Eva Rottmann, in der sie die Märchenverhältnisse etwas auf den Kopf stellt! Als nämlich gerade der Prinz seiner Braut gestanden hat, dass er Angst vor „der Sache mit dem Drachen“ hat, steht auch dieser schon etwas wacklig und altersschwach im Thronsaal. Da auch seine Augen nicht mehr so gut sind, verwechselt er die mutige Prinzessin mit dem ängstlichen, kreischenden Prinzen und entführt diesen.',
      'Es muss nicht IMMER alles so bleiben, wie es mal war! Verhältnisse können sich ändern, das zeigt Eva Rottmann mit einer gehörigen Portion Humor, sehr passend illustriert von Claire Lenkova.',
    ],
  },
  {
    title: 'Wie ein leuchtender Stern',
    age: 'Junge Erwachsene',
    author: 'Tahereh Mafi',
    publisher: 'Sauerländer Verlag',
    price: '16€',
    image: '/mafi.jpg',
    text: [
      'Eine Kleinstadt in den USA: Shadi erlebt als Muslima viele Formen der Diskriminierung. Als auch noch ihr geliebter Bruder bei einem Unfall stirbt, werden die Zustände in ihrer Familie ebenfalls für Shadi unerträglich. Und auch die Beziehung zu ihrer besten Freundin ist getrübt, da diese eifersüchtig ist und befürchtet, dass Shadi in ihren Bruder Ali verliebt ist.',
      'Eine mitreißende Liebesgeschichte, ein aufwühlender Roman über Ausgrenzung und Trauer, Freundschaft und Familie!',
    ],
  },
  {
    title: 'Dinge, die so nicht bleiben können',
    age: 'Junge Erwachsene',
    author: 'Michael Gerard Bauer',
    publisher: 'Hanser Verlag',
    price: '15€',
    image: '/bauer.jpg',
    text: [
      'Tag der offenen Tür an einer Uni. Sebastian lernt dort die äußerst schlagfertige und auch etwas schräge Frida kennen. Ein Feuerwerk an witzigen Dialogen und Situationskomik fängt uns als Leser:in ein, um uns dann mit Sebastian, Frida und Tolly auf die Frage zusteuern zu lassen, wieviel meiner Geschichte, meiner Geheimnisse gebe ich preis?',
      'Humor und Tiefgang, eine seltene Mischung im Jugendbuch, wie gut, dass es den australischen Autor Michael Gerard Bauer gibt. Auch sehr empfehlenswert von ihm ist „Nennt mich nicht Ismael“ zum Thema Mobbing.',
    ],
  },
];

function BookCard({
  book,
  imageFirst,
}: {
  book: (typeof books)[number];
  imageFirst: boolean;
}) {
  return (
    <article className="-mx-6 border-y border-stone-300 bg-card px-6 py-12 text-left text-stone-900 sm:px-10 lg:mx-0 lg:border lg:px-14 lg:py-16">
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

export default function Buchempfehlungen() {
  return (
    <div className="relative">
      <BookDoodles />
      <main className="relative z-10 mx-auto w-full max-w-4xl px-6 py-16">
        <h1 className="text-center font-serif text-4xl">Buchempfehlungen</h1>
        <div className="mt-12 space-y-14">
          {books.map((book, index) => (
            <BookCard key={book.title} book={book} imageFirst={index % 2 === 0} />
          ))}
        </div>
      </main>
    </div>
  );
}
