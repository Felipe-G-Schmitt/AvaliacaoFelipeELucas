import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import * as Contacts from "expo-contacts";
import { useCallback } from "react";
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import Items from "../components/Items";

export default function ContactsInfo({ navigation }) {
    const [contacts, setContacts] = useState([]);

    async function carregarContatos(){
        const { data } = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails, 
                Contacts.Fields.PhoneNumbers
            ]
        })
        setContacts(data)
    };

    useFocusEffect(
        useCallback(() => {
            ( async () => {
                const { status } = await Contacts.requestPermissionsAsync();
                if (status === 'granted') {
                    carregarContatos();
                }
            })();
        }, [])
    );

  return (
    <View style={styles.container}>
      <Header title="Contatos" />
        <View style={styles.container}>
            {
                contacts
                    ? <FlatList
                        style={{ flex: 1, gap: 10 }}
                        data={contacts}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => (
                            <Items
                                item={item}
                            />
                        )}
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
