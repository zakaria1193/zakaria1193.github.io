import { item } from './Item';

const itemsData = [
  {
    name: 'Pointer programming in C',
    type: 'Video',
    format: 'Video',
    difficultyLevel: 'Junior',
    section: 'MCU Programming',
    url: 'https://www.youtube.com/watch?v=cc16ShyiUG8&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=6',
    sentence: ''
  },
  {
    name: 'Memory mapped I/O',
    type: 'Video',
    format: 'Video',
    difficultyLevel: 'Junior',
    section: 'MCU Programming',
    url: 'https://www.youtube.com/watch?v=aT5XMOrid7Y&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=6',
    sentence: ''
  },
  {
    name: 'GPIO Output: Lighting up a LED',
    type: 'Video',
    format: 'Video',
    difficultyLevel: 'Junior',
    section: 'MCU Programming',
    url: 'https://www.youtube.com/watch?v=zHHwbRdstoQ&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=7',
    sentence: ''
  },
  {
    name: 'Interrupts and Timers',
    type: 'Video',
    format: 'Video',
    difficultyLevel: 'Junior',
    section: 'MCU Programming',
    url: 'https://www.youtube.com/watch?v=uFBNf7F3l60&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=11',
    sentence: ''
  },
  {
    name: 'Memory-Mapped I/O: GPIO Example',
    type: 'Video',
    format: 'Video',
    difficultyLevel: 'Junior',
    section: 'MCU Programming',
    url: 'https://www.youtube.com/watch?v=K0vmH2YGbOY&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=11',
    sentence: ''
  },
  {
    name: 'Direct Memory Access (DMA)',
    type: 'Video',
    format: 'Video',
    difficultyLevel: 'Junior',
    section: 'MCU Programming',
    url: 'https://www.youtube.com/watch?v=uKwD3JuRWeA&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=12',
    sentence: ''
  },
  {
    name: 'ARM Cortex-M Exceptions and NVIC',
    type: 'Article',
    format: 'Webpage',
    difficultyLevel: 'Intermediate',
    section: 'MCU Programming',
    url: 'https://interrupt.memfault.com/blog/arm-cortex-m-exceptions-and-nvic#exception-entry--exit',
    sentence: ''
  },
  {
    name: 'Boostrapping libc with Newlib',
    type: 'Article',
    format: 'Webpage',
    difficultyLevel: 'Intermediate',
    section: 'MCU Programming',
    url: 'https://interrupt.memfault.com/blog/boostrapping-libc-with-newlib',
    sentence: ''
  }
];


const items = itemsData.map(itemData => new item(
  itemData.name,
  itemData.type,
  itemData.format,
  itemData.difficultyLevel,
  itemData.section,
  itemData.hasOwnProperty('subsection') ? itemData.subsection : '',
  itemData.url,
  itemData.sentence));

export {items};
