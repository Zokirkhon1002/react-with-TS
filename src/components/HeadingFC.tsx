import { ReactElement, memo, FC } from "react";

// older versions
const HeadingFC: FC<{ title: string }> = ({ title }): ReactElement => (
  <h1>{title}</h1>
);

export default memo(HeadingFC);
