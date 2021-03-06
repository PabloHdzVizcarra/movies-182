import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faGoogle } from "@fortawesome/free-brands-svg-icons";

import {
  faCheckSquare,
  faGamepad,
  faHourglassStart,
  faFire,
  faFireAlt,
  faCalendarDay,
  faThumbsUp,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  fab,
  faThumbsUp,
  faCheckSquare,
  faGamepad,
  faHourglassStart,
  faGoogle,
  faFire,
  faCalendarDay,
  faHeart,
  faHeartBroken,
  faFireAlt
);

/* EXAMPLES

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

<FontAwesomeIcon icon="hourglass-start" />
<FontAwesomeIcon icon={['fab', 'apple']} />
<FontAwesomeIcon icon={['fab', 'microsoft']} />
<FontAwesomeIcon icon={['fab', 'google']} />

*/
