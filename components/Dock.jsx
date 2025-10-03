'use client';

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'motion/react';
import { Children, cloneElement, useEffect, useMemo, useRef, useState } from 'react';

// Stylized DockItem with more effects
function DockItem({ children, className = '', onClick, mouseX, spring, distance, magnification, baseItemSize }) {
  const ref = useRef(null);
  const isHovered = useMotionValue(0);
  const [isTouched, setIsTouched] = useState(false);

  const mouseDistance = useTransform(mouseX, val => {
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(mouseDistance, [-distance, 0, distance], [baseItemSize, magnification, baseItemSize]);
  const size = useSpring(targetSize, spring);

  const handleClick = (e) => {
    // Reset hover state on mobile after click
    isHovered.set(0);
    setIsTouched(false);
    if (onClick) onClick(e);
  };

  // Add a subtle glow and scale effect on hover
  const scale = useTransform(isHovered, [0, 1], [1, 1.12]);
  const boxShadowLight = useTransform(
    isHovered,
    [0, 1],
    [
      '0 2px 8px 0 rgba(0,0,0,0.1)',
      '0 4px 16px 0 rgba(0,0,0,0.2)'
    ]
  );
  const boxShadowDark = useTransform(
    isHovered,
    [0, 1],
    [
      '0 2px 8px 0 rgba(0,0,0,0.25)',
      '0 4px 24px 0 rgba(255,255,255,0.15), 0 0 20px 4px rgba(255,255,255,0.2)'
    ]
  );
  return (
    <motion.div
      ref={ref}
      style={{
        width: size,
        height: size,
        scale
      }}
      onHoverStart={() => isHovered.set(1)}
      onHoverEnd={() => isHovered.set(0)}
      onFocus={() => isHovered.set(1)}
      onBlur={() => isHovered.set(0)}
      onTouchStart={() => {
        setIsTouched(true);
        isHovered.set(1);
      }}
      onTouchEnd={() => {
        setTimeout(() => {
          isHovered.set(0);
          setIsTouched(false);
        }, 100);
      }}
      onClick={handleClick}
      className={`relative inline-flex items-center justify-center rounded-2xl bg-white dark:bg-black border-2 border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-200 cursor-pointer overflow-visible text-black dark:text-white ${className}`}
      tabIndex={0}
      role="button"
      aria-haspopup="true"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: boxShadowDark,
          opacity: isHovered
        }}
      />
      {Children.map(children, child => cloneElement(child, { isHovered }))}
    </motion.div>
  );
}

// Stylized DockLabel with glassmorphism and shadow
function DockLabel({ children, className = '', ...rest }) {
  const { isHovered } = rest;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', latest => {
      setIsVisible(latest === 1);
    });
    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0, scale: 0.95 }}
          animate={{ opacity: 1, y: -16, scale: 1 }}
          exit={{ opacity: 0, y: 0, scale: 0.95 }}
          transition={{ duration: 0.22, type: 'spring', stiffness: 200, damping: 18 }}
          className={`${className} absolute -top-8 left-1/2 w-fit whitespace-pre rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white/90 dark:bg-black/80 px-3 py-1 text-xs text-black dark:text-white shadow-lg backdrop-blur-md`}
          role="tooltip"
          style={{ x: '-50%' }}
        >
          <span className="font-semibold tracking-wide drop-shadow">{children}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Stylized DockIcon with a subtle background and hover effect
function DockIcon({ children, className = '', isHovered }) {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-xl transition-all duration-200 ${className}`}
      style={{
        padding: 6
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Dock({
  items,
  className = '',
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50
}) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight]
  );
  const heightRow = useTransform(isHovered, [0, 1], [panelHeight, maxHeight]);
  const height = useSpring(heightRow, spring);

  // Stylized dock background: black, glassy, with border and shadow
  return (
    <motion.div
      style={{ height, scrollbarWidth: 'none' }}
      className="flex max-w-full items-center"
    >
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={`
          ${className}
          fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 flex items-end w-fit gap-2
          rounded-2xl border border-neutral-300 dark:border-neutral-800
          bg-white/95 dark:bg-black/95
          shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.45)]
          pb-2 px-3
          backdrop-blur-lg
          ring-1 ring-black/5 dark:ring-white/10
        `}
        style={{
          height: panelHeight
        }}
        role="toolbar"
        aria-label="Application dock"
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            onClick={item.onClick}
            className={item.className}
            mouseX={mouseX}
            spring={spring}
            distance={distance}
            magnification={magnification}
            baseItemSize={baseItemSize}
          >
            <DockIcon>{item.icon}</DockIcon>
            <DockLabel>{item.label}</DockLabel>
          </DockItem>
        ))}
      </motion.div>
    </motion.div>
  );
}
