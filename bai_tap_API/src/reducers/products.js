import { type } from "os";

var initialState = [
    {
        id: 1,
        name: "iphone 6",
        price: 600,
        status: true,
    },
    {
        id: 2,
        name: "iphone 6",
        price: 600,
        status: true,
    },
    {
        id: 3,
        name: "iphone 7",
        price: 600,
        status: false,
    },
    {
        id: 4,
        name: "iphone 8",
        price: 600,
        status: true,
    }
];

const products = (state = initialState, action) => {
    switch (action, type) {
        default: return [...state];
    }
}

export default products