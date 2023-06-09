"use client";
import React from "react";
import AppProvider from "../context/AppContext";
import { AnimatePresence, motion } from "framer-motion";

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AppProvider>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{
                        delay: 0.5,
                        ease: "easeInOut",
                    }}
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </AppProvider>
    );
};

export default Providers;
