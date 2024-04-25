import { IconType } from 'react-icons';

export default function SliderButton({
  Icon,
  onClick,
}: {
  Icon: IconType;
  onClick?: () => void;
}) {
  return (
    <button
      className="flex items-center justify-center duration-150 border-2 border-white border-solid rounded-full size-10 hover:scale-105"
      onClick={onClick}
    >
      <Icon />
    </button>
  );
}
