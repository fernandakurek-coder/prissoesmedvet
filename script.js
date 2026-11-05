document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile (Hamburger)
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }

    // 2. Gráfico de Rosca - Distribuição por Espécie e Área
    const ctxAreas = document.getElementById('areasChart');
    if (ctxAreas) {
        new Chart(ctxAreas.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Cães e Gatos (Pet)', 'Grandes Animais (Equinos/Bovinos)', 'Saúde Pública & Inspeção', 'Aves, Répteis & Silvestres', 'Pesquisa & Biotecnologia'],
                datasets: [{
                    data: [42, 24, 16, 11, 7],
                    backgroundColor: [
                        '#0d9488', // Teal
                        '#f59e0b', // Amber (Equinos)
                        '#2563eb', // Blue
                        '#9333ea', // Purple (Exóticos)
                        '#f43f5e'  // Rose
                    ],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            font: { family: "'Segoe UI', sans-serif", size: 12 }
                        }
                    }
                }
            }
        });
    }

    // 3. Gráfico de Linha - Crescimento do Setor
    const ctxTrend = document.getElementById('trendChart');
    if (ctxTrend) {
        new Chart(ctxTrend.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2021', '2022', '2023', '2024', '2025', '2026 (Proj.)'],
                datasets: [{
                    label: 'Faturamento em R$ Bilhões',
                    data: [51.9, 60.2, 68.7, 76.5, 84.1, 93.5],
                    borderColor: '#f97316',
                    backgroundColor: 'rgba(249, 115, 22, 0.12)',
                    fill: true,
                    tension: 0.35,
                    pointBackgroundColor: '#f97316',
                    pointRadius: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        grid: { color: '#f1f5f9' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }
});
