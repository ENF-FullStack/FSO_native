import { View, Image, StyleSheet, Pressable } from "react-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#ffffff",
    display: "flex",
  },
  upper: {
    display: "flex",
    flexDirection: "row",
    paddingBottom: 10,
  },
  upperLeft: {
    paddingLeft: 5,
    paddingRight: 15,
    paddingTop: 5,
  },
  upperRight: {
    paddingRight: 10,
    flexDirection: "column",
    flexShrink: 1,
    alignItems: "flex-start",
  },
  upperRightItems: {
    marginVertical: 3,
  },
  lower: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  icons: {
    display: "flex",
    flexDirection: "column",
  },
  iconText: {
    alignSelf: "center",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  languageButton: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.textPrimary,
    padding: 7,
  },
  languageText: {
    color: "white",
  },
});

const InfoItem = ({ value, title, testID }) => {
  return (
    <View testID={testID}>
      {value >= 1000 ? (
        <Text fontWeight="bold" align="center">{`${(value / 1000).toFixed(
          1
        )}k`}</Text>
      ) : (
        <Text fontWeight="bold" align="center">
          {value}
        </Text>
      )}
      <Text color="textSecondary">{title}</Text>
    </View>
  );
};

//? 11.20 make language-pressable, include styles

const RepoItemView = ({ repository }) => {
  return (
    <View style={styles.container} testID="repositoryItem">
      <View style={styles.upper}>
        <View style={styles.upperLeft}>
          <Image
            style={styles.avatar}
            source={{ uri: `${repository.ownerAvatarUrl}` }}
            testID="avatarUrl"
          />
        </View>

        <View style={styles.upperRight}>
          <Text
            style={styles.upperRightItems}
            fontWeight="bold"
            fontSize="subheading"
          >
            {repository.fullName}
          </Text>
          <Text style={styles.upperRightItems} color="textSecondary">
            {repository.description}
          </Text>
          <Pressable style={[styles.languageButton, styles.upperRightItems]}>
            <Text style={styles.languageText}>{repository.language}</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.icons}>
          <View style={styles.iconText}>
            <InfoItem
              value={repository.stargazersCount}
              title="Stars"
              testID="stargazersCount"
            />
          </View>
        </View>

        <View style={styles.icons}>
          <View style={styles.iconText}>
            <InfoItem
              value={repository.forksCount}
              title="Forks"
              testID="forksCount"
            />
          </View>
        </View>

        <View style={styles.icons}>
          <View style={styles.iconText}>
            <InfoItem
              value={repository.reviewCount}
              title="Reviews"
              testID="reviewCount"
            />
          </View>
        </View>

        <View style={styles.icons}>
          <View style={styles.iconText}>
            <InfoItem
              value={repository.ratingAverage}
              title="Rating"
              testID="ratingAverage"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepoItemView;
