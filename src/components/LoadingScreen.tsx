"use client";

import { motion, AnimatePresence } from "framer-motion";
import { LoaderOne } from "@/components/ui/loader";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <LoaderOne />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-muted-foreground"
            >
              Loading...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
