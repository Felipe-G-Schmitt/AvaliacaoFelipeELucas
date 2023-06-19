import { Button, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useEffect } from "react";
import * as Contacts from "expo-contacts";
import { useCallback } from "react";
import { useState } from "react";
import { FlatList } from "react-native-web";
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";

export default function ContactsInfo({ navigation }) {
    const [contacts, setContacts] = useState([]);

    async function carregarContatos(){
        const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        })
        setContacts(data)
    }

    useEffect((
        useCallback(() => {
            ( async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    carregarContatos();
                }
            })();
        })
    ), []);

  return (
    <View style={styles.container}>
      <Header title="Notificações" />
        <View style={styles.container}>
            {
                contacts
                    ? <FlatList
                        style={{ flex: 1, gap: 10 }}
                        data={contacts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => {
                            <Item
                                item={item}
                            />
                        }}
                        />
                        : <></>
            }
        </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#EACBF8",
  },
});
