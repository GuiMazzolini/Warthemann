

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">      
      <div className="mt-8 flex flex-col items-center gap-8 sm:flex-row sm:items-center">
        <img
          src="/andrea.jpg"
          alt="Andrea Warthemann"
          className="w-50 shrink-0 rounded-sm object-cover sm:w-70"
        />    
        <figure className="max-w-xl text-left">
          <blockquote className="font-serif text-3xl leading-snug text-stone-900 sm:text-4xl">
            <p>„Viele Wege führen in die Welt der Bücher, man muss nur den passenden finden!“</p>
          </blockquote>
          <figcaption className="mt-5 text-sm tracking-wide text-stone-600">
            Andrea Warthemann
            <span className="mt-1 block">Buchhändlerin und Literaturpädagogin</span>
          </figcaption>
        </figure>
      </div>

        <div className="mt-14 space-y-4 text-left text-lg leading-relaxed text-stone-800">
          <p>Seit vielen Jahren engagiere ich mich beruflich als Buchhändlerin für das Lesen und die Leseförderung. Im November 2017 habe ich meine zusätzliche Ausbildung als Literaturpädagogin abgeschlossen (Akademie für kulturelle Bildung des Bundes und Landes Nordrhein-Westfalen in Remscheid). Diese besondere Qualifikation ergänzt  meine bisherige Arbeit in Schulen und Kindergärten.</p>
          <p>Als Literaturpädagogin entwickle ich unterschiedliche Konzepte, mit denen ich  abwechslungsreich, spielerisch, ohne Benotung und unter Einbeziehung der Kinder/Jugendlichen zum Lesen motiviere. Das kann ein „Book-Casting“, eine „Reise in 90 Minuten mit Büchern um die Welt“, ein „Bücher-Duell“ oder ein „Geschichtenkoffer“ sein. Es gilt, die Vielfalt der Bücherwelt aufzuzeigen und die Lust auf das Buch und die Sprache zu wecken. So werden nicht  nur sprachliche Kompetenzen gestärkt, sondern auch soziale, z.B. Empathiefähigkeit.</p>
          <p>Um mich mit anderen LiteraturvermittlerInnen auszutauschen, mich zu informieren und fortzubilden bin ich Mitglied im Arbeitskreis für Jugendliteratur e.V., München und im Netzwerk Literaturpädagogik.</p>
        </div>

    </main>
  );
}
