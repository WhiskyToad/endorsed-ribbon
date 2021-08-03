import React from "react";
import { render } from "@testing-library/react";

import EndorsedRibbon from "./EndorsedRibbon";

it("renders when endorsed", () => {
  const tree = render(<EndorsedRibbon display />);
  expect(tree.container).toMatchSnapshot();
});

it("renders an empty div when not endorsed", () => {
  const tree = render(<EndorsedRibbon display={false} />);
  expect(tree.container).toMatchSnapshot();
});
