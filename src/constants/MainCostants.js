export class Backend {
	static ROUTES = {
		addNoteUrl: "note",
		editNoteUrl: "edit-note",
		deleteNoteUrl: "delete",
	};

	static API_URL = "https://young-escarpment-43192.herokuapp.com/";

}

export class Methods {
	static refreshApp = () => {
		return window.location.reload()
	}
}