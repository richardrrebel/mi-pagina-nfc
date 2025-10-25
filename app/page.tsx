export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-8">
      <h1 className="text-5xl font-extrabold mb-6 text-gray-900">Producto Original ✅</h1>
      <p className="text-xl mb-8 text-gray-700">
        Este producto ha sido verificado como auténtico por nuestra marca.
      </p>
      <a
        href="https://tumarca.com"
        className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition duration-300"
      >
        Visitar sitio oficial
      </a>
    </main>
  )
}
