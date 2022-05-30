import images from '../images/productImages';

export default function ProductCard({
  id,
  serialNumber,
  type,
  location,
  status,
  image,
  onClick,
}) {
  return (
    <div
      className={
        'border border-content rounded-md shadow-md p-2 flex cursor-pointer ' +
        (onClick && 'hover:bg-content/30')
      }
      onClick={() => onClick()}
    >
      <img src={images[image]} alt={'product'} className="w-32 h-32" />
      <div className="flex flex-col text-main space-y-2">
        <p className="text-xl">
          S/N: <span className="text-content">{serialNumber}</span>
        </p>
        <p>
          Type: <span className="text-content">{type}</span>
        </p>
        <p>
          Location: <span className="text-content">{location}</span>
        </p>
        <p>
          Status:{' '}
          <span
            className={
              'font-bold ' +
              (status === 'Error' ? 'text-red-500' : 'text-green-500')
            }
          >
            {status}
          </span>
        </p>
      </div>
    </div>
  );
}
