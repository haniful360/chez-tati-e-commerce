'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const withAuth = (WrappedComponent) => {
  return (props) => {
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
};

export default withAuth;
