document.addEventListener('DOMContentLoaded', () => {

  // Visualização de seção ativa no menu conforme o scroll
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= (sectionTop - 150)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });

  // Configuração do Gráfico de Rosca: Áreas de Atuação
  const ctxAreas = document.getElementById('areasChart').getContext('2d');
  new Chart(ctxAreas, {
    type: 'doughnut',
    data: {
      labels: [
        'Clínica e Cirurgia Pet', 
        'Agronegócio e Grandes Animais', 
        'Inspeção Sanitária & Saúde Pública', 
        'Animais Silvestres / Conservação', 
        'Pesquisa, Docência e Outros'
      ],
      datasets: [{
        data: [45, 25, 15, 8, 7],
        backgroundColor: [
          '#10b981',
          '#064e3b',
          '#047857',
          '#34d399',
          '#a7f3d0'
        ],
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: 'Plus Jakarta Sans', size: 12 },
            padding: 15
          }
        }
      }
    }
  });

  // Configuração do Gráfico de Linhas: Crescimento do Setor
  const ctxGrowth = document.getElementById('growthChart').getContext('2d');
  new Chart(ctxGrowth, {
    type: 'line',
    data: {
      labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (Projeção)'],
      datasets: [{
        label: 'Faturamento do Setor Pet / Agro (em Bilhões R$)',
        data: [40.8, 51.9, 60.2, 68.7, 76.3, 84.1, 92.5],
        borderColor: '#10b981',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        fill: true,
        tension: 0.3,
        pointBackgroundColor: '#064e3b',
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            font: { family: 'Plus Jakarta Sans', size: 12 }
          }
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
});
