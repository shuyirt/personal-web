import React from 'react';
import IconButton from "@material-ui/core/IconButton/IconButton";
import { ReactComponent as GithubIcon } from "../../img/github.svg";

const GithubButton = () => {

  return (
    <IconButton>
      <GithubIcon />
    </IconButton>
  )
};

export default (GithubButton);