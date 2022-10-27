import { ReactElement, ReactNode, memo } from "react";

// heading with content
const HeadingWithContent = ({
  children,
}: {
  children: ReactNode;
}): ReactElement | null => {
  return <h1>{children}</h1>;
};

export default memo(HeadingWithContent);
