'use strict';

import config     from './appConfig';
import apiFactory from '../api';

export default apiFactory({
    apiPrefix: config.apiPrefix
});
