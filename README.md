# Technical Test

Requirements pre start: 
- You need `yarn` in your system (check installation: `yarn --version`)
- The port 3002 should be free. You could change the port in the config/env.yml file.

Installation:
- We have to download the dependency packages. 
yarn install

Start:
- We need start the server. In a new terminal, run the next command:
`yarn start server`
(we don't close this windows because it is the server)
- If you started the server, we will able to use the command cli.
So we have to open another terminal and run `yarn start cli`
- We could choose a command like:
* Import CSV - (Import the data from reviews.csv to local memory)
* Search - (Show the imported list in local memory)
* Export CSV (Export the selected data to sitters.csv)
* New memory (Create a new local memory)
* Exit (Close the command cli)
- We can use the arrow keys to select any.
- After exec, the cli will close.

Note: The server persist the memory. If we close the server, the imported data will lose.

# Technical section
If you want to check the script to run the tests, we have to run the next command:
`yarn start test`