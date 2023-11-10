import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState
} from 'react';

type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

interface BreakpointContextInterface {
  breakpoints: {
    up: (bp: keyof Breakpoints) => boolean;
    down: (bp: keyof Breakpoints) => boolean;
  };
}

export const BreakpointContext = createContext(
  {} as BreakpointContextInterface
);

const gridBreakpoints: Breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440
};

const BreakpointsProvider = ({ children }: PropsWithChildren) => {
  const [width, setWidth] = useState(window.innerWidth);

  const [breakpoints, setBreakpoints] = useState({
    up: (bp: keyof Breakpoints) => {
      return width > gridBreakpoints[bp];
    },
    down: (bp: keyof Breakpoints) => {
      return width < gridBreakpoints[bp];
    }
  });
  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    setBreakpoints({
      up: bp => width > gridBreakpoints[bp],
      down: bp => width < gridBreakpoints[bp]
    });
  }, [width]);

  return (
    <BreakpointContext.Provider value={{ breakpoints }}>
      {children}
    </BreakpointContext.Provider>
  );
};

export const useBreakpoints = () => useContext(BreakpointContext);

export default BreakpointsProvider;
