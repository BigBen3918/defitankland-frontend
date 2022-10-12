import { motion, Variants } from "framer-motion";
import React from "react";

export const FadeUp = ({ children }: { children: React.ReactNode }) => {
    const FadeUpVariant: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 2,
            },
        },
    };

    return (
        <motion.span
            initial="offscreen"
            whileInView="onscreen"
            variants={FadeUpVariant}
        >
            {children}
        </motion.span>
    );
};

export const SlideRight = ({ children }: { children: React.ReactNode }) => {
    const FadeUpVariant: Variants = {
        offscreen: {
            opacity: 0,
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.5,
            },
        },
    };
};
