"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryProps {
  images: string[];
}

export default function Gallery({ images }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((src, index) => (
        <motion.div
          key={index}
          className="cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => setSelectedImage(src)}
        >
          <Image
            src={src}
            alt={`Gallery image ${index + 1}`}
            width={500}
            height={150}
            className="rounded-lg shadow-md"
          />
        </motion.div>
      ))}

      {/* Modal para mostrar imagen ampliada */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <Image
                src={selectedImage}
                alt="Expanded view"
                width={750}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
