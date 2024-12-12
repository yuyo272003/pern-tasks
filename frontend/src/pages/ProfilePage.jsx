import { useAuth } from "../context/AuthContext";

function ProfilePage() {
    const { user } = useAuth();

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-black shadow-lg rounded-lg p-8 w-[32rem] border border-gray-700">
                <div className="flex flex-col items-center">
                    <img
                        src={user.gravatar}
                        alt="Avatar"
                        className="w-32 h-32 rounded-full mb-6 border-4 border-gray-700 shadow-md"
                    />
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {user.name}
                    </h2>
                    <p className="text-base text-gray-300 mb-2">
                        📧 {user.email}
                    </p>
                </div>
                <div className="mt-8 border-t border-gray-600 pt-4">
                    <p className="text-base text-gray-400 mb-2">
                        <span className="font-medium text-white">ID:</span> {user.id}
                    </p>
                    <p className="text-base text-gray-400 mb-2">
                        <span className="font-medium text-white">Creado:</span>{" "}
                        {new Date(user.created_at).toLocaleString()}
                    </p>
                    <p className="text-base text-gray-400">
                        <span className="font-medium text-white">Actualizado:</span>{" "}
                        {new Date(user.updated_at).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
