import React from 'react';
import { useParams } from 'react-router-dom';

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
  const updateRenderer = data.map((dateUpdate) =>
  (<div key={dateUpdate.date}>
    <div>
      {dateUpdate.updates.map((update, i) => (
        <div key={i}>{i}:{update.content}</div>
      ))}
    </div>
  </div>));

  return <div>
    {updateRenderer}
  </div>;
};

export default ClientDetail;