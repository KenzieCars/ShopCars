import { KeyboardEvent, useEffect, useRef } from 'react';


const useEscapeKey = (keyId: string, callback: (element: React.KeyboardEvent<Element>) => void) => {

    const ref = useRef<null | KeyboardEvent>(null);

    useEffect(() => {

        const keyEvent = (event: KeyboardEvent) => {
            if (event.key === keyId) {
                if (callback) callback(ref.current!);
            }
        }

        window.addEventListener('keydown', keyEvent);

        return () => {
            window.removeEventListener('keydown', keyEvent);
        };

    })

    return ref;
};

export default useEscapeKey;