/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import css from './style.css';

export default function HomePage() {
  return (
    <h1 className={css.homePage}>
      <FormattedMessage {...messages.header} />
    </h1>
  );
}
