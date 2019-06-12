var phone = [
    {
    brand: 'Apple',
    modle: 'iPhone XS Max',
    price: () => {
        return `${phone[0].brand + phone[0].modle} costs $1,099.99`;
    }
},
    {
    brand: 'Google',
    modle: 'Pixel 3',
    price: () => {
        return `${phone[1].brand + phone[1].modle} costs $799.99`;
    }
},
    {
    brand: 'Samsung',
    modle: 'Galaxy Note 9',
    price: () => {
        return `${phone[2].brand + phone[2].modle} costs $672.00`;
    }
},
    {
    brand: 'Samsung',
    modle: 'Galaxy S10e',
    price: () => {
        return `${phone[3].brand + phone[3].modle} costs $735.00`;
    }
},
    {
    brand: 'Doro',
    modle: 'Consumer Cellular',
    price: () => {
        return `${phone[4].brand + phone[4].modle} costs $49.99`;
    }
},
    {
    brand: 'Motorola',
    modle: 'Moto G7 Power',
    price: () => {
        return `${phone[5].brand + phone[5].modle} costs $201.69`;
    }
},
    {
    brand: 'Nokia',
    modle: 'Nokia 7.1',
    price: () => {
        return `${phone[6].brand + phone[6].modle} costs $349.00`;
    }
},
    {
    brand: 'OnePlus',
    modle: 'OnePlus 6T',
    price: () => {
        return `${phone[7].brand + phone[7].modle} costs $549.00`;
    }
},
    {
    brand: 'BlackBerry ',
    modle: 'Key2 LE',
    price: () => {
        return `${phone[8].brand + phone[8].modle} costs $433.99`;
    }
},
    {
    brand: 'Apple',
    modle: 'iPhone XR',
    price: () => {
        return `${phone[9].brand + phone[9].modle} costs $749.99`;
    }
},
]



console.log(phone[1].price)