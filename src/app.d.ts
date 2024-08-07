// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	interface Image {
		title: string;
		description: string;
		slug: string;
		imagess: Array<{
		  slug: string;
		  image: {
			fileName: string;
			size: number;
			mimeType: string;
			url: string;
			width: number;
			height: number;
			handle: string;
		  };
		}>;
	  }
}

export {};
