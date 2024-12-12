import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  console.log(data);

  return <div>

    <Card>
      <h1 className="text-3xl font-bold my-4">Home Page</h1>
      <p>Proyecto final de Tecnologias de la Construcción de Software en el que incorporamos React + Node.js + PostgreSQL</p>
    </Card>

  </div>;
}

export default HomePage;
