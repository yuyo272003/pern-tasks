function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-gray-200">
            {/* Contenedor principal */}
            <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-8">
                {/* Encabezado */}
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-white mb-2">
                        Proyecto de Tecnologías de la Construcción de Software Quinto Semestre
                    </h1>
                </header>

                {/* Sección de "About Us" */}
                <main className="text-center">
                    <h2 className="text-2xl font-bold text-orange-500 mb-4">About Us</h2>
                    <p className="text-lg text-gray-300 mb-6">
                        Univerisdad Veracruzana LIS 501
                    </p>

                    {/* Lista de integrantes */}
                    <div className="bg-gray-700 p-6 rounded-md">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                            Integrantes:
                        </h3>
                        <ul className="text-left list-disc list-inside text-gray-300 space-y-4">
                            <li className="text-xl">Avendaño Rodríguez Joseph Javier</li>
                            <li className="text-xl">Gil Hernández Ingrid Sarahi</li>
                            <li className="text-xl">Gutiérrez Mendoza Julio</li>
                            <li className="text-xl">Landa Solano Ricardo</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default AboutPage