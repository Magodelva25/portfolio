import { motion } from "framer-motion";

const MovingArrows = () => {
  return (
    <svg width="100%" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.g 
        initial={{ x: 0 }} 
        animate={{ x: 500 }} 
        transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
      >
        {/* Flechas abiertas, moviéndose de derecha a izquierda */}
        <path xmlns="http://www.w3.org/2000/svg" d="M73 0L217 138.383L73 100" stroke="black" strokeWidth="1"/>
      </motion.g>
    </svg>
  );
};

export default MovingArrows;
