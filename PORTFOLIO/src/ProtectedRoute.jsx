
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Protected({ children }) {
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        fetch("http://localhost/dentech-backend/check-session.php", {
            credentials: "include"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Not authenticated");
            }

            return response.json();
        })
        .then(data => {
            setAuthenticated(data.authenticated);
        })
        .catch(() => {
            setAuthenticated(false);
        });
    }, []);

    if (authenticated === null) {
        return <p>Checking session...</p>;
    }

    if (!authenticated) {
        return <Navigate to="/Login" replace />;
    }

    return children;
}

export default Protected;
