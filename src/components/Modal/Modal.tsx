import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {MaterialIcon} from '../Icon/Icon';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../shared/Colors';
import {useSelector} from 'react-redux';

const Instagram = require('../../../assets/images/Instagram.png');
const Facebook = require('../../../assets/images/Facebook.png');
const TikTok = require('../../../assets/images/TikTok.png');
const Threads = require('../../../assets/images/Threads.png');
const Snapchat = require('../../../assets/images/Snapchat.png');
const Twitter = require('../../../assets/images/Twitter.png');
const Reddit = require('../../../assets/images/Reddit.png');
const LinkedIn = require('../../../assets/images/LinkedIn.png');
import {styles} from './Modal.styles';

const ModalBottomSheet = ({
  isVisible,
  onClose,
  onSave,
}: {
  isVisible: boolean;
  onClose: () => void;
  onSave: (platform: string, username: string) => void;
}) => {
  const initialState = {
    platform: '',
    username: '',
  };
  const user = useSelector((state: any) => state.auth.name);

  const [platform, setPlatform] = useState(initialState.platform);
  const [username, setUsername] = useState(initialState.username);
  const [open, setOpen] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [items, setItems] = useState([
    {
      label: 'Instagram',
      value: 'instagram',
      username: user,
      icon: () => <Image source={Instagram} style={{width: 30, height: 30}} />,
    },
    {
      label: 'Facebook',
      value: 'facebook',
      username: user,
      icon: () => <Image source={Facebook} style={{width: 30, height: 30}} />,
    },
    {
      label: 'TikTok',
      value: 'tikTok',
      username: user,
      icon: () => <Image source={TikTok} style={{width: 30, height: 30}} />,
    },
    {
      label: 'Threads',
      value: 'threads',
      username: user,
      icon: () => <Image source={Threads} style={{width: 30, height: 30}} />,
    },
    {
      label: 'Snapchat',
      value: 'snapchat',
      username: user,
      icon: () => <Image source={Snapchat} style={{width: 30, height: 30}} />,
    },
    {
      label: 'Twitter',
      value: 'twitter',
      username: user,
      icon: () => <Image source={Twitter} style={{width: 30, height: 30}} />,
    },
    {
      label: 'Reddit',
      value: 'reddit',
      username: user,
      icon: () => <Image source={Reddit} style={{width: 30, height: 30}} />,
    },
    {
      label: 'LinkedIn',
      value: 'linkedIn',
      username: user,
      icon: () => <Image source={LinkedIn} style={{width: 30, height: 30}} />,
    },
  ]);

  useEffect(() => {
    const selectedItem = items.find(item => item.value === platform);
    if (selectedItem) {
      setUsername(selectedItem.username);
    }
  }, [items, platform]);

  const selectedItem = items.find(item => item.value === platform);

  const toggleDeleteButton = () => {
    setShowDeleteButton(!showDeleteButton);
  };

  const handleDelete = () => {
    setPlatform(initialState.platform);
    setUsername(initialState.username);
    setShowDeleteButton(false);
    onClose();
  };

  const handleCancel = () => {
    setPlatform(initialState.platform);
    setUsername(initialState.username);
    setShowDeleteButton(false);
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} style={styles.modal}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Account</Text>
          <TouchableOpacity style={styles.more} onPress={toggleDeleteButton}>
            <MaterialIcon
              size="large"
              color={Colors.Black}
              name="dots-horizontal"
            />
          </TouchableOpacity>
          {showDeleteButton && (
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={handleDelete}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.content}>
          <View style={styles.selectedBox}>
            {selectedItem && (
              <>
                <View style={styles.selectedIcon}>{selectedItem.icon()}</View>
                <Text style={styles.selectedUsername}>
                  @ {selectedItem.username}
                </Text>
              </>
            )}
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={{marginBottom: 30, zIndex: 1000}}>
            <DropDownPicker
              open={open}
              value={platform}
              items={items}
              setOpen={setOpen}
              setValue={setPlatform}
              setItems={setItems}
              style={styles.dropdown}
              placeholder="Select a Platform"
              dropDownContainerStyle={styles.dropdownContainer}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={`@ ${username}`}
              editable={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleCancel}>
              <Text style={styles.close}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.saveButton}
              onPress={() => onSave(platform, username)}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalBottomSheet;
