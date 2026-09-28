import { useState } from 'react';
import { View, Button, Pressable, Text, TextInput, Switch, Alert } from 'react-native';
import { TextInputPass } from '../TextInputPass/TextInputPass';
import { styles } from './ButtonPassStyles';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

const MIN_LENGTH = 1;
const MAX_LENGTH = 64;

export function ButtonPass() {
    const [senha, setSenha] = useState('');
    const [tamanho, setTamanho] = useState('10');
    const [misturar, setMisturar] = useState(true);
    function handleGenButton() {
        const length = parseInt(tamanho, 10);
        if (isNaN(length) || length < MIN_LENGTH || length > MAX_LENGTH) {
            Alert.alert('Tamanho inválido', `Digite um valor entre ${MIN_LENGTH} e ${MAX_LENGTH}.`);
            return;
        }
        let senhaFinal = generatePass(length, misturar);
        setSenha(senhaFinal);
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(senha);
    }

    return (
        <View>

            <TextInputPass pass={senha} />

            <View style={styles.row}>
                <Text style={styles.label}>Tamanho da senha:</Text>
                <TextInput
                    style={styles.lengthInput}
                    value={tamanho}
                    onChangeText={(t) => setTamanho(t.replace(/[^0-9]/g, ''))}
                    keyboardType="numeric"
                    maxLength={2}
                />
            </View>

            <View style={styles.row}>
                <Text style={styles.label}>Misturar maiúsculas e minúsculas</Text>
                <Switch value={misturar} onValueChange={setMisturar} />
            </View>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleGenButton}
            >
                <Text style={styles.text}>🔑 Gerar senha 🔑</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
                onPress={handleCopyButton}
            >
                <Text style={styles.text}>🗒️ Copiar 🗒️</Text>
            </Pressable>

        </View>
    )
}