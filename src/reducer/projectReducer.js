const initState = {
    projects: [
        { id: "1", title: 'burger', content: 'achari aloo and super freeak' },
        { id: "2", title: "pizza", content: 'koi bhi'},
        { id: "3", title: 'chocolate', content: '5 star 3d,milkybar mooosha' }
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
}
export default projectReducer 