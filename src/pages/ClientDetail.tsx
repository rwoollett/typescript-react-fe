import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import UpdateFormPane from 'components/updates/UpdateFormPane';

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
  const [updates, setUpdates ] = useState<WorkUpdate[]>([]);

  useEffect(() => {
    setUpdates(data);
  }, []);

  const updateRenderer = updates.map((dateUpdate) =>
  (<div key={dateUpdate.date}>
    <div>
      {dateUpdate.updates.map((update, i) => (
        <div key={i}>{i}:{update.content}</div>
      ))}
    </div>
  </div>));

  return <div>
    <UpdateFormPane 
      isOpen={isPaneOpen} 
      handleClose={() => setIsPaneOpen(false)}/>
    <a onClick={() => setIsPaneOpen(true)}>New Update</a>
    {updateRenderer}
  </div>;
};

export default ClientDetail;