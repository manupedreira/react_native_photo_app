import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const Color = {
  WHITE: "#FFFFFF",
  BLACK: "#000000",
  gradient: ["rgba(0, 0, 0, .2)", "#000000"]
};

export const Font = {
  MUSEO_BOLD: "MuseoSans-700",
  MUSEO_BOLD_ITALIC: "MuseoSans-700Italic",
  MUSEO_EXTRA_BOLD: "MuseoSans-900",
  MUSEO_EXTRA_BOLD_ITALIC: "MuseoSans-900Italic",
  MUSEO_EXTRA_LIGHT: "MuseoSans-100",
  MUSEO_EXTRA_LIGHT_ITALIC: "MuseoSans-100Italic",
  MUSEO_ITALIC: "MuseoSans-500_Italic",
  MUSEO_LIGHT: "MuseoSans-300",
  MUSEO_LIGHT_ITALIC: "MuseoSans-300Italic",
  MUSEO_REGULAR: "MuseoSans-500"
};

export const Spacing = {
  margin: 60,
  padding: 27
};

export const TextSize = {
  H1: 36,
  H2: 24,
  H3: 18,
  H4: 16,
  H5: 14,
  H6: 12
};

export const themeStyles = StyleSheet.create({
  card: {
    position: "relative",
    width: (width - 81) / 2,
    height: (width - 81) * 0.75,
    overflow: "hidden",
    borderRadius: 10
  },
  cardAnimated: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "relative",
    height: 50
  },
  cardGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: 70,
    padding: 10
  },
  cardMedia: {
    fontFamily: Font.MUSEO_LIGHT,
    color: Color.WHITE,
    fontSize: TextSize.H6
  },
  cardTitle: {
    fontFamily: Font.MUSEO_BOLD,
    color: Color.WHITE,
    fontSize: TextSize.H5
  },
  closeImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    width: "100%",
    overflow: "hidden",
    paddingTop: Spacing.margin,
    backgroundColor: Color.WHITE
  },
  detail: {
    width,
    height
  },
  detailGradient: {
    flexDirection: "column",
    justifyContent: "flex-end",
    position: "relative",
    width: "100%",
    height: "auto",
    padding: Spacing.padding,
    paddingTop: 40,
    paddingBottom: 40
  },
  detailGradientContainer: {
    position: "absolute",
    width: "100%",
    height: "auto",
    left: 0
  },
  detailImage: {
    width: 60,
    height: 60,
    overflow: "hidden",
    marginRight: 10,
    borderRadius: 30
  },
  detailInfo: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    position: "relative"
  },
  detailLink: {
    fontFamily: Font.MUSEO_EXTRA_LIGHT,
    color: Color.WHITE,
    fontSize: TextSize.H6
  },
  detailMedia: {
    marginBottom: 20,
    fontFamily: Font.MUSEO_EXTRA_LIGHT,
    color: Color.WHITE,
    fontSize: TextSize.H4
  },
  detailProfile: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  detailTitle: {
    marginBottom: 10,
    fontFamily: Font.MUSEO_BOLD,
    color: Color.WHITE,
    fontSize: TextSize.H1
  },
  detailUser: {
    marginBottom: 5,
    color: Color.WHITE,
    fontSize: TextSize.H5
  },
  image: {
    flex: 1,
    resizeMode: "cover"
  },
  loadingContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingBottom: 60
  },
  odd: {
    marginTop: Spacing.padding
  },
  scrollList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingLeft: Spacing.padding,
    paddingBottom: Spacing.padding,
    paddingRight: Spacing.padding
  },
  title: {
    color: Color.BLACK,
    fontFamily: Font.MUSEO_EXTRA_BOLD,
    fontSize: TextSize.H2,
    textAlign: "center"
  }
});
