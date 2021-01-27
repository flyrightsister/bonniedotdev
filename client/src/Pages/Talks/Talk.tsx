import Link from '@material-ui/core/Link';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import VideocamIcon from '@material-ui/icons/Videocam';
import IconLink from 'Pages/Common/IconLink';
import React, { ReactElement } from 'react';

import { TalkType } from './Types';

interface TalkProps {
  talkData: TalkType,
  editButtons: ReactElement | null,
}

export default function Talk({ talkData, editButtons }: TalkProps): ReactElement {
  return (
    <TableRow>
      <TableCell>
        {editButtons}
        {talkData.utcDateStringISO}
      </TableCell>
      <TableCell align="center">
        <Link href={talkData.conferenceLink}>
          <img
            src={`/images/conference/${talkData.conferenceImageName}`}
            alt={talkData.conferenceName}
          />
        </Link>
      </TableCell>
      <TableCell align="center">{talkData.title}</TableCell>
      <TableCell style={{ width: '40%' }}>{talkData.description}</TableCell>
      <TableCell align="center">
        <IconLink link={`/images/slides/${talkData.slidesFilename}`} iconComponent={<SlideshowIcon />} altText="slides" />
        <IconLink link={talkData.recordingLink} iconComponent={<VideocamIcon />} altText="recording" />
      </TableCell>
    </TableRow>
  );
}