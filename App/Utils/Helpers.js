// import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-root-toast';
// import Colors from '../common/Colors';
import { Platform, ToastAndroid } from 'react-native';


const showToast = (toast) => {
    // When Calling this function
    // call it this way: Helpers.showToast({message: "hello", hide: ()=>{alert("hello")}})
    // If you only want to show message call Helpers.showToastMessage("my message")

    const message = toast.message;
    const position = toast.position || 45;
    const duration = toast.duration || 3000;
    const show = toast.show || undefined;
    const shown = toast.shown || undefined;
    const hide = toast.hide || undefined;
    const hidden = toast.hidden || undefined;

    if (message !== undefined)
        Toast.show(message, {
            duration: duration,
            position: position,
            shadow: true,
            animation: true,
            hideOnPress: false,
            backgroundColor: '#8a2be2',
            delay: 0,
            onShow: () => {
                if (typeof show === "function") show();
            },
            onShown: () => {
                // calls on toast\`s appear animation end.
                if (typeof shown === "function") shown();
            },
            onHide: () => {
                // calls on toast\`s hide animation start.
                if (typeof hide === "function") hide();
            },
            onHidden: () => {
                // calls on toast\`s hide animation end.
                if (typeof hidden === "function") hidden();
            }
        });
};

const showToastMessage = message => {
    if (Platform.OS === 'ios') {
        showToast({ message })
    } else {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.LONG,
            ToastAndroid.TOP,
        );
    }
};

export default {
    showToast,
    showToastMessage,
}
