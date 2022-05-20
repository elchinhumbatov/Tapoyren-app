import React, { useContext, useState, useEffect } from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { CheckBox } from "react-native-elements";
import colors from "../../config/colors";
import az from '../../assets/img/az-flag.png';
import en from '../../assets/img/usa-flag.png';
import ru from '../../assets/img/russia-flag.png';
import i18n from "../../service/i18n";
import { LangContext } from "../../context/langContext";

const Language = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  let {lang, setLocalLang} = useContext(LangContext);

  const handleCheck = async (e) => {
    await setLocalLang(e);
    switch (e) {
      case 'az':
        setCheck1(prev => !prev);
        setCheck2(false);
        setCheck3(false);
        break;
    
      case 'en':
        setCheck1(false);
        setCheck2(prev => !prev);
        setCheck3(false);
        break;
    
      case 'ru':
        setCheck1(false);
        setCheck2(false);
        setCheck3(prev => !prev);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    handleCheck(lang);
  }, [])
  

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity style={styles.langs} onPress={() => handleCheck('az')}>
        <View style={styles.lang}>
          <CheckBox
            containerStyle={styles.checkbox}
            title={`Az`}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor={colors.primary}
            checked={check1}
          />
          <Image source={az} style={styles.thumbnail} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.langs} onPress={() => handleCheck('en')}>
        <View style={styles.lang}>
          <CheckBox
            containerStyle={styles.checkbox}
            title={`En`}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor={colors.primary}
            checked={check2}
          />
          <Image source={en} style={styles.thumbnail} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.langs} onPress={() => handleCheck('ru')}>
        <View style={styles.lang}>
          <CheckBox
            containerStyle={styles.checkbox}
            title={`Ru`}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checkedColor={colors.primary}
            checked={check3}
          />
          <Image source={ru} style={styles.thumbnail} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Language;

const styles = StyleSheet.create({
  langs: {
    padding: 10,
  },
  lang: {
    width: "100%",
    height: 70,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 12
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0
  },
  thumbnail: {
    width: 30,
    height: 30,
  }
});
