import request from 'axios';

// eslint-disable-next-line import/prefer-default-export
export function getList(params) {
    return request({
        url: '/vue3-admin-plus/table/list',
        method: 'get',
        params
    });
}
