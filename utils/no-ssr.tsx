import { useEffect, useLayoutEffect, useState } from "react";

const useEnhancedEffect =
  typeof window !== "undefined" && process.env.NODE_ENV !== "test"
    ? useLayoutEffect
    : useEffect;

type NoSSRProps = {
  children: React.ReactNode;
  defer?: boolean;
  fallback?: React.ReactNode;
};

const NoSSR = ({ children, defer, fallback }: NoSSRProps) => {
  const [isMounted, setMountedState] = useState(false);

  useEnhancedEffect(() => {
    if (!defer) setMountedState(true);
  }, [defer]);

  useEffect(() => {
    if (defer) setMountedState(true);
  }, [defer]);

  return isMounted ? children : fallback;
};

import { ComponentType } from "react";

export const withoutSSR = <P extends object>(Component: ComponentType<P>) => {
  const Comp = (props: P) => (
    <NoSSR>
      <Component {...props} />
    </NoSSR>
  );
  Comp.displayName = "withoutSSR";

  return Comp;
};

export default NoSSR;
