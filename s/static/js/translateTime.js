var timeEstimatesTranslation = {
    "less than a second": "menos de um segundo",
    "1 second": "1 segundo",
    "seconds": "segundos",
    "minutes": "minutos",
    "hours": "horas",
    "days": "dias",
    "months": "meses",
    "years": "anos",
    "centuries": "séculos"
};

function translateTimeEstimate(estimate) {
    for (var term in timeEstimatesTranslation) {
        if (estimate.includes(term)) {
            return estimate.replace(term, timeEstimatesTranslation[term]);
        }
    }
    return estimate;
}
