import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth } from '../services/AuthenService/checkAuth';

/**
 * Hook kiểm tra trạng thái đăng nhập của người dùng
 * @returns {Object} { isLoading, isLoggedIn,companyId }
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
	const companyId =  useSelector((state) => state.auth.companyId);
  const [isLoading, setIsLoading] = useState();
    const verifyAuth = useCallback(async () => {
    const isAuthenticated = await checkAuth(dispatch);
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    if (!isLoggedIn || companyId )  {
      verifyAuth();
    } else {
      setIsLoading(false);
    }
  }, [isLoggedIn, verifyAuth,companyId]);

  return { isLoading, isLoggedIn,companyId };
};
