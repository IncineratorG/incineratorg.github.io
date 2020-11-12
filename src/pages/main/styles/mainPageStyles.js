const mainPageStyles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: ({mainContainerBackgroundColor}) =>
            mainContainerBackgroundColor ? mainContainerBackgroundColor : 'lightgrey',
    },
    header: {
        width: '100%',
        height: '10vh',
    },
    body: {
        height: '77vh',
    },
    footer: {
        width: '100%',
        height: '10vh',
    },
};

export default mainPageStyles;
