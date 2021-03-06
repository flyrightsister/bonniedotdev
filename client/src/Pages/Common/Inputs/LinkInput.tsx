import HttpIcon from '@material-ui/icons/Http';
import React, { ReactElement } from 'react';

import TextInput from './TextInput';

interface LinkInputProps {
  required: boolean;
  fieldName: string;
  defaultValue: string;
}

export default function LinkInput({
  required,
  fieldName,
  defaultValue,
}: LinkInputProps): ReactElement {
  return (
    <TextInput
      required={required}
      fieldName={fieldName}
      defaultValue={defaultValue}
      AdornmentIcon={HttpIcon}
    />
  );
}
