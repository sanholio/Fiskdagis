import Image from "next/image";
import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { FeaturedProducts } from "../components/storefront/FeaturedProducts";

const Home = () => {
  return (
    <>
      <section className="bg-contain py-5 md:py-10 overflow-hidden">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Välkommen till Glittrande Fenor!</h1>
            <p className="p-regular-20 md:p-regular-24">
              Ett centralt beläget guldfiskdagis i hjärtat av Örebro! Våra
              rymliga och harmoniska akvarier är designade för att skapa en
              trygg och stimulerande miljö där guldfiskarna kan simma fritt och
              må bra.
            </p>
            <p>
              Här erbjuder vi skräddarsydda simturer i våra specialanpassade
              bassänger, mental stimulans genom varierade miljöer och ett
              socialt umgänge med andra glada guldfiskar.
            </p>
            <p>
              Vårt mål är att vara Örebros tryggaste guldfiskdagis, både för
              fisk och ägare. Vi arbetar med ett lugnt och stressfritt akvarium,
              där vattnet hålls i optimala förhållanden och varje fisk får den
              omsorg den behöver.
            </p>

            <p className="font-semibold text-2xl">
              Vi har öppet hela sommaren och välkomnar alla guldfiskar, oavsett
              storlek och färg.
            </p>

            <p>Öppettider: mån-fre kl. 08.00 till 18.00</p>
            <p>E-post: info@glittrandefenor.se</p>
            <p>Telefonnummer: 073-9603796</p>
            <p>
              Vi är även återförsäljare av högkvalitativt fiskfoder och
              vårdprodukter för akvariefiskar.
            </p>

            <div id="prislista" className="flex justify-center flex-col">
              <ul>
                <p className="text-sm text-gray-500">
                  Från 1/4 gäller dessa priser
                </p>
                <p className="font-bold text-2xl my-1">Prislista</p>
                <p>Heltid (5 dagar i veckan) - 1500 kr/månad</p>
                <p>Deltid (3 dagar i veckan) - 1100 kr/månad</p>
                <p>Deltid (2 dagar i veckan) - 800 kr/månad</p>
                <p className="font-medium my-4">
                  (Deltid endast fasta veckodagar)
                </p>
              </ul>

              <p>25% rabatt för fisk nummer två, endast vid heltid.</p>
              <p className="mt-4">
                Inskolning sker under en vecka då guldfisken gradvis
                introduceras till sin nya miljö för att skapa trygghet och
                välbefinnande. Första månaden är en prövomånad utan
                uppsägningstid.
              </p>
            </div>
          </div>

          <Image
            src="/guldfisk.jpeg"
            alt="Glittrande Fenor Guldfiskdagis i Örebro"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>


      <section>
        <CategoriesSelection />
        <FeaturedProducts />
      </section>
      {/* <section
          id="events"
          className="wrapper my-8 flex flex-col gap-8 md:gap-12"
        >
          <h2 className="h2-bold">Vårens kurser</h2>
          <Collection />
        </section> */}
    </>
  );
};

export default Home;
