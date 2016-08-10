import appHistory from '../config/appHistory';
import { mandatory } from './valadation.helper';
import { isEmpty } from './helper';

export const handlePush = ({ pathname, query, state }) => {
    const historyObject = {};

    if (pathname) { historyObject.pathname = pathname; }
    if (query) { historyObject.query = query; }
    if (state) { historyObject.state = state; }

    if (isEmpty(historyObject)) { mandatory('handlePush'); }

    appHistory.push(historyObject);
};

export const handleReplace = ({ pathname, query, state }) => {
    const historyObject = {};

    if (pathname) { historyObject.pathname = pathname; }
    if (query) { historyObject.query = query; }
    if (state) { historyObject.state = state; }

    if (isEmpty(historyObject)) { mandatory('handleReplace'); }

    appHistory.replace(historyObject);
};

export const handleBack = () => {
    appHistory.goBack();
};

