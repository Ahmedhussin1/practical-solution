import{ useState, useRef } from "react";
import './GridMotion.scss'
import { motion } from "framer-motion";
const cards = [1, 2, 3, 4];
const GridMotion = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [canDrag, setCanDrag] = useState(false);
  const containerRefs = useRef(new Array());
  const handlePanEnd = (e, info, card) => {
    if (selectedId) {
      if (Math.abs(info.offset.x) < 5) {
        const styles = getComputedStyle(containerRefs.current[card]);
        const timeout = styles.transform.split(",")[4] * -0.6;
        setCanDrag(false);
        setTimeout(() => {
          setSelectedId(null);
        }, timeout);
      }
    } else {
      setCanDrag(true);
      setSelectedId(card);
    }
  };
  return (
    <div className="layout-cards">
      {cards.map((card, i) => (
        <motion.div
          className={selectedId === card ? "opened-card" : "card"}
          key={i}
          layout
          drag={selectedId === card ? "x" : false}
          dragConstraints={{ left: canDrag ? -850 : 0, right: 0 }}
          dragElastic={0.2}
          onPanEnd={(e, info) => handlePanEnd(e, info, card)}
          ref={(el) => (containerRefs.current[card] = el)}
        >
          {selectedId === card && (
            <>
              <div />
              <div />
              <div />
            </>
          )}
        </motion.div>
      ))}
      <motion.div
        className="dim-layer"
        animate={{ opacity: selectedId ? 0.3 : 0 }}
      />
    </div>
  );
};
export default GridMotion;