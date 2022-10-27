import { ReactElement, ReactNode, memo } from "react";

// Default props
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
};

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps;

const Container = ({
  heading,
  children,
}: ContainerProps): ReactElement | null => {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  );
};

Container.defaultProps = defaultContainerProps;

export default memo(Container);
