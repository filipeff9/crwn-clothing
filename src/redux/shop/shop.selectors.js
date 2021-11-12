import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	(shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	(collections) =>
		collections ? Object.keys(collections).map((key) => collections[key]) : []
);
//Object.keys returns an array of the keys => map can be called

export const selectCollection = (collectionUrlParam) =>
	createSelector([selectCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	);
