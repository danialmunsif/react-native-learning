import React, {useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './SocialInput.styles';
import {Colors} from '../../shared/Colors';

const GreenTick = require('../../../assets/images/GreenTick.png');
const Cross = require('../../../assets/images/Cross.png');

type socialApp = {
  id: string;
  icon: any;
  name: string;
};

type SocialInputProps = {
  icon: any;
  initialValue?: string;
  platform: socialApp;
  socialApps?: socialApp[];
  setSocialApps: React.Dispatch<React.SetStateAction<socialApp[]>>;
};

const SocialInput = ({
  icon,
  initialValue = '',
  setSocialApps,
  platform,
  socialApps,
}: SocialInputProps) => {
  const [value, setValue] = useState('');

  const handleFill = () => {
    const newValue = initialValue;
    setValue(newValue);

    const isAlreadyFilled = socialApps?.find(app => app.id === platform.id);
    !isAlreadyFilled &&
      setSocialApps([...(socialApps || []), {...platform, name: newValue}]);
  };

  const handleClear = () => {
    setValue('');
    const res = socialApps?.filter(app => app.id !== platform.id);
    setSocialApps(res || []);
  };

  return (
    <TouchableOpacity style={styles.inputContainer} onPress={handleFill}>
      <Image source={icon} style={styles.socialIcon} />
      <Text style={styles.atSign}>@</Text>
      <Text
        style={[
          styles.inputText,
          {color: value ? Colors.PRIMARY : Colors.Grey},
        ]}>
        {value || 'username'}
      </Text>
      {value && (
        <>
          <Image source={GreenTick} style={styles.greenTick} />
          <TouchableOpacity onPress={handleClear}>
            <Image source={Cross} style={styles.cross} />
          </TouchableOpacity>
        </>
      )}
    </TouchableOpacity>
  );
};

export default SocialInput;
