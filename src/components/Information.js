import axios from 'axios';
import React, { useCallback } from 'react';

const UrlPlane =
    'http://kswcpub.rra.go.kr:8081/safe/airall_openapi/getflightlist';
const UrlRadiation =
    'http://kswcpub.rra.go.kr:8081/safe/airall_openapi/getfightaccdose';

const api = axios.create({
    params: {
        serviceKey: process.env.REACT_APP_API_KEY,
        numOfRows: 1,
        pageNO: 10,
    },
});

const Information = () => {
    return <div></div>;
};

export default Information;
