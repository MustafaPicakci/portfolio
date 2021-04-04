export default {
    pieChart() {
        $(".chart").easyPieChart({
            scaleColor: false,
            lineWidth: 10,
            lineCap: "butt",
            barColor: "#17e7a4",
            trackColor: "#000000",
            size: 160,
            animate: 1000,
        });
    }
}