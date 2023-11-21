import { getRandomColor } from './Colors.js';

const todoItems = [
    {
        id: crypto.randomUUID(),
        title: 'Morning Exercise',
        description: 'Small exercises in the morning for back and neck',
        done: false,
        priority: 1,
        backgroundColor: getRandomColor()
    },
    {
        id: crypto.randomUUID(),
        title: 'Drink Water',
        description: 'Drink half liters water in the morning',
        done: false,
        priority: 2,
        backgroundColor: getRandomColor()
    },
    {
        id: crypto.randomUUID(),
        title: 'Pray',
        description: 'Pray & Meditation for 20 mins every morning',
        done: false,
        priority: 3,
        backgroundColor: getRandomColor()
    },
    {
        id: crypto.randomUUID(),
        title: 'Eye Stretch',
        description: 'Focus on an object at least 20 meters away for 30 secs',
        done: true,
        priority: 2,
        backgroundColor: getRandomColor()
    },
    {
        id: crypto.randomUUID(),
        title: 'Wake Up Early',
        description: 'Wake up in the morning 06:00 am at the latest',
        done: false,
        priority: 3,
        backgroundColor: getRandomColor()
    }
];

export { todoItems };