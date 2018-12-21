import React from 'react';
import { Link } from 'react-router-dom';

export default function DataCard({ info, deleteInfo }) {

  console.log("DataCard", info );
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{info.title}</div>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <Link to={`/game/${info._id}`} className="ui basic button green">Edit</Link>
          <div className="ui basic button red" onClick={(e) => { e.preventDefault(); if (window.confirm('Are you sure you wish to delete this item?')) deleteInfo(info._id) } }>Delete</div>
        </div>
      </div>
    </div>
  );
}

