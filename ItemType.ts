type ItemType = {
	id: string;
	name: string;
	stackable: boolean;
};

type InventorySlot = {
	itemType: ItemType;
	count?: number;
};

type Coordinate = {
	x: number,
	y: number
};

export type Player = {
	name: string;
	inventory: InventorySlot[];
	position: Coordinate
};

export type MapCell = {

};