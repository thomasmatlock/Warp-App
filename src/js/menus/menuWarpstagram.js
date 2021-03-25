const { Menu, shell } = require('electron');

// Module function to create main app menu
module.exports = (appWin) => {
    // Menu template
    let template = [{
            label: 'File',
            submenu: [{
                    label: 'Import Subscriptions',
                    accelerator: 'CmdOrCtrl+O',
                    click: () => {
                        appWin.send('Warpstagram: File: Import Subscriptions');
                    },
                },
                {
                    label: 'Export Subscriptions',
                    accelerator: 'CmdOrCtrl+S',
                    click: () => {
                        appWin.send('Warpstagram: File: Export Subscriptions');
                    },
                },
                {
                    label: 'separator',
                    type: 'separator',
                },
                {
                    label: 'Export Posts...',
                    click: () => {
                        appWin.send('Warpstagram: File: Export Posts');
                    },
                },
                {
                    label: 'separator',
                    type: 'separator',
                },
                {
                    label: 'Quit',

                    accelerator: 'CmdOrCtrl+Shift+Q',

                    click: () => {
                        appWin.send('Quit');
                    },
                },
            ],
        },
        {
            label: 'Edit',
            submenu: [{
                    label: 'Subscribe to ',
                    submenu: [
                        { label: 'My Account' },
                        {
                            label: 'My Saved Posts',
                            click: () => {
                                appWin.send(
                                    'Warpstagram: Edit: Subscribe to My Saved Posts'
                                );
                            },
                        },
                        {
                            label: `Accounts I'm Following`,
                            click: () => {
                                appWin.send(
                                    'Warpstagram: Edit: Sub to Accts I Follow'
                                );
                            },
                        },
                        {
                            label: `Stories Of Accounts I'm Following`,
                            click: () => {
                                appWin.send(
                                    'Warpstagram: Edit: Sub to Stories Of Accts I Follow'
                                );
                            },
                        },
                    ],
                },

                {
                    label: 'separator',
                    type: 'separator',
                },
                {
                    label: 'Update pinned subscriptions',
                    click: () => {
                        appWin.send(
                            'Warpstagram: Edit: Update pinned subscriptions'
                        );
                    },
                },
                {
                    label: 'Update all subscriptions',
                    click: () => {
                        appWin.send(
                            'Warpstagram: Edit: Update all subscriptions'
                        );
                    },
                },
                {
                    label: 'Pause all subscriptions',
                    click: () => {
                        appWin.send(
                            'Warpstagram: Edit: Pause all subscriptions'
                        );
                    },
                },
                {
                    label: 'Remove all subscriptions',
                    click: () => {
                        appWin.send(
                            'Warpstagram: Edit: Remove all subscriptions'
                        );
                    },
                },
            ],
        },
        {
            label: 'Tools',
            submenu: [{
                    label: 'Login',
                    click: () => {
                        appWin.send('Warpstagram: Tools: Login');
                    },
                },
                {
                    label: 'separator',
                    type: 'separator',
                },
                {
                    label: 'Manage license',
                    click: () => {
                        appWin.send('Warpstagram: Tools: Manage license');
                    },
                },
                {
                    label: 'separator',
                    type: 'separator',
                },
                {
                    label: 'Check for updates...',
                    click: () => {
                        appWin.send('Check for update');
                    },
                },
                {
                    label: 'Preferences',
                    click: () => {
                        appWin.send('Warpstagram: Tools: Preferences');
                    },
                },
            ],
        },
        {
            label: 'Help',
            submenu: [{
                label: 'Learn More',
                click: () => {
                    shell.openExternal('https://warpdownload.com');
                },
            }, ],
        },

        // { role: 'viewMenu' },
    ];

    // Create Mac app menu
    // 'darwin', 'linux', 'win32', 'win64'
    if (process.platform === 'darwin') template.unshift({ role: 'appMenu' }); // appMenu is a complete role solution, like editMenu, to use OS default menu

    // Build menu
    let menu = Menu.buildFromTemplate(template); // use template array

    // Set as main app menu
    Menu.setApplicationMenu(menu);
};