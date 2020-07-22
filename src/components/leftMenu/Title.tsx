import * as React from "react";
import { Button } from "@material-ui/core";

const Title: React.FunctionComponent<{
  visibleAquariumDispatch: (id: number) => void;
  visibleAquarium: number;
}> = ({ visibleAquariumDispatch, visibleAquarium }) => (
  <div className="title">
    <Button
      onClick={() =>
        visibleAquarium !== -1 ? visibleAquariumDispatch(-1) : null
      }
    >
      <h1>My Aquarium</h1>
    </Button>
  </div>
);

export default Title;
