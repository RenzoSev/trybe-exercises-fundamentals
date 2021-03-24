const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
        street: 'Rua das Flores',
        number: '389',
        apartment: '701',
    },
    order: {
        pizza: {
            margherita: {
                amount: 1,
                price: 25,
            },
            pepperoni: {
                amount: 1,
                price: 20,
            }
        },
        drinks: {
            coke: {
                type: 'Coca-Cola Zero',
                price: 10,
                amount: 1,
            }
        },
        delivery: {
            deliveryPerson: 'Ana Silveira',
            price: 5,
        }
    },
    payment: {
        total: 60,
    },
};

console.log(order.address)

const customerInfo = (order) => {
    const address = order.address;
    const helloName = order.order.delivery.deliveryPerson;
    const deliverName = order.name;
    const telephone = order.phoneNumber;
    const street = address.street;
    const number = address.number;
    const apartment = address.apartment;

    const message = `Olá ${helloName}, entrega para: ${deliverName}, Telefone: ${telephone}, R. ${street}, Nº: ${number}, AP: ${apartment}`;
    console.log(message);
}

customerInfo(order);

const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.

}

orderModifier(order);