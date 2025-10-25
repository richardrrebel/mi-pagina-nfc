import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <Image
        src="/logo.jpg"
        alt="Logo de la marca"
        width={150}
        height={150}
        className="mb-6"
      />
      <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
        Producto Original ✅
      </h1>
      <p className="text-lg text-gray-700 mb-6 max-w-xl">
        Este producto es auténtico y ha sido verificado por la marca Richardrrebel.  
        Escanea el chip NFC para obtener información oficial sobre tu producto.
      </p>
      <a
        href="#"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Ver Detalles
      </a>
    </main>
  );
}
