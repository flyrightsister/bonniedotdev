import React from 'react';
import { IconButton } from '@material-ui/core';

type SocialLinkProps = {
  icon: JSX.Element, // TODO: make more specific to a MUI icon component
  target: string,
  label: string
};

export default function SocialLink({ icon, target, label }: SocialLinkProps) {
  return (
    <IconButton key={label} aria-label={label} href={target}>
      {icon}
    </IconButton>
  );
}