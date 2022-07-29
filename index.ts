import { createInterface } from 'readline';
import { MapCell, Player } from './ItemType';

const getInput = (prompt: string) => {
	const stdio = createInterface(process.stdin, process.stdout);
	
	stdio.setPrompt(`${prompt} `);

	stdio.prompt();

	return new Promise<string>((res, rej) => {
		stdio.on('line', line => res(line));
		stdio.on('close', rej);
	});
};

const name = await getInput('Enter your name:');

const player: Player = {
	name,
	inventory: [],
	position: { x: 0, y: 0 }
};

const map: MapCell[][] = [[
	{}
]];

console.log(`Welcome ${player.name}!`);
