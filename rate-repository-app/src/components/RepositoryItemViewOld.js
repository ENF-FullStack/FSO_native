import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigate } from "react-router-native";
import Text from "./Text";

import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
  },
  column: {
    flexDirection: "column",
    alignItems: "baseline",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoItem: {
    flexDirection: "column",
    textAlign: "center",
  },
  avatar: {
    flexDirection: "column",
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 8,
  },
  language: {
    color: "#ffffff",
    fontWeight: "bold",
    backgroundColor: theme.colors.primary,
    padding: 8,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 6,
  },
});

const InfoItem = ({ value, title, testID }) => {
  return (
    <View styles={styles.infoItem} testID={testID}>
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

const TopBar = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View>
    <Image
      style={styles.avatar}
      source={{ uri: ownerAvatarUrl }}
      testID="avatarUrl"
    />
    <View>
      <Text>{fullName}</Text>
      <Text>{description}</Text>
      <Text>{language}</Text>
    </View>
  </View>
);
const BottomBar = ({
  stargazersCount,
  forksCount,
  reviewCount,
  ratingAverage,
}) => (
  <View style={styles.row}>
    <InfoItem value={stargazersCount} title="Stars" testID="stargazersCount" />
    <InfoItem value={forksCount} title="Forks" testID="forksCount" />
    <InfoItem value={reviewCount} title="Reviews" testID="reviewCount" />
    <InfoItem value={ratingAverage} title="Rating" testID="ratingAverage" />
  </View>
);

// ? 10.19 view to individual RepositoryItem

const RepositoryItemView = (props) => {
  const navigate = useNavigate();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate(`/${props.id}`)}
    >
      <TopBar {...props} />
      <BottomBar {...props} />
      {props.children}
    </TouchableOpacity>
  );
};

export default RepositoryItemView;
