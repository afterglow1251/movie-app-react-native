import { Tabs } from "expo-router";
import TabIcon from "@/components/common/TabIcon";
import { bottomTabs } from "../../constants/layout.config";
import { styles } from "@/styles/tabs/TabsLayout.styles";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
      }}
    >
      {bottomTabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon
                focused={focused}
                title={tab.tabBarTitle}
                iconName={tab.iconName}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
