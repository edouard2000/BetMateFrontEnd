import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  createP2PButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E88E5',
    padding: 10,
    borderRadius: 5,
  },
  createP2PButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  categoryHeader: {
    marginBottom: 20,
  },
  categoryList: {
    flexDirection: 'row',
  },
  categoryTitle: {
    marginHorizontal: 10,
    paddingBottom: 5,
  },
  categoryText: {
    color: '#AAAAAA',
    fontSize: 16,
  },
  categoryTextActive: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  activeCategoryIndicator: {
    width: '100%',
    height: 2,
    backgroundColor: '#1E88E5',
    marginTop: 5,
  },
});

export default styles;
