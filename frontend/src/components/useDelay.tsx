import { useState, useEffect } from 'react'

const useDelay = (value: any, delay: number) => {
    const [delayedValue, setDelayedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDelayedValue(value)
        }, delay);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [value, delay]);

    return delayedValue;
}

export default useDelay