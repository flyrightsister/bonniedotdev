/* eslint-disable max-lines-per-function */
import moment from 'moment';
import DateInput from 'Pages/Common/Inputs/DateInput';
import ImageNameInput from 'Pages/Common/Inputs/ImageNameInput';
import LinkInput from 'Pages/Common/Inputs/LinkInput';
import TextInput from 'Pages/Common/Inputs/TextInput';
import React, { ReactElement, useState } from 'react';
import { NewTalk, Talk as TalkType } from 'Types';

const newTalk: NewTalk = {
  title: '',
  localDateStringISO: '',
  description: '',
  slidesFilename: '',
  conferenceName: '',
  conferenceLink: '',
  recordingLink: '',
};

interface EditTalkFieldsType {
  talkData?: TalkType | NewTalk;
}

EditTalkFields.defaultProps = { talkData: newTalk };

export default function EditTalkFields({
  talkData = newTalk,
}: EditTalkFieldsType): ReactElement {
  // adding time is necessary, otherwise it gets translated funny and shows up as the day before
  const [talkDate, setTalkDate] = useState(
    talkData.localDateStringISO
      ? `${talkData.localDateStringISO} 00:00:00`
      : moment(new Date()).toISOString(),
  );

  // TODO: allow upload of slides file
  return (
    <>
      <TextInput required fieldName="title" defaultValue={talkData.title} />
      <DateInput
        fieldName="localDateStringISO"
        value={talkDate}
        label="change date"
        dateSetter={setTalkDate}
      />
      <TextInput
        required
        fieldName="description"
        defaultValue={talkData.description}
      />
      <ImageNameInput
        required={false}
        fieldName="slidesFilename"
        defaultValue={talkData.slidesFilename || ''}
      />
      <TextInput
        required
        fieldName="conferenceName"
        defaultValue={talkData.conferenceName}
      />
      <LinkInput
        required
        fieldName="conferenceLink"
        defaultValue={talkData.conferenceLink}
      />
      <LinkInput
        required={false}
        fieldName="recordingLink"
        defaultValue={talkData.recordingLink || ''}
      />
    </>
  );
}
