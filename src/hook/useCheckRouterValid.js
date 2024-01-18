import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { authenticationToken } from 'recoil/atom/auth';

const useCheckRouterValid = () => {
    const { accessToken } = useRecoilValue(authenticationToken);
    const checkRouterValid = useMemo(() => {
        if (accessToken.length > 0) {
            return true;
        } else {
            return false;
        }
    }, [accessToken]);

    return checkRouterValid;
}

export default useCheckRouterValid;