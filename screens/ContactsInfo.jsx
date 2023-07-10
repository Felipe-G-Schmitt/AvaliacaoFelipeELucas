import React, { useState, useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import Header from "../components/Header";
import * as Contacts from "expo-contacts";
import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Items from "../components/Items";

export default function ContactsInfo({ navigation }) {
  const [expoToken, setExpoToken] = useState("");
  const [NomeContato, setNomeContato] = useState("");
  const [TelefoneContato, setTelefoneContato] = useState("");
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    filterContacts();
  }, [searchText, contacts]);

  async function loadContacts() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });
    setContacts(data);
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          loadContacts();
        }
      })();
    }, [])
  );

  const filterContacts = () => {
    if (!searchText) {
      setFilteredContacts(contacts);
      return;
    }

    const filtered = contacts.filter((contact) => {
      const name = contact.name ? contact.name.toLowerCase() : "";
      return name.includes(searchText.toLowerCase());
    });

    setFilteredContacts(filtered);
  };

  async function notificarContato(){
    const token = await Notification.scheduleNotificationAsync({
        content: {
            title: NomeContato,
            subtitle: TelefoneContato,
            body: NomeContato,
        },
        trigger: { seconds: 3 },
    })
    setExpoToken(token);
}

  return (
    <View style={styles.container}>
      <Header title="Contatos" />
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar por nome"
          value={searchText}
          onChangeText={setSearchText}
          placeholderTextColor={"black"}
        />
        <Button title="Limpar" onPress={() => setSearchText("")} />
      </View>
      <View style={styles.contactsContainer}>
        {filteredContacts.length > 0 ? (
          <FlatList
            style={{ flex: 1, gap: 10 }}
            onPress={() => notificarContato()}
            data={filteredContacts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <Items item={item} />}
          />
        ) : (
          <Text>Nenhum contato encontrado.</Text>
        )}
      </View>
      <Text  style={{ textAlign: "center", marginTop: 10}}>Expo Token: { expoToken }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 15,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginRight: 10,
    paddingHorizontal: 10,
    backgroundColor: "#CCCCCC",
    color: "black",
  },
  contactsContainer: {
    flex: 1,
    padding: 10,
  },
});
