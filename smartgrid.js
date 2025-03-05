module.exports = {
	columns: 12,
	offset: "10px",
	container: {
		maxWidth: "1680px",
		fields: "40px" // Внимание! fields обязан быть >= offset / 2
	},
	breakPoints: {
		// xl: {
		// 	width: "1200px",
		// },
		// lg: {
		// 	width: "992px",
		// },
		md: {
			width: "834px",
			// fields: "40px"
		},
		xs: {
			width: "576px",
			fields: "15px"
		},
	}
}