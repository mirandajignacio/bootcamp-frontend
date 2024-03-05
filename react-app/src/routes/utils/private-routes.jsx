import { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";

const useAuth = () => {
  const [auth, setAuth] = useState({ token: false });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAuth({ token: true });
      setLoading(false);
    }, 3000);
  }, []);

  return { auth, setAuth, loading };
};

const PrivateRoutes = () => {
  const { auth, loading } = useAuth();
  if (loading) return <div>loading...</div>;
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export { PrivateRoutes };
