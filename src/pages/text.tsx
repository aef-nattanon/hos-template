import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';

import Nap from '../components/Nap';

import type { NextPage } from "next";
const Test: NextPage = () => {
  const { locales } = useRouter();

  const intl = useIntl();
  const description = intl.formatMessage({
    id: "page.home.description",
  });

  return (
    <>
      <Nap />
      <div>test</div>
      <FormattedMessage
        id="page.home.title"
        values={{ b: (chunks) => <b>{chunks}</b> }}
      />
      <br />
      <FormattedMessage
        id="page.home.description2"
        values={
          {
            name: locales,
          } // Values should be an object literal, but not necessarily every value inside
        }
      />
      <div>{description}</div>
    </>
  );
};

export default Test;
