import { dataSeries } from './data.js';
var seriesTableBody = document.getElementById('series');
var averageSeasons = document.getElementById('averageSeasons');
loadSeriesTable(dataSeries);
averageSeasons.innerHTML = "<b>Seasons average:</b> ".concat(average(dataSeries));
function loadSeriesTable(series) {
    series.forEach(function (serie) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td><b>".concat(serie.getIndex(), "<b></td>\n        <td><a href=\"").concat(serie.getLinkImage(), "\" target=\"_blank\">").concat(serie.getName(), "</a></td>\n        <td>").concat(serie.getchannel(), "</td>\n        <td>").concat(serie.getSeasons(), "</td>");
        seriesTableBody.appendChild(tr);
    });
}
//function average of seasons
function average(series) {
    var sum = 0;
    series.forEach(function (serie) {
        sum += serie.getSeasons();
    });
    return sum / series.length;
}
