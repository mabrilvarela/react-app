const products = [
    {id: '1' , category: 'perros', name: 'Adulto Razas Grandes', price: 8950, kg: '15 kg', description: 'Utilizando como ingrediente principal carne fresca de pollo, esta fórmula ofrece, a través de croquetas más grandes, una nutrición con alto contenido de proteínas (26%) de calidad y menos calorías provenientes de la grasa (12%).', img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/purina-pro-plan-flagship-perros-adult-razas-grandes.png?itok=nsvEIzQa'},
    {id: '2', category: 'perros', name: 'Active Mind 7+ Razas Medianas y Grandes', price: 9790, kg: '15 kg', description: 'Provee nutrición de avanzada para proteger a los perros mayores de 7 años, manteniéndolos sanos y activos. Formulado con fuentes naturales de glucosamina, que ayudan a mantener las articulaciones sanas y una movilidad óptima. ', img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/purina-pro-plan-flagship-perros-active-mind-razas-medianas-y-grandes.png?itok=IQrn1_wh'},
    {id: '3', category: 'perros', name: 'Sensitive Skin Adult Razas Medianas y Grandes', price: 10290, kg: '15 kg', description: 'Dieta de alta tolerancia desarrollada especialmente para satisfacer las necesidades específicas de perros con piel sensible.', img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/purina-pro-plan-flagship-perros-sensitive-skin-razas-medianas-y-grandes.png?itok=XqyotJo4'},
    {id: '4', category: 'gatos', name: 'Gato Adulto', price: 3890, kg: '3 kg', description: 'Es una tecnología exclusiva, con una combinación de prebióticos y antioxidantes naturales, que ayudan a optimizar la digestión y a mantener fuertes las defensas naturales de tu gato, protegiendo su sistema inmunológico contra las amenazas externas.', img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/purina-pro-plan-gatos-adult_0.png?itok=ncOHlkK6'},
    {id: '5', category: 'gatos', name: 'Sensitive', price: 4490, kg: '3 kg', description: 'OptiDerma® es una tecnología exclusiva, con un número limitado de fuentes de proteína para ayudar a disminuir las sensibilidades alimentarias.', img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/purina-pro-plan-gatos-sensitive_0.png?itok=sk6hm3Ra'},
    {id: '6', category: 'gatos', name: 'Urinary', price: 4490, kg: '3 kg', description: 'Es una tecnología exclusiva, que incluye una combinación de nutrientes que ayuda a prevenir la formación de cristales de estruvita y de oxalato, manteniendo y protegiendo la salud del tracto urinario inferior de los gatos adultos.', img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/purina-pro-plan-gatos-urinary_0.png?itok=MURTOOpg'}
]

export const getFetch = new Promise (( resolve, reject ) => {    

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(products)
        }, 3000)
    } else {
        reject('400 not found')
    }
})

