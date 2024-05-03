import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";


export const useCheckDeviceWidth = () => {

    const mobile = useMediaQuery({ query: "(max-width : 767px)" })
    const tablet = useMediaQuery({ query: "(min-width : 768px) and (max-width: 1023px)" })
    const laptop = useMediaQuery({ query: "(min-width : 1024px) and (max-width: 1279px)" })
    const desktop = useMediaQuery({ query: "(min-width : 1280)" })

    const [device, setDevice] = useState(0)

    useEffect(() => {
        if (mobile) {
            setDevice("mobile")
        }
        else if (tablet) {
            setDevice("tablet")
        }
        else if (laptop) {
            setDevice("laptop")
        }
        else {
            setDevice("desktop")
        }

    }, [mobile, tablet, laptop, desktop])


    return device
}

