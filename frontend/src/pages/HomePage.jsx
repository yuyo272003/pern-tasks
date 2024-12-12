import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  console.log(data);

  return (
      <div className="flex items-center justify-center min-h-screen bg-black text-gray-200">
        <div className="container max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-lg p-8">
          {/* Encabezado */}
          <header className="text-center">
            <h1 className="text-4xl font-bold text-orange-500 drop-shadow-md">
              Proyecto Final
            </h1>
            <h2 className="text-xl text-yellow-400 mt-2">
              Tecnologías para la Construcción de Software
            </h2>
          </header>

          {/* Contenido principal */}
          <main>
            <section className="flex flex-wrap justify-center mt-8 gap-4">
              {/* Tarjeta de React */}
              <div className="flex flex-col items-center bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg shadow-md p-4 w-60 transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-blue-400 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">R</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">React</h3>
              </div>

              {/* Tarjeta de Node.js */}
              <div className="flex flex-col items-center bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg shadow-md p-4 w-60 transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">N</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">Node.js</h3>
              </div>

              {/* Tarjeta de PostgreSQL */}
              <div className="flex flex-col items-center bg-gradient-to-br from-gray-700 to-gray-600 rounded-lg shadow-md p-4 w-60 transform transition-transform duration-300 hover:scale-105">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">P</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">PostgreSQL</h3>
              </div>
            </section>
          </main>

          {/* Pie de página */}
          <footer className="text-center mt-8">
            <p className="text-gray-400 text-sm">&copy; 2024 Proyecto Final</p>
          </footer>
        </div>
      </div>
  );
}

export default HomePage;
