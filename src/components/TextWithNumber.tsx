import React, { ReactElement, ReactNode } from "react";

// Functional props
const TextWithNumber = ({
  header,
  children,
}: {
  header?: (num: number) => ReactNode;
  children: (num: number) => ReactNode;
}): ReactElement | null => {
  const [state, setState] = React.useState<number>(0);

  return (
    <div>
      {header && <h2>{header?.(state)}</h2>}
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState((prev) => prev + 1)}>Add</button>
      </div>
    </div>
  );
};

export default TextWithNumber;
