export default [
    {
        url: '/getMapInfo',
        method: 'get',
        // eslint-disable-next-line arrow-body-style
        response: () => {
            return {
                code: 0,
                title: 'mock请求测试'
            };
        }
    }
];
