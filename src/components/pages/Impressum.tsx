export default function Impressum() {
  return (
    <div>
      <div className="ml-8 p-8">
        <h1 className="mb-12 pt-20 text-5xl font-bold text-myColor-orange">
          Impressum
        </h1>

        <p className="text-xl text-myColor-white">
          Pryladyshev Volodymyr <br />
          Kohlrauschweg 11, <br />
          60486 Frankfurt Am Main <br />
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-myColor-white">
          Kontakt
        </h2>

        <p className="text-xl text-myColor-white">
          Telefon: +49 171 9089911 <br />
          E-Mail: det.car.de@gmail.com
        </p>

        <h2 className="mt-8 text-2xl font-semibold text-myColor-white">
          Verbraucherstreitbeilegung/Universalschlichtungsstelle
        </h2>
        <p className="text-xl text-myColor-white">
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </div>
    </div>
  );
}
