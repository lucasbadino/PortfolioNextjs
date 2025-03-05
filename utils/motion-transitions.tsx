export const transitionVariantsPage = {
    initial: {
        x: "100%",
        with: "100%",
    },
    animate: {
        x: "0%",
        with: "0%",
    },
    exit: {
        x: ["0%", "100%"],
        with: ["0%", "100%"],
    }
}

export const fadeIn = (position: string) => {
    return {
        visible: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.3,
                ease: [0.25, 0.25, 0.25, 0.75],
                // type : "spring",
                // damping : 10,
                // stiffness : 100,
            }
        },
        hidden: {
            y: position === "bottom" ? -80 : 0,
            x: position === "right" ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [0.25, 0.25, 0.25, 0.75],
                // y : position === "top" ? -50 : 50,
                // x : 0,
                // opacity : 0,
            }
        }
    }
}