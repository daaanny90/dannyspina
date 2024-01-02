interface Image {
  folder: string;
  imgUrl: string;
}

const groupBy = (input, key) => {
  return input.reduce((acc, currentValue) => {
    let groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
};

export const load = async () => {
  const data = import.meta.glob('/static/images/insta/**/*.jpg')

  const imgArray = Object.keys(data)

  const imgObj = imgArray.map((img) => {
    const arrayPath = img.split('/')
    const folder = arrayPath[4]

    return { folder: folder, imgUrl: img }
  })

  console.log(imgObj)
  /*
    const images = imgObj.reduce((group: any, img: Image): any => {
      const { folder, imgUrl } = img;
      group[folder] = group[folder] ?? [];
      group[folder].push(imgUrl);
  
      return group;
    }, {})
  
    console.log(imgObj)
    */
  return { images: groupBy(imgObj, 'folder') }
}
