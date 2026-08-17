import Spiderman from '../assets/chars/spidermans.png';
import Sponge1 from '../assets/chars/spongebob1.png';
import sponge2 from '../assets/chars/spongebob2.png';
import patrick1 from '../assets/chars/patrick.png';
import pik1 from '../assets/chars/pika1.png';
import mj1 from '../assets/chars/mj1.png';

export const CHARACTERS=[
    {
        id:'spiderman',
        name:'spiderman',
        image:Spiderman,
        side:'right',
        message:['Swing 😜', 'Loser 😙']

    },
    {
        id:'mj',
        name:'mj',
        image:mj1,
        side:'right',
        message:'hee hee 🕺',
    },
    {
        id:'pika',
        name:'pika',
        image: pik1,
        side: 'any',
        message: 'pika pika 🥰'
    },
    {
        id:'sponge',
        name:'sponge',
        image:Sponge1,
        side:'left',
        message:['bwahaha 😂','love it!💖']
    },
    {
        id:'sponge',
        name:'sponge',
        image:sponge2,
        side:'left',
        message:['Smart kid','📚']
    },
    {
        id:'patrick',
        name:'patrick',
        image:patrick1,
        side:'right',
        message:['🤤', 'Hey there😛']

    }
]