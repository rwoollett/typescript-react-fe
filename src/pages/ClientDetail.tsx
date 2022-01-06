import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

interface WorkUpdate {
  date: string;
  updates: {
    content: string;
  }[];
}

const data: WorkUpdate[] = [
  {
    date: "2022-01-11",
    updates: [
      { content: "Created new react site" },
      { content: "Created an API with auth" },
      { content: "Implemented auth engine" },
      { content: "Prepped deployment guide" },
    ],
  },
  {
    date: "2022-01-04",
    updates: [
      { content: "Built out custom styles for front end" },
      { content: "Added SMS messaging" },
      { content: "Built new client CORS rules" },
    ],
  },
];

const ClientDetail = (): JSX.Element => {
  const { id }: { id: string } = useParams();
  const [isPaneOpen, setIsPaneOpen ] = useState(false);
  const updateRenderer = data.map((dateUpdate) =>
  (<div key={dateUpdate.date}>
    <div>
      {dateUpdate.updates.map((update, i) => (
        <div key={i}>{i}:{update.content}</div>
      ))}
    </div>
  </div>));

  const formPane = (
    <SlidingPane
    className="some-custom-class"
    overlayClassName="some-custom-overlay-class"
    isOpen={isPaneOpen}
    title="Hey, it is optional pane title.  I can be React component too."
    subtitle="Optional subtitle."
    onRequestClose={() => {
      // triggered on "<" on left top click or on outside click
      setIsPaneOpen(!isPaneOpen);
    }}
  >
    <div>And I am pane content. BTW, what rocks?</div>
    <br />
  </SlidingPane>
  );

  return <div>
    {formPane}
    <a onClick={() => setIsPaneOpen(true)}>New Update</a>
    {updateRenderer}
  </div>;
};

export default ClientDetail;