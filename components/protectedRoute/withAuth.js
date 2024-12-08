'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const user = localStorage.getItem("users");
        if (!user) {
          router.replace("/sign-in"); // Redirect to the login page
        } else {
          setIsAuthenticated(true);
        }
      }
    }, [router]);

    if (!isAuthenticated) {
      return null; // Render nothing while checking authentication
    }

    return <WrappedComponent {...props} />;
  };

  // Set the displayName of the HOC
  WithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuth;
};

export default withAuth;
