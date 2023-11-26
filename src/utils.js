function arraysEqual(prevTodos, newTodos) {
    return JSON.stringify(prevTodos) === JSON.stringify(newTodos);
}

const comp = function (A, B) {
    // if (A.priority >= B.priority) {
    //     return -1;
    // }
    // return 1;
    return A.priority - B.priority; // Better option to sort in ASC order
};

export { arraysEqual, comp };