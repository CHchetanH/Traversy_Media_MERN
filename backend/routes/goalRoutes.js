import express from "express";
const router = express.Router();

router.get("/", (request, response) => {
	response.status(200).json({
		name: "chetan",
	});
});
router.post("/", (request, response) => {
	response.status(200).json({
		Method: "Post",
	});
});
router.put("/:id", (request, response) => {
	response.status(200).json({
		Method: `Update ${request.params.id}`,
	});
});
router.delete("/:id", (request, response) => {
	response.status(200).json({
		Method: `Delete ${request.params.id}`,
	});
});

export default router;
