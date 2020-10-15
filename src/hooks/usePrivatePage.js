import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const usePrivatePage = (token) => {
    const history = useHistory();

    useEffect(() => {
        if (!token) {
            window.alert('A sessão expirou. Faça login novamente.');
            history.replace('/');
        };
    }, [history]);
};

export default usePrivatePage;