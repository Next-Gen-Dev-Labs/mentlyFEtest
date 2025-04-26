import { createId } from "@paralleldrive/cuid2";

const homeLayouts = [
	{
		icon: "material-symbols-light:event-list-outline-sharp",
		key: "without-preview",
	},
	{
		icon: "material-symbols-light:gallery-thumbnail-outline-sharp",
		key: "with-preview",
	},
] as const;

export default homeLayouts.map((hl) => ({ id: createId(), ...hl }));
