const productos = [
    {id: '1' , categoria: 'alimento balanceado perros', nombre: 'proplan', precio: 7000, img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/PURINA-PROPLAN-SECCION-PERROS-ADULTO_1.png?itok=wrmBekJp'},
    {id: '2', categoria: 'alimento balanceado perros', nombre: 'proplan', precio: 6500, img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/PURINA-PROPLAN-SECCION-PERROS-ACTIVE-MIND_2_0.png?itok=vpHJQ1zn'},
    {id: '3', categoria: 'alimento balanceado perros', nombre: 'proplan', precio: 5000, img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/Purina%C2%AE%20Pro%20Plan%C2%AE%20paladar%20exigente.png?itok=wuvke-qi'},
    {id: '4', categoria: 'alimento balanceado gatos', nombre: 'proplan', precio: 4500, img: 'https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/kraken_generic_max_width_360/public/Purina%C2%AE-Proplan%C2%AE-Optiage.png?itok=t4XMiM8e'},
    {id: '5', categoria: 'alimento balanceado gatos', nombre: 'proplan', precio: 3000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDE0NOHmh3uqXlgviFEk1shRe7pXZcghOv-ptlq9IL-gfqYF-WDp_UdtC-FbdaRPKfrA&usqp=CAU'},
    {id: '6', categoria: 'alimento balanceado gatos', nombre: 'proplan', precio: 3500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5uypriqo8kqkFdxWQqdA03PiNXAPAxXt17ABezUNDlCPGW-HWN0Ot4oy2t4jQAVl3OwM&usqp=CAU'}
]

export const getFetch = new Promise (( resolve, reject ) => {    

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    } else {
        reject('400 not found')
    }
})

