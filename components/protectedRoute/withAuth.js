'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const isAuthenticated = localStorage.getItem("users");

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/sign-in"); // Redirect to the login page
      }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
      return null; // Render nothing while redirecting
    }

    return <WrappedComponent {...props} />;
  };

  // Set the displayName of the HOC
  WithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuth;
};

export default withAuth;
