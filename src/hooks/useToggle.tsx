import { useCallback, useState } from 'react';

type ToggleReturnType = [boolean, () => void];

export const useToggle = (initialValue: boolean = false): ToggleReturnType => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = useCallback(() => {
        setValue((val) => !val);
    }, []);

    return [value, toggle];
};