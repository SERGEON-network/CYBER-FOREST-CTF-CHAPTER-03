// app.js
const term = new Terminal();
term.open(document.getElementById('terminal-container'));
term.write('Welcome to the Nexus. Type \"help\" to start.\r\n$ ');

// Draw the initial network map based on gameNetwork data, but only show the player's node and connected cables.
drawNetworkMap(gameNetwork.playerCurrentNode);

term.onData(e => {
    // 1. User types a command like "nmap 192.168.1.15"
    // 2. Split the command and the argument.
    const [command, arg] = e.trim().split(' ');

    // 3. Check if the command is valid for the current game state.
    switch(command) {
        case 'nmap':
            // 4. Check if the 'arg' (IP) is a cable connected to the player's current node.
            const currentNode = gameNetwork.nodes[gameNetwork.playerCurrentNode];
            if(currentNode.cables.includes(arg)) {
                // 5. If it is, look up that node in gameNetwork.nodes and simulate an nmap scan.
                const targetNode = gameNetwork.nodes[arg];
                const portList = targetNode.ports.map(p => ${p}/tcp open).join('\n');
                term.write(\r\nStarting Nmap scan for ${arg}\r\n);
                term.write(portList + '\r\n$ ');
                // 6. If it's a new node, add it to the visible map!
                addNodeToMap(arg);
            } else {
                term.write('\r\nError: Host unreachable. Check your network path.\r\n$ ');
            }
            break;
        case 'ftp':
            // Similar logic: check if IP is connected, then simulate FTP login, ls, get.
            simulateFTP(arg, term);
            break;
        case 'help':
            term.write('\r\nCommands: nmap [IP], ftp [IP], ping [IP], connect [IP]\r\n$ ');
            break;
        default:
            term.write(`\r\nCommand not found: ${command}\r\n$ `);
    }
});
