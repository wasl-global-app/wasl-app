
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar
} from "react-native";

export default function App() {
  const [language, setLanguage] = useState("ar");

  const isArabic = language === "ar";

  const content = {
    ar: {
      slogan: "كل ما تحتاجه، يصلك!",
      location: "موقع التوصيل",
      search: "ابحث عن مطعم أو متجر...",
      welcome: "مرحباً بك في وَصْل",
      description: "اطلب بسهولة، واستمتع بالتوصيل إلى باب منزلك",
      categories: "استكشف الخدمات",
      restaurants: "المطاعم",
      grocery: "البقالة",
      pharmacy: "الصيدليات",
      delivery: "التوصيل",
      featured: "مطاعم مميزة",
      coming: "قريباً في منطقتك"
    },
    en: {
      slogan: "Everything you need, delivered!",
      location: "Delivery location",
      search: "Search restaurants or stores...",
      welcome: "Welcome to WASL",
      description: "Order easily and enjoy delivery to your door",
      categories: "Explore services",
      restaurants: "Restaurants",
      grocery: "Grocery",
      pharmacy: "Pharmacies",
      delivery: "Delivery",
      featured: "Featured Restaurants",
      coming: "Coming soon to your area"
    }
  };

  const t = content[language];

  const services = [
    { icon: "🍔", title: t.restaurants },
    { icon: "🛒", title: t.grocery },
    { icon: "💊", title: t.pharmacy },
    { icon: "🛵", title: t.delivery }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>WASL | وَصْل</Text>
            <Text style={styles.slogan}>{t.slogan}</Text>
          </View>

          <TouchableOpacity
            style={styles.languageButton}
            onPress={() =>
              setLanguage(isArabic ? "en" : "ar")
            }
          >
            <Text style={styles.languageText}>
              {isArabic ? "EN" : "عربي"}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.location}>
          <Text style={styles.smallText}>{t.location}</Text>
          <Text style={styles.locationText}>
            📍 Syria
          </Text>
        </View>

        <View style={styles.hero}>
          <Text style={styles.heroTitle}>{t.welcome}</Text>
          <Text style={styles.heroDescription}>
            {t.description}
          </Text>
          <Text style={styles.scooter}>🛵</Text>
        </View>

        <TextInput
          style={styles.search}
          placeholder={t.search}
          placeholderTextColor="#888"
          textAlign={isArabic ? "right" : "left"}
        />

        <Text style={styles.sectionTitle}>
          {t.categories}
        </Text>

        <View style={styles.services}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceCard}
            >
              <Text style={styles.serviceIcon}>
                {service.icon}
              </Text>
              <Text style={styles.serviceTitle}>
                {service.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>
          {t.featured}
        </Text>

        <View style={styles.emptyCard}>
          <Text style={styles.emptyIcon}>🍽️</Text>
          <Text style={styles.emptyText}>{t.coming}</Text>
        </View>

        <Text style={styles.footer}>
          WASL GLOBAL © 2026
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  header: {
    padding: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  logo: {
    color: "#087F5B",
    fontSize: 25,
    fontWeight: "900"
  },
  slogan: {
    color: "#777",
    marginTop: 5,
    fontSize: 12
  },
  languageButton: {
    borderWidth: 1,
    borderColor: "#087F5B",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20
  },
  languageText: {
    color: "#087F5B",
    fontWeight: "bold"
  },
  location: {
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: "#F0F7F3",
    borderRadius: 14
  },
  smallText: {
    color: "#777",
    fontSize: 12
  },
  locationText: {
    color: "#173D30",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5
  },
  hero: {
    margin: 20,
    padding: 22,
    borderRadius: 20,
    backgroundColor: "#087F5B",
    minHeight: 175
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold"
  },
  heroDescription: {
    color: "#E5F5EC",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 23
  },
  scooter: {
    position: "absolute",
    right: 15,
    bottom: 15,
    fontSize: 48
  },
  search: {
    marginHorizontal: 20,
    marginBottom: 25,
    padding: 15,
    backgroundColor: "#F4F5F4",
    borderRadius: 12,
    fontSize: 14
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 15,
    fontSize: 19,
    fontWeight: "bold",
    color: "#173D30"
  },
  services: {
    marginHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28
  },
  serviceCard: {
    width: "23%",
    backgroundColor: "#F0F7F3",
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: "center"
  },
  serviceIcon: {
    fontSize: 27
  },
  serviceTitle: {
    fontSize: 10,
    fontWeight: "600",
    color: "#173D30",
    marginTop: 8
  },
  emptyCard: {
    marginHorizontal: 20,
    minHeight: 120,
    borderRadius: 15,
    backgroundColor: "#F0F7F3",
    alignItems: "center",
    justifyContent: "center"
  },
  emptyIcon: {
    fontSize: 35
  },
  emptyText: {
    color: "#087F5B",
    marginTop: 8,
    fontWeight: "bold"
  },
  footer: {
    textAlign: "center",
    color: "#999",
    fontSize: 11,
    padding: 30
  }
});
