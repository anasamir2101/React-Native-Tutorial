import {
  View,
  Text,
  StyleSheet,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';
import CardsData from './CardsData';
import { useState } from 'react';

const getTypeDetails = (type) => {
  switch (type.toLowerCase()) {
    case 'electric':
      return { borderColor: '#FFD700', emoji: '⚡' };
    case 'water':
      return { borderColor: '#6493EA', emoji: '💧' };
    case 'fire':
      return { borderColor: '#FF5733', emoji: '🔥' };
    case 'grass':
      return { borderColor: '#66CC66', emoji: '🌲' };
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' };
  }
};

const PokemonCard = () => {
  const [buttonColor, setbuttonColor] = useState('white');

  const handlecolor = () => {
    const newColor = buttonColor === 'white' ? 'green' : 'white';
    setbuttonColor(newColor);
  };
  return CardsData.map((card) => {
    const { name, image, moves, weaknesses, type, hp, id } = card;
    const { emoji, borderColor } = getTypeDetails(type);

    return (
      <View style={styles.card} key={id}>
        <View style={styles.nameConatiner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.hp}>❤{hp}</Text>
        </View>
        <Image
          source={image}
          accessibilityLabel={`${name} pokemon`}
          style={styles.image}
          resizeMode='contain'
        />

        <View style={styles.typeContainer}>
          <TouchableOpacity onPress={handlecolor}>
            <View
              style={[
                styles.badge,
                { borderColor, backgroundColor: buttonColor },
              ]}
            >
              <Text style={styles.typeEmoji}>{emoji}</Text>
              <Text style={styles.typeText}>{type}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.moveContainer}>
          <Text style={styles.moveText}>Moves: {moves.join(', ')}</Text>
        </View>
        <View style={styles.weaknessesContainer}>
          <Text style={styles.weaknessesText}>
            Weaknesses: {weaknesses.join(', ')}
          </Text>
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    margin: 16,
    borderWidth: 2,
    borderRadius: 16,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameConatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  badge: {
    flexDirection: 'row',
    borderWidth: 4,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  moveContainer: {
    marginBottom: 16,
  },
  moveText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  weaknessesContainer: {
    marginBottom: 8,
  },
  weaknessesText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default PokemonCard;
