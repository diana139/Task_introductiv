export default function ContactPage() {
    return (
      <div className="flex flex-col items-center justify-start min-h-screen  pt-[70px]">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        <div className="bg-gradient-to-br from-[#c1b9aa] to-[#fff3cb] shadow-md rounded-lg p-6 w-96 mb-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Moisă Andrei Florentin</h2>
          <p className="text-lg">Email: <a href="mailto:andreimoisa987@gmail.com" className="text-blue-500">andreimoisa987@gmail.com</a></p>
          <p className="text-lg">Telefon: <a href="tel:+40742410639" className="text-blue-500">+40 742 410 639</a></p>
        </div>
        <div className="bg-gradient-to-br from-[#c1b9aa] to-[#fff3cb] shadow-md rounded-lg p-6 w-96 text-center">
          <h2 className="text-2xl font-semibold mb-4">Rosu Diana</h2>
          <p className="text-lg">Email: <a href="dianarosuu18@gmail.com" className="text-blue-500">dianarosuu18@gmail.com</a></p>
          <p className="text-lg">Telefon: <a href="tel:+40758264170" className="text-blue-500">+40 758 264 170</a></p>
        </div>
      </div>
    );
}