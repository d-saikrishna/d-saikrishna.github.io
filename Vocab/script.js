async function fetchCsvData(file) {
    const response = await fetch(file);
    const data = await response.text();
    return data;
}

function parseCsvData(data) {
    const lines = data.trim().split('\n');
    return lines.slice(1).map(line => line.split(','));
}

function createSpectrumLine(words, meanings) {
    const spectrumContainer = document.createElement('div');
    spectrumContainer.className = 'spectrum-container';

    const spectrumLine = document.createElement('div');
    spectrumLine.className = 'spectrum-line';

    const sizeLabel = document.createElement('div');
    sizeLabel.className = 'size-label';
    sizeLabel.innerText = words[0]; // First word as size label

    spectrumLine.appendChild(sizeLabel);

    words.slice(1).forEach(word => { // Skip the first word
        word = word.trim()
        const sizeCategory = document.createElement('div');
        sizeCategory.className = 'size-category';
        sizeCategory.innerText = word;


        // Add hover event to show meaning
        sizeCategory.addEventListener('mouseover', (event) => {
            const tooltip = document.getElementById('tooltip');
            const meaning = meanings[word];
            tooltip.innerText = meaning ? meaning : "No meaning found";
            tooltip.style.visibility = 'visible';
            tooltip.style.top = `${event.pageY + 10}px`;
                    tooltip.style.left = `${event.pageX}px`;
                });


        sizeCategory.addEventListener('mousemove', (event) => {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.left = `${event.pageX + 10}px`;
            tooltip.style.top = `${event.pageY + 10}px`;
        });

        sizeCategory.addEventListener('mouseout', () => {
            const tooltip = document.getElementById('tooltip');
            tooltip.style.visibility = 'hidden';
        });

        spectrumLine.appendChild(sizeCategory);
    });

    spectrumContainer.appendChild(spectrumLine);
    return spectrumContainer;
}

async function initializeSpectrum() {
    const csvDataWords  = await fetchCsvData('words.csv');
    const csvDataMeanings = await fetchCsvData('meanings.csv');

    const parsedDataWords = parseCsvData(csvDataWords);
    const parsedDataMeanings = parseCsvData(csvDataMeanings);

    const meanings = {};
    parsedDataMeanings.forEach(row => {
                meanings[row[0]] = row[1];
            });

    const spectrumScroll = document.getElementById('spectrumScroll');

    parsedDataWords.forEach(row => {
        const spectrumLine = createSpectrumLine(row, meanings);
        spectrumScroll.appendChild(spectrumLine);
    });
}

initializeSpectrum();
