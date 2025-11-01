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

      <ExpandableSection title="Recommended Apartments">
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Costa Verde Apartment</strong> - 12 min bus ride to UCSD and 5 min walk to UTC. Around $3400/month total for a 2 bedroom</li>
          <li><strong>La Regencia</strong> – </li>
        </ul>
      </ExpandableSection>

      <ExpandableSection title="I'm bored. What can I do around here?">
          <ul className="space-y-2">

              <li className="text-lg font-bold">Tourist Spots🏖️</li>
              Filled with great beaches and great weather, SD is a popular tourist destination. Here are some touristy spots:
              <ul className="list-disc list-inside gap-4">
                  <li><b>San Diego Zoo</b> - Frequently ranked the best zoo in the world. Worth a visit if you like animals.</li>
                  <li><b>SeaWorld</b> - Rollercoasters, animal shows, and marine life.</li>
                  <li><b>Downtown San Diego</b> - Take a stroll around Seaport Village for the sunset then grab dinner at Little Italy.</li>
                  <li><b>La Jolla Cove</b> - You can see seals here in their natural habitat. Another great sunset spot. You can also go kayaking!</li>
                  <li><b>Balboa Park</b> - A nice stroll around historical/artistic buildings. Also many museums and gardens.</li>
              </ul>

              <li className="text-lg font-bold">Hiking🥾</li>
              San Diego has many great hiking trails. Here's some beginner ones:
              <ul className="list-disc list-inside gap-4">
                  <li><b>Torrey Pines State Natural Reserve</b> - You can walk here from UCSD. Relatively flat and great views.</li>
                  <li><b>Cowles Mountain</b> - Actual mountain but still beginner friendly. You'd need a car to get here. Around 2 hours up and down.</li>
              </ul>

              <li className="text-lg font-bold">Sports🏃</li>
              <ul className="list-disc list-inside gap-4">
                <li><b>Padel</b> - Check out Taktika for padel courts.</li>
                <li><b>Badminton</b> - Most Indonesian students play at Smash San Diego.</li>
                <li><b>Surfing</b></li>
              </ul>

              <li className="text-lg font-bold">Outside SD</li>
              For your long weekend trips:
              <ul className="list-disc list-inside gap-4">
                <li><b>Amusement Parks</b> - Disneyland, Universal Studios, Six Flags, Knott's Berry Farm. All within 2 hour drives or an Amtrak train ride.</li>
                <li><b>Los Angeles</b></li>
                <li><b>Joshua Tree National Park</b></li>
                <li><b>Palm Springs</b></li>
              </ul>
          </ul>
      </ExpandableSection>

      <ExpandableSection title="Food Spots">
          <ul className="space-y-2">
              <li className="text-lg font-bold">Mecixan🌮</li>
              San Diego is famous for its Mexican food. You won't find anything like this back in Indonesia.
              <ul className="list-disc list-inside gap-4">
                  <li><b>Tacos El Gordo</b> - Probably the most famous taco place in San Diego.</li>
                  <li><b>The Taco Stand</b> - Only a 20 min bus ride from UCSD.</li>
              </ul>

              <li className="text-lg font-bold">American🍔</li>
              <ul className="list-disc list-inside gap-4">
                <li><b>Phil's BBQ</b> - Definitely a must-try if you've never had American BBQ. Get the beefy ribs.</li>
                <li><b>In-N-Out</b> - Classic American burger that you can only find in California. Fresh ingredients.</li>
              </ul>

              <li className="text-lg font-bold">Chinese🥡</li>
              <ul className="list-disc list-inside gap-4">
                <li><b>Spicy City</b> - Despite its name, the have good non-spicy food as well.</li>
                <li><b>Xinjiang</b> - Various skewers.</li>
              </ul>

              <li className="text-lg font-bold">Indian🍛</li>
              <ul className="list-disc list-inside gap-4">
                <li><b>Darbar</b> - $18 lunch buffet. Great garlic naan and chicken tandoori.</li>
                <li><b>Charminar</b> - Very popular.</li>
              </ul>

              <li className="text-lg font-bold">Korean🍚</li>
              <ul className="list-disc list-inside gap-4">
                  <li><b>Woomiok</b> - We recommend their galbi-jjim, with cheese.</li>
                  <li><b>The Firespot</b> - (Probably) the best all you can eat Korean BBQ in SD.</li>
              </ul>

              <li className="text-lg font-bold">Drinks🧋</li>
              <ul className="list-disc list-inside gap-4">
                <li><b>Matcha Maiko</b> - Top recommended Matcha spot in SD.</li>
              </ul>
          </ul>
      </ExpandableSection>

      <Footer />
    </main>
  );
}
