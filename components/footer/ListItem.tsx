import Link from "next/link";

function ListItem({ item }: { item: { name: string; href: string } }) {
  return (
    <li className="mb-2">
      <Link
        href={item.href}
        className="py-1 text-lg font-medium text-grey-60 duration-200 hover:text-primary-60"
      >
        {item.name}
      </Link>
    </li>
  );
}

export default ListItem;
