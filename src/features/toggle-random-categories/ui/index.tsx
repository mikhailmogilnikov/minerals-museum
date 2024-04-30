import { Switch } from '@nextui-org/switch';
import { useLocalStorage } from 'react-use';

export const ToggleRandomCategories = () => {
  const [isRandom, setIsRandom] = useLocalStorage('random-categories', false);

  const handleChange = () => {
    setIsRandom(!isRandom);
  };

  return (
    <Switch
      isSelected={isRandom}
      onValueChange={handleChange}
      size='lg'
      color='success'
    />
  );
};
