// screens/MainScreen.js
import React, {useState, useEffect} from 'react';
import {SafeAreaView, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import Header from './Header';
import Search from './Search';
import TrendingSwitch from './TrendingSwitch';
import TrendingSection from './TrendingSection';
import BetRows from './BetRows';
import BottomNavigation from './BottomNavigation';
import DropdownMenu from '../../components/DropdownMenu/DropdownMenu';
import DropdownAdd from '../../components/DropdownMenu/DropdownAdd';
import {fetchUnreadCount} from '../../store/unreadMessageSlice';
import CreateBetModal from '../MainScreen/CreateBet/CreateBetModal';
import styles from './styles';
import bets from './bet';
import BetDetailInfoScreen from '../../components/BetInformation/BetDetailInfoScreen';

const {width} = Dimensions.get('window');

const MainScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const userProfile = useSelector(state => state.user.profile);
  const [menuDropdownVisible, setMenuDropdownVisible] = useState(false);
  const [addDropdownVisible, setAddDropdownVisible] = useState(false);
  const [selectedTrending, setSelectedTrending] = useState('Bets');
  const [searchQuery, setSearchQuery] = useState('');
  const [isTrendingOn, setIsTrendingOn] = useState(false);
  const [activePage, setActivePage] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const handleScroll = (event, rowIndex) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.floor(offsetX / width);
    setActivePage(prevState => ({
      ...prevState,
      [rowIndex]: page,
    }));
  };

  const toggleMenuDropdown = () => {
    setMenuDropdownVisible(!menuDropdownVisible);
    if (addDropdownVisible) setAddDropdownVisible(false);
  };

  const toggleAddDropdown = () => {
    setAddDropdownVisible(!addDropdownVisible);
    if (menuDropdownVisible) setMenuDropdownVisible(false);
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    dispatch(fetchUnreadCount(userProfile._id));
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <Header onCreateBetPress={toggleModal} />
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <TrendingSwitch
        isTrendingOn={isTrendingOn}
        setIsTrendingOn={setIsTrendingOn}
      />
      <TrendingSection
        isTrendingOn={isTrendingOn}
        selectedTrending={selectedTrending}
        setSelectedTrending={setSelectedTrending}
        filteredBets={bets}
        navigation={navigation}
      />
      <BetRows
        bets={bets}
        handleScroll={handleScroll}
        activePage={activePage}
        navigation={navigation}
      />
      <BottomNavigation
        navigation={navigation}
        toggleAddDropdown={toggleAddDropdown}
        toggleMenuDropdown={toggleMenuDropdown}
      />
      <DropdownMenu
        navigation={navigation}
        visible={menuDropdownVisible}
        setVisible={setMenuDropdownVisible}
      />
      <DropdownAdd
        navigation={navigation}
        visible={addDropdownVisible}
        setVisible={setAddDropdownVisible}
        toggleModal={toggleModal}
      />
      <CreateBetModal visible={modalVisible} onClose={toggleModal} />
    </SafeAreaView>
  );
};

export default MainScreen;
