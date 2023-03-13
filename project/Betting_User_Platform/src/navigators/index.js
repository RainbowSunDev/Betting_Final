import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "../pages/Auth/Login/Login.page";
import RegisterPage from "../pages/Auth/Register/Register.page";

import RoomEnterPage from "../pages/RoomEnter/RoomEnter.page";

import PersonalSettingPage from "../pages/PersonalSettings/PersonalSettings.page";
import AvatarSettingPage from "../pages/PersonalSettings/AvatarSetting.page";
import NicknameSettingPage from "../pages/PersonalSettings/NicknameSetting.page";
import PasswordSettingPage from "../pages/PersonalSettings/PasswordSetting.page";

import GameLoadPage from "../pages/Game/GameLoad.page";
import GameHallPage from "../pages/Game/GameHall.page";

import CustomerServicePage from "../pages/Service/CustomerService.page";

import WalletCenterPage from "../pages/Wallet/WalletCenter.page";
import UpPointPage from "../pages/Wallet/UpPoint.page";
import PaymentMethodPage from "../pages/Wallet/PaymentMethod.page";
import DownPointPage from "../pages/Wallet/DownPoint.page";
import ApplyRecordPage from "../pages/Wallet/ApplyRecord.page";
import GameRecordPage from "../pages/Wallet/GameRecord.page";
import QuizReportPage from "../pages/Wallet/QuizReport.page";
import StatementBenefitPage from "../pages/Wallet/StatementBenefit.page";
import ChangeCreditAccountPage from "../pages/Wallet/ChangeCreditAccount.page";
import RedEnvelopeReportPage from "../pages/Wallet/RedEnvelopeReport.page";
import IntroductionPage from "../pages/Help/Introduction.page";
import SettingPage from "../pages/PersonalSettings/Setting.page";
import AccountManagementPage from "../pages/PersonalSettings/AccountManagement.page";
import GameRoomPage from "../pages/Game/GameRoom.page";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group name="Auth">
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
        </Stack.Group>
        <Stack.Group name="RoomEnter">
          <Stack.Screen name="RoomEnter" component={RoomEnterPage} />
        </Stack.Group>
        <Stack.Group name="Settings">
          <Stack.Screen
            name="PersonalSetting"
            component={PersonalSettingPage}
          />
          <Stack.Screen name="AvatarSetting" component={AvatarSettingPage} />
          <Stack.Screen
            name="NicknameSetting"
            component={NicknameSettingPage}
          />
          <Stack.Screen
            name="PasswordSetting"
            component={PasswordSettingPage}
          />
          <Stack.Screen name="Setting" component={SettingPage} />
          <Stack.Screen
            name="AccountManagement"
            component={AccountManagementPage}
          />
        </Stack.Group>
        <Stack.Group name="Game">
          <Stack.Screen name="GameLoad" component={GameLoadPage} />
          <Stack.Screen name="GameHall" component={GameHallPage} />
          <Stack.Screen name="GameRoom" component={GameRoomPage} />
        </Stack.Group>
        <Stack.Group name="Chat">
          <Stack.Screen
            name="CustomerService"
            component={CustomerServicePage}
          />
        </Stack.Group>
        <Stack.Group name="Help">
          <Stack.Screen name="Introduction" component={IntroductionPage} />
        </Stack.Group>
        <Stack.Group name="Wallet">
          <Stack.Screen name="WalletCenter" component={WalletCenterPage} />
          <Stack.Screen name="PaymentMethod" component={PaymentMethodPage} />
          <Stack.Screen name="UpPoint" component={UpPointPage} />
          <Stack.Screen name="DownPoint" component={DownPointPage} />
          <Stack.Screen name="ApplyRecord" component={ApplyRecordPage} />
          <Stack.Screen name="GameRecord" component={GameRecordPage} />
          <Stack.Screen name="QuizReport" component={QuizReportPage} />
          <Stack.Screen
            name="StatementBenefit"
            component={StatementBenefitPage}
          />
          <Stack.Screen
            name="ChangeCreditAccount"
            component={ChangeCreditAccountPage}
          />
          <Stack.Screen
            name="RedEnvelopeReport"
            component={RedEnvelopeReportPage}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
