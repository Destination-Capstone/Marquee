import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import HomeIcon from '@material-ui/icons/Home';
import FlareIcon from '@material-ui/icons/Flare';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';



var Policies = (props) => {

  const policiesLookup = {
    house: (<HomeIcon />),
    clean: (<FlareIcon />),
    rules: (<LibraryBooksIcon />)
  };
  


  if ( props.listing === null) {
    return (
      <div>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </div>
    )
  } else {
    return (
      <div>
        {props.listing.policies.map( (policy) => {
          return (
            <span>
            <h3>{policiesLookup[policy.icon]} {policy.title}</h3>
            <p>{policy.description}</p>
            </span>

          )
        })}
      </div>
    )
  }

/*
  return (
    <div>
      <Skeleton variant="text" />
      <Skeleton variant="circle" />
      <Skeleton variant="text" />
    </div>
  )
  */
}

export default Policies;