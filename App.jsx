export const items = [
    { name: 'Home', url:'/' },
    {
        name: 'Tutorials',
        children: [
            { name: 'Beginner', url: '/tutorials/beginner' },
            { name: 'Intermediate', url: '/tutorials/intermediate' },
            { name: 'Advanced', url: '/tutorials/advanced' }
        ]
    },
    {
        name: 'Webtips',
        children: [
            { name: 'React', url: '/webtips/react' },
            { name: 'JavaScript', url: '/webtips/javascript' },
            { name: 'CSS', url: '/webtips/css' }
        ]
    },
    {...}
]