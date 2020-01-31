const minDelay = 2;
const maxDelay = 4;
const delay = (Math.random() * (maxDelay - minDelay) + minDelay) * 1000;

const payments = [
    {
        id: Math.random() + Date.now(),
        name: 'Document 1'
    },{
        id: Math.random() + Date.now(),
        name: 'Document 2'
    },{
        id: Math.random() + Date.now(),
        name: 'Document 3'
    },{
        id: Math.random() + Date.now(),
        name: 'Document 4'
    },
];

export const request = (url, data) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( payments )
        }, delay)
    })
};