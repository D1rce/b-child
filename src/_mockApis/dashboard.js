import Mock from 'mockjs';

const NameList = [];
const count = 100;

// eslint-disable-next-line no-plusplus
for (let i = 0; i < count; i++) {
    NameList.push(
        Mock.mock({
            name: '@first'
        })
    );
}
NameList.push({ name: 'mock-Pan' });

export default [
    // username search
    {
        url: '/vue3-admin-plus/search/user',
        method: 'get',
        response: (config) => {
            const { name } = config.query;
            const mockNameList = NameList.filter((item) => {
                const lowerCaseName = item.name.toLowerCase();
                return !(name && lowerCaseName.indexOf(name.toLowerCase()) < 0);
            });
            return {
                code: 20000,
                data: { items: mockNameList }
            };
        }
    },

    // transaction list
    {
        url: '/vue3-admin-plus/transaction/list',
        method: 'get',
        // eslint-disable-next-line arrow-body-style
        response: () => {
            return {
                code: 20000,
                data: {
                    total: 20,
                    'items|20': [
                        {
                            order_no: '@guid()',
                            timestamp: +Mock.Random.date('T'),
                            username: '@name()',
                            price: '@float(1000, 15000, 0, 2)',
                            'status|1': ['success', 'pending']
                        }
                    ]
                }
            };
        }
    }
];
