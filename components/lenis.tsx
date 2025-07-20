"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function LenisComponent() {
    const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
    // Use a ref to store the animation frame id
    const rafIdRef = useState<{ current: number | null }>({ current: null })[0];

    useEffect(() => {
        const scroller = new Lenis();
        setLenisRef(scroller);

        function raf(time: number) {
            scroller.raf(time);
            rafIdRef.current = requestAnimationFrame(raf);
        }

        rafIdRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafIdRef.current !== null) {
                cancelAnimationFrame(rafIdRef.current);
            }
            if (lenisRef) {
                lenisRef.destroy();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
}