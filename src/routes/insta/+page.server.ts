interface Image {
  folder: string;
  imgUrl: string;
}

const groupBy = (input: unknown[], key: string) => {
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

  return { images: groupBy(imgObj, 'folder') }
}
