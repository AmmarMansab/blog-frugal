import React from 'react'
import { Route } from 'next';
import { useRouter } from 'next/navigation';

const useNavi = () => {
    const router = useRouter()
    const handleNavigation = (route) => {
        router.push(route);
      }
  return {handleNavigation}
}

export default useNavi