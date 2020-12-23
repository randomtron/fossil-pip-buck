import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { fanficsQuery } from '../queries/fanfics-queries';

export const useFanficsState = () => {
    const [fanficID, setFanfic] = useState<string>("5fd9eeacf4d7ca5581d97161")
    const { loading, error, data } = useQuery(fanficsQuery);
    let fanfics;
    if (loading) fanfics = []
    if (data) fanfics = data.fanfics;
    return {
        fanficID,
        setFanfic,
        fanfics
    }
}