import { useQuery } from 'react-query';

const useCustomQuery = () => {
    /**
     * api: from axios define in folder api
     * key: key's name of queryKey use for fetch data from api, use name render data or refetch api
     * params: pass params if your api need params for fetch data,
     * option: config advance for use query, like focus window refetch, auto fetch...
     * enabled: use boolean value for refetch api
     * useQuery: return data, isLoading, isError, error, pending...
     */

    const useQueryAPI = ({ api, key, params, enabled, options = {} }) => {
        const queryKey = params ? [key, params] : null;
        return useQuery({
            queryKey: queryKey,
            queryFn: ({ signal }) =>
                api({
                    ...params,
                    signal,
                }).then(),
            enabled: enabled ?? Boolean(queryKey),
            ...options,
        });
    };

    return {
        useQueryAPI,
    };
};

export default useCustomQuery;
