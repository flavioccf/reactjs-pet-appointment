import React from 'react';
import { useLocation } from 'react-router-dom';

export default function NotFound() {
    let location = useLocation();
  
    return (
      <div>
        <h3 className="title">
          No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }