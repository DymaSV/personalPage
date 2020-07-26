import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';

export default function Navigator() {
  function handleClick(e) {
  }

  return (
    <div style={{
      margin: '10px',
      fontSize: '20px' 
    }}>
      <Breadcrumbs aria-label="breadcrumb" style={{
      fontSize: '20px' 
    }}>
        <Link
          color="inherit"
          href="/"
          color="textPrimary"
          aria-current="page"
          onClick={handleClick}>
          Home
        </Link>
        <Link
          color="inherit"
          href="/what-we-do/"
          onClick={handleClick}>
          What we can do
        </Link>
        <Link
          color="inherit"
          href="/location/"
          onClick={handleClick}>
          Location
        </Link>
      </Breadcrumbs>
    </div>
  );
}