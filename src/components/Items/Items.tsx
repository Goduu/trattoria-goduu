import { Item } from './Item';
import menu from './itens.json';
import { useState, useEffect, FC } from "react";

type ItemsProps = {
  search: string,
  filter: string | null,
  sortBy: string
}
function testSearch(title: string, search: string) {
  const regex = new RegExp(search, 'i');
  return regex.test(title);
}

function testFilter(categories: string[], filter: string | null) {
  if (filter !== null) return categories.includes(filter);
  return true;
}

function sort(newList: typeof menu, sortBy: string) {
  switch (sortBy) {
    case 'portion':
      return newList.sort((a, b) => a.size > b.size ? 1 : -1);
    case 'person_served':
      return newList.sort((a, b) => a.serving > b.serving ? 1 : -1);
    case 'price':
      return newList.sort((a, b) => a.price > b.price ? 1 : -1);
    default:
      return newList;
  }
}

export const Items: FC<ItemsProps> = (props) => {
  const [itemsList, setItemsList] = useState(menu);
  const { search, filter, sortBy } = props;

  useEffect(() => {
    const newList = menu.filter(item => testSearch(item.title, search) && testFilter(item.categories, filter));
    setItemsList(sort(newList, sortBy));
  }, [search, filter, sort])

  return (
    <div className="flex flex-col gap-16 mb-10">
      {itemsList.map(item => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  )
}