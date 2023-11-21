const colors = [
    "#f28b81", // light pink
    "#f7bd02", // yellow
    "#fbf476", // light yellow
    "#ccff90", // light green
    "#a7feeb", // turquoise
    "#cbf0f8", // light cyan
    "#afcbfa", // light blue
    "#d7aefc", // plum
    "#fbcfe9", // misty rose
    "#e6c9a9", // light brown
    "#e9eaee", // light gray
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

export { getRandomColor };