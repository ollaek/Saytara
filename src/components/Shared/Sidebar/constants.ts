
export const sideBarElements = [
    {
        title: 'Dashboard',
        hasSubMenu: false,
        subMenu: [],
        linkComponent: "/Dashboard",
        icon: "simple-icon-pie-chart"   
    },
    {
        title: 'Tasks',
        icon: "simple-icon-layers",
        hasSubMenu: true,
        subMenu: [
            {
                title:"Library",
                icon:"",
                linkComponent:"/Tasks"
            },
            {
                title:"Create Template",
                icon:"",
                linkComponent:""
            },
            {
                title:"Assign Task",
                icon:"",
                linkComponent:""
            },
            {
                title:"Manage Tasks",
                icon:"",
                linkComponent:""
            }
        ]
    }
];