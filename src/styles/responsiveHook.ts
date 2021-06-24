import { useState, useEffect } from 'react';
import { useMediaPredicate } from 'react-media-hook';

// Função que monitora a largura atual do dispositivo onde
// a aplicação está sendo exibida e retorna um valor em
// porcentagem para ajuste de font-size do html
interface WindowProps {
  width: number | undefined;
  height: number | undefined;
}

// Hook
export default function useWindowSize(): number {
  const isClient = typeof window === 'object';
  const smallerThan480 = useMediaPredicate('(max-width: 480px)');

  function getSize(): WindowProps {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  const doTheTHing = (): boolean | (() => void) => {
    if (!isClient) {
      return false;
    }

    function handleResize(): void {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  };

  useEffect(() => {
    doTheTHing();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return smallerThan480
    ? (Number(windowSize.width) * 62.5) / 375
    : (Number(windowSize.width) * 62.5) / 1440;
}
