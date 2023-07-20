var timeEstimatesTranslation = {
    "less than a second": "menos de um segundo",
    "1 second": "1 segundo",
    "second": "segundo",
    "seconds": "segundos",
    "minute": "minuto",
    "minutes": "minutos",
    "hour": "hora",
    "hours": "horas",
    "day": "dia",
    "days": "dias",
    "month": "mês",
    "months": "meses",
    "year": "ano",
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
