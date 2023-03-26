const types = ['Blog Post', 'Article', 'White Paper', 'Video'];
const formats = ['Webpage', 'Video', 'PDF'];
const difficultyLevels = ['Junior', 'Intermediate', 'Senior'];
const sections = ['MCU Programming', 'RTOS', 'Networking', 'Web'];

const test_existance = (element, array) =>
{
  if (!array.includes(element))
  { 
    throw new Error(`Element ${element} not found in array ${array}`)
  }
}

class item {
  constructor(name, type, format, difficultyLevel, section, url) {
    this.name = name;
    this.url = url;

    test_existance(type, types);
    this.type = type;

    test_existance(format, formats);
    this.format = format;

    test_existance(difficultyLevel, difficultyLevels);
    this.difficultyLevel = difficultyLevel;

    test_existance(section, sections);
    this.section = section;
  }
}

const items = [
  new item('Pointer programming in C',
           'Video',
           'Video',
           'Junior',
           'MCU Programming',
           "https://www.youtube.com/watch?v=cc16ShyiUG8&list=PLRJhV4hUhIymmp5CCeIFPyxbknsdcXCc8&index=6")

]

export { items, types, formats, difficultyLevels, sections}
