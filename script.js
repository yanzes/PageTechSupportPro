// Servicios data
const services = [
    {
        icon: 'monitor',
        title: 'Soporte para Computadores',
        description: 'Mantenimiento y reparación de equipos',
        content: 'Ofrecemos soporte técnico especializado para mantener tus equipos funcionando de manera óptima.',
        image: 'https://img.freepik.com/fotos-premium/reparacion-computadoras-imagen-hd-tecnico-computadoras-reparacion-portatiles-reparacion-escritorios-soporte-informatico_1012565-21459.jpg'
    },
    {
        icon: 'shopping-cart',
        title: 'Compra y Venta de Equipos',
        description: 'Encuentra el equipo perfecto para tus necesidades',
        content: 'Amplia gama de equipos nuevos y reacondicionados con garantía y soporte post-venta.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSovBfTwdFaBOKT3Eaa7hW-1GXtRXm65tZ8CA&s'
    },
    {
        icon: 'laptop',
        title: 'Soporte de Software',
        description: 'Soluciones para todo tipo de software',
        content: 'Instalación, configuración y solución de problemas para sistemas operativos y aplicaciones.',
        image: 'https://gestion.pe/resizer/v2/WLG6ENU2FRBYJB7W6VQ57RTKUA.jpg?auth=61760ceb0a21ec451b86b0ce188d037f16be82c9aa8b143f6a448ff0675d6dc3&width=1200&height=900&quality=75&smart=true'
    },
    {
        icon: 'message-square',
        title: 'Chat Bot',
        description: 'Asistencia automatizada 24/7',
        content: 'Implementamos chatbots inteligentes para brindar soporte instantáneo a tus clientes.',
        image: 'https://cdn.prod.website-files.com/5e38f1a8e654dab96f303972/63c84da22b7ea11f3a242b71_Desaf%C3%ADos-de-Servicio-al-Cliente-en-los-Bancos-Cover.png'
    },
    {
        icon: 'shield',
        title: 'VPN',
        description: 'Conexiones seguras y privadas',
        content: 'Configuración de redes privadas virtuales para garantizar la seguridad de tus datos.',
        image: 'https://www.seteinco.com/wp-content/uploads/2019/10/gestion-de-la-seguridad-informatica-empresas-vigo.jpg'
    },
    {
        icon: 'terminal',
        title: 'Aplicaciones en Linux',
        description: 'Soluciones de código abierto',
        content: 'Desarrollo e implementación de aplicaciones personalizadas en entornos Linux.',
        image: 'https://c4-technologies.com/wp-content/uploads/2023/07/Servicios-Linux1.jpg'
    }
];

// Función para crear el SVG del ícono
function getIconSVG(iconName) {
    const icons = {
        'monitor': '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
        'shopping-cart': '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
        'laptop': '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0l1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>',
        'message-square': '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
        'shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
        'terminal': '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>'
    };
    
    return `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${icons[iconName]}
            </svg>`;
}

// Renderizar las tarjetas de servicios
function renderServices() {
    const servicesGrid = document.getElementById('services-grid');
    services.forEach(service => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                ${getIconSVG(service.icon)}
                <h3 class="card-title">${service.title}</h3>
                <p class="card-description">${service.description}</p>
            </div>
            <div class="card-content">
                 <img src="${service.image || '/api/placeholder/300/200'}" alt="${service.title}" 
                     class="rounded-lg object-cover mb-4" width="380" height="260">
                <p>${service.content}</p>
            </div>
        `;
        servicesGrid.appendChild(card);
    });
}

// Manejar el envío del formulario
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí irían las validaciones y el envío del formulario
    alert('Mensaje enviado con éxito');
    this.reset();
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    renderServices();
});