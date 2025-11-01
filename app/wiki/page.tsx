import ExpandableSection from "./ExpandableSection";
import Footer from "@/components/footer";

export default function WikiPage() {
  return (
    <main>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-6xl">Wiki</h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Food spots, activities, apartments in San Diego, and more!
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 pb-20">
        <ExpandableSection title="Recommended Apartments">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Costa Verde Apartment</strong> - 12 min bus ride to UCSD and 5 min walk to UTC. Around $3400/month total for a 2 bedroom</li>
            <li><strong>La Regencia</strong> – </li>
          </ul>
        </ExpandableSection>

        <ExpandableSection title="Top Food Spots">
            <ul>
                <li className="text-lg font-bold">Mecixan</li>
                San Diego is famous for its Mexican food. You definitely won't find anything like this back in Indonesia.
                <ul className="list-disc list-inside gap-4">
                    <li><b>Tacos El Gordo</b> - The most famous taco place in San Diego.</li>
                    <li><b>The Taco Stand</b> - Only a 20 min bus ride from UCSD.</li>
                </ul>

                <li className="text-lg font-bold">Korean</li>
                <ul className="list-disc list-inside gap-4">
                    <li><b>Woomiok</b> - We recommend their galbi-jjim, with cheese.</li>
                </ul>
            </ul>
        </ExpandableSection>
      </section>

      <Footer />
    </main>
  );
}
