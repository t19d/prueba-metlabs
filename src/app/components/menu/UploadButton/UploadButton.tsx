"use client";

export default function UploadButton() {
	const handleUpload = () => {
		console.log("Subir obra");
	};

	return (
		<button className="btn" type="button" onClick={handleUpload}>
			Subir obra
		</button>
	);
}
