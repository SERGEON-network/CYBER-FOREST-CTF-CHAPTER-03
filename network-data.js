// network-data.js
const gameNetwork = {
    playerCurrentNode: "192.168.1.10", // Player starts here
    nodes: {
        "192.168.1.1": {
            name: "Gateway Router",
            ports: [22, 80],
            cables: ["192.168.1.10", "192.168.1.20", "192.168.1.15"], // What it connects to
            // ... other data for this node
        },
        "192.168.1.10": {
            name: "Your Machine",
            ports: [],
            cables: ["192.168.1.1"],
        },
        "192.168.1.15": {
            name: "Target Server",
            ports: [21, 80],
            cables: ["192.168.1.1", "192.168.1.99"],
            services: {
                21: {
                    type: "ftp",
                    banner: "Welcome to the Alpha FTP Server",
                    files: {
                        "/": ["note.txt"],
                        "/uploads": ["backup.zip"]
                    }
                },
                80: {
                    type: "http",
                    indexPage: "<html>...<!-- flag: f1ag_1_5_3cur3 -->...</html>"
                }
            }
        },
        "192.168.1.20": { name: "Dead Node", ports: [], cables: ["192.168.1.1"] },
        "192.168.1.99": { name: "Another Dead End", ports: [], cables: ["192.168.1.15"] }
    }
};
