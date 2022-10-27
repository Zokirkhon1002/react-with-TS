import { ReactElement, memo } from "react";

// Conventional props;
const Heading = ({ title }: { title: string }): ReactElement => {
  return <h1>{title}</h1>;
};

export default memo(Heading);
