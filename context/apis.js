const BASE_URL = 'https://api.example.com';

// const getCoupons = () => {
//     const url = `${BASE_URL}/coupons`;
//     return fetch(url).then(res => res.json());
// }

const getCampaigns = () => {
    const url = `${BASE_URL}/api/campaign/list`;
    fetch(url).then(res => res.json());
}

// export {
//     getCoupons,
//     getCampaigns
// }