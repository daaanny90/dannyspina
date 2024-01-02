import type { Image } from "$lib/helpers/types";
import { groupBy } from "$lib/helpers/utils";

export const load = async () => {
  const data = import.meta.glob('/static/images/insta/**/*.jpg')

  const imgArray = Object.keys(data)

  const imgObj: Image[] = imgArray.map((img) => {
    const arrayPath = img.split('/')
    const folder = arrayPath[4]

    return { folder: folder, imgUrl: img }
  })

  return { images: groupBy(imgObj, 'folder') }
}
